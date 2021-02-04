import * as React from "react"
import { useState } from "react"

enum Tokens {
  TIMES = "{{TIMES}}",
  STREAM_LINK = "{{STREAM_LINK}}",
}

const timeListTemplate = `
{{helsinki/finland}}
{{amsterdam/netherlands}}
`

const generateTimes = template => {
  return template
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
