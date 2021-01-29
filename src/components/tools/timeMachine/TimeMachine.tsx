import * as React from "react"

enum Tokens {
  TIMES = "{{TIMES}}",
  STREAM_LINK = "{{STREAM_LINK}}",
}

const postTemplate = `Bu aksam pregremning yayini olacaktir.
${Tokens.TIMES}
${Tokens.STREAM_LINK}
`

const timeListTemplate = `
{{helsinki/finland}}
{{amsterdam/netherlands}}
`

const generateTimes = template => {
  return template
}

const generatePost = template => {
  return postTemplate.split(Tokens.TIMES).join(generateTimes(timeListTemplate))
}

const TimeMachine = () => {
  return (
    <div>
      <pre>{generatePost(postTemplate)}</pre>
    </div>
  )
}

export default TimeMachine
