import * as React from "react"
import { ChangeEvent, useReducer, useState } from "react"
import * as CT from "countries-and-timezones"
import moment from "moment-timezone"

enum Tokens {
  TIMES = "{{TIMES}}",
  STREAM_LINK = "{{STREAM_LINK}}",
}

enum TimezonesActionType {
  Add = "TimezonesActionTypeAdd",
  Remove = "TimezonesActionTypeRemove",
}

interface TimezonesAction {
  type: TimezonesActionType
  timezone?: string | null
}

interface GeneratedTimesData {
  [hour: string]: {
    zones: string[]
    countries: string[]
  }
}

const TZ0 = "GMT"
const HOUR_FORMAT = "HH:mm"

const unique = (value: string, index: number, self: string[]) =>
  self.indexOf(value) === index

const generateTimes = (timezones: string[], gmtTimeString: string) => {
  const accMapping: {
    hour: string
    zone: string
    country: string
  }[] = timezones.map(timezone => ({
    hour: getTimeStringInTimezone(gmtTimeString, TZ0, timezone),
    zone: moment.tz(timezone).zoneAbbr(),
    country: CT.getCountryForTimezone(timezone)?.id || "?",
  }))
  const timesWithTimezones = accMapping.reduce(
    (acc: GeneratedTimesData, { hour, zone, country }) => ({
      ...acc,
      [hour]: {
        zones: [...(acc[hour]?.zones || []), zone].filter(unique),
        countries: [...(acc[hour]?.countries || []), country].filter(unique),
      },
    }),
    {}
  )

  return Object.keys(timesWithTimezones)
    .map(time => {
      const { zones, countries } = timesWithTimezones[time]
      const numCountryZones =
        moment.tz.zonesForCountry(countries[0])?.length || 0
      const showZone = numCountryZones > 1
      const flags = countries
        .map((c: string) => `:flag_${c.toLowerCase()}:`)
        .join(" ")
      return `${flags} ${showZone ? zones : ""} ${time}`
    })
    .join("\r")
}

const generateOutput = (
  postTemplate: string,
  timezones: string[],
  gmtTimeString: string,
  streamLinkUrl: string
) => {
  return postTemplate
    .split(Tokens.TIMES)
    .join(generateTimes(timezones, gmtTimeString))
    .split(Tokens.STREAM_LINK)
    .join(streamLinkUrl)
}

const initialTimezones: string[] = [
  "Europe/Istanbul",
  "Europe/Amsterdam",
  "Europe/Berlin",
  "Europe/Helsinki",
  "America/Los_Angeles",
  "America/New_York",
]

const timezonesReducer = (
  timezones: string[],
  action: TimezonesAction
): string[] => {
  switch (action.type) {
    case TimezonesActionType.Add:
      if (
        action.timezone &&
        timezones.findIndex(t => t === action.timezone) == -1
      ) {
        return [...timezones, action.timezone]
      } else {
        return [...timezones]
      }
    case TimezonesActionType.Remove:
      return [...timezones].filter(
        (timezone: string) => timezone !== action.timezone
      )
    default:
      return timezones
  }
}

const getTimeStringInTimezone = (
  timeString: string,
  fromTimezone: string,
  toTimezone: string
): string =>
  moment
    .tz(timeString, HOUR_FORMAT, fromTimezone)
    .tz(toTimezone)
    .format(HOUR_FORMAT)

const nowGmtTimeString = moment().tz(TZ0).format(HOUR_FORMAT)

interface StreamLinkOption {
  label: string
  linkUrl: string
}

const streamLinkOptions: StreamLinkOption[] = [
  { label: "Eralp Twitch", linkUrl: "https://twitch.tv/ErikThePlum" },
  {
    label: "Mert twitch",
    linkUrl: "https://twitch.tv/TheBeastOfTheMiddleEast",
  },
  {
    label: "Eralp Youtube",
    linkUrl: "https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg/live",
  },
  {
    label: "Can Twitch",
    linkUrl: "https://www.twitch.tv/LeeroyCankins",
  },
  {
    label: "UnhandledException.Club",
    linkUrl: "https://unhandledexception.club",
  },
  {
    label: "Discord",
    linkUrl: "http://discord.gg/4GgCG5C",
  },
  {
    label: "Kulak Podcast",
    linkUrl: "https://kulak.show/",
  },
  {
    label: "Abes Podcast",
    linkUrl: "https://www.abespodcast.com/",
  },
]

const TimeMachine = () => {
  const [postTemplate, setPostTemplate] = useState<string>(
    `Bu aksam pregrenming yayini olacaktir.\r${Tokens.TIMES}\r${Tokens.STREAM_LINK}`
  )
  const systemTimezone = moment.tz.guess(true)
  const [gmtTimeString, setGmtTimeString] = useState<string>(nowGmtTimeString)
  const handleTemplateChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setPostTemplate(e.target.value)
  const [timezones, timezonesDispatch] = useReducer(
    timezonesReducer,
    initialTimezones
  )
  const handleOnRemoveTimezone = (timezone: string) =>
    timezonesDispatch({ timezone, type: TimezonesActionType.Remove })

  const handleOnAddTimezone = () => {
    timezonesDispatch({
      timezone: prompt("Add Timezone", systemTimezone),
      type: TimezonesActionType.Add,
    })
  }
  const handleOnTimezoneHourChange = (timezone: string) => {
    const value = prompt(
      `Set time for ${timezone}`,
      getTimeStringInTimezone(gmtTimeString, TZ0, timezone)
    )
    const input = moment.tz(value!, HOUR_FORMAT, timezone)
    if (input.isValid()) {
      setGmtTimeString(input.tz(TZ0).format(HOUR_FORMAT))
    }
  }

  const [streamLinkUrl, setStreamLinkUrl] = useState<string>(
    streamLinkOptions[0].linkUrl
  )

  const handleOnStreamLinkChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setStreamLinkUrl(e.target.value)

  return (
    <div>
      <textarea
        id="input"
        name="story"
        rows={5}
        cols={33}
        value={postTemplate}
        onChange={handleTemplateChange}
      />
      <div>
        <div>Stream Link</div>
        <select
          name="stream-link"
          id="stream-link"
          value={streamLinkUrl}
          onChange={handleOnStreamLinkChange}
        >
          {streamLinkOptions.map(({ label, linkUrl }) => (
            <option key={label} value={linkUrl}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>{`System timezone: ${systemTimezone}`}</div>
        <div>{`GMT: ${gmtTimeString}`}</div>
        {timezones.map(timezone => (
          <div key={timezone}>
            <label key={timezone}>{`${timezone}: `}</label>
            <button onClick={() => handleOnTimezoneHourChange(timezone)}>
              {getTimeStringInTimezone(gmtTimeString, TZ0, timezone)}
            </button>
            <button onClick={() => handleOnRemoveTimezone(timezone)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={handleOnAddTimezone}>Add</button>
      </div>
      <textarea
        readOnly
        id="output"
        name="story"
        rows={10}
        cols={33}
        value={generateOutput(
          postTemplate,
          timezones,
          gmtTimeString,
          streamLinkUrl
        )}
      />
    </div>
  )
}

export default TimeMachine
