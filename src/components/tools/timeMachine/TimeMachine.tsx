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

const TZ0 = "Europe/London"
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
      const showZone = moment.tz.zonesForCountry(countries[0]).length > 1
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
  gmtTimeString: string
) => {
  return postTemplate
    .split(Tokens.TIMES)
    .join(generateTimes(timezones, gmtTimeString))
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
      return [...timezones].filter(t => t !== action.timezone)
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
      timezone: prompt("Add Timezone", "Europe/Helsinki"),
      type: TimezonesActionType.Add,
    })
  }
  const handleOnTimezoneHourChange = (timezone: string) => {
    const value = prompt(
      `Set time for ${timezone}`,
      getTimeStringInTimezone(gmtTimeString, TZ0, timezone)
    )
    const input = moment(value, HOUR_FORMAT).tz(timezone)
    if (input.isValid()) {
      setGmtTimeString(input.tz(TZ0).format(HOUR_FORMAT))
    }
  }
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
        <div>{`System timezone: ${systemTimezone}`}</div>
        <div>{`GMT: ${gmtTimeString}`}</div>
        {timezones.map(timezone => (
          <>
            <label key={timezone}>{`${timezone}: `}</label>
            <button
              key={timezone}
              onClick={() => handleOnTimezoneHourChange(timezone)}
            >
              {getTimeStringInTimezone(gmtTimeString, TZ0, timezone)}
            </button>
            <button
              key={timezone}
              onClick={() => handleOnRemoveTimezone(timezone)}
            >
              Remove
            </button>
            <br />
          </>
        ))}
        <button onClick={handleOnAddTimezone}>Add</button>
      </div>
      <textarea
        readOnly
        id="output"
        name="story"
        rows={5}
        cols={33}
        value={generateOutput(postTemplate, timezones, gmtTimeString)}
      />
    </div>
  )
}

export default TimeMachine
