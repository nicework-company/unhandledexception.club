import * as React from "react"
import { useState } from "react"
import timezones from "timezones.json"
import * as cityTimezones from "city-timezones"

enum Tokens {
  TIMES = "{{TIMES}}",
  STREAM_LINK = "{{STREAM_LINK}}",
}

const timeListTemplate = ["Europe/Helsinki", "Europe/Amsterdam"]

const generateTimes = template => {
  return template.reduce((acc, timezone) => `${acc} ${timezone}`, "")
}

const generateOutput = postTemplate => {
  return postTemplate.split(Tokens.TIMES).join(generateTimes(timeListTemplate))
}

const TimeMachine = () => {
  const [postTemplate, setPostTemplate] = useState<string>(
    `Bu aksam pregremning yayini olacaktir. ${Tokens.TIMES} ${Tokens.STREAM_LINK}`
  )
  const handleTemplateChange = e => setPostTemplate(e.target.value)
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
        {timeListTemplate.map(timezone => (
          <>
            <label>{`${timezone}: `}</label>
            <input key={timezone} value={`20:00`} />
            <br />
          </>
        ))}
      </div>
      <textarea
        readOnly
        id="output"
        name="story"
        rows={5}
        cols={33}
        value={generateOutput(postTemplate)}
      />
    </div>
  )
}

export default TimeMachine
