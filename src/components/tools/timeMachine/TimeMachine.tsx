import * as React from "react"
import { useReducer, useState } from "react"
import timezones from "timezones.json"
import * as cityTimezones from "city-timezones"
import * as CT from "countries-and-timezones"
import * as moment from "moment-timezone"
import * as countryFlagEmoji from "country-flag-emoji"

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
  timezone: string
}

const unique = (value, index, self) => self.indexOf(value) === index

const generateTimes = (timezones, time) => {
  const baseTime = moment(time, "HH:mm").tz("GMT")
  const timesWithTimezones = timezones
    .map(timezone => [
      baseTime.clone().tz(timezone).format("HH:mm"),
      moment.tz(timezone).zoneAbbr(),
      CT.getCountryForTimezone(timezone).id,
    ])
    .reduce(
      (acc, [hour, zone, country]) => ({
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
      const flags = countries.map(c => `:flag_${c.toLowerCase()}:`).join(" ")
      return `${flags} ${showZone ? zones : ""} ${time}`
    })
    .join("\r")
}

const countryCodeToFlagEmoji = code => {}

const generateOutput = (postTemplate, timezones, time) => {
  return postTemplate.split(Tokens.TIMES).join(generateTimes(timezones, time))
}

const initialTimezones: string[] = [
  "Europe/Helsinki",
  "Europe/Amsterdam",
  "Europe/Berlin",
  "Europe/Istanbul",
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

const getTimeStringInTimezone = (time: string, timezone: string): string => {
  return moment(time, "HH:mm").tz(timezone).format("HH:mm")
}

const TimeMachine = () => {
  const [postTemplate, setPostTemplate] = useState<string>(
    `Bu aksam pregrenming yayini olacaktir.\r${Tokens.TIMES}\r${Tokens.STREAM_LINK}`
  )
  const now = new Date()
  const [baseTimeString, setBaseTimeString] = useState<string>(
    moment().format("HH:mm")
  )
  const handleTemplateChange = e => setPostTemplate(e.target.value)
  const [timezones, timezonesDispatch] = useReducer(
    timezonesReducer,
    initialTimezones
  )
  const handleOnRemoveTimezone = timezone =>
    timezonesDispatch({ timezone, type: TimezonesActionType.Remove })
  const handleOnAddTimezone = timezone => {
    timezonesDispatch({
      timezone: prompt("Add Timezone", "Europe/Helsinki"),
      type: TimezonesActionType.Add,
    })
  }
  const handleOnTimezoneHourChange = timezone => {
    const value = prompt(
      `Set time for ${timezone}`,
      getTimeStringInTimezone(baseTimeString, timezone)
    )
    const input = moment(value, "HH:mm").tz(timezone)
    if (input.isValid()) {
      setBaseTimeString(input.clone().tz("GMT").format("HH:mm"))
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
        {timezones.map(timezone => (
          <>
            <label>{`${timezone}: `}</label>
            <button
              key={timezone}
              onClick={e => handleOnTimezoneHourChange(timezone)}
            >
              {getTimeStringInTimezone(baseTimeString, timezone)}
            </button>
            <button onClick={() => handleOnRemoveTimezone(timezone)}>
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
        value={generateOutput(postTemplate, timezones, baseTimeString)}
      />
    </div>
  )
}

export default TimeMachine
