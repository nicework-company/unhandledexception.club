import React, { useState, useEffect } from "react"
import {
  TiledLink,
  TiledLinkContainer,
  TiledLinkIcon,
  SectionTitle,
} from "../theme"

const Contributors = () => {
  const [contributors, setContributors] = useState(null)

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/nicework-company/unhandledexception.club/contributors"
    )
      .then(x => x.json())
      .then(val => setContributors(val))
  }, [])

  return (
    <>
      <SectionTitle>Contributors</SectionTitle>
      <TiledLinkContainer>
        {contributors &&
          contributors.map(item => (
            <TiledLink href={item.html_url}>
              <TiledLinkIcon src={item.avatar_url} alt={item.login} />@
              {item.login}
            </TiledLink>
          ))}
      </TiledLinkContainer>
    </>
  )
}

export default Contributors
