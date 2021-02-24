import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TiledLinkContainer, TiledLink, TiledLinkIcon } from "../theme"

const TopLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      discordIcon: file(relativePath: { eq: "Discord-Logo-Color.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      }
    }
  `)
  const discordIcon = data.discordIcon.childImageSharp.resize.src

  return (
    <>
      <TiledLinkContainer>
        <TiledLink href="http://discord.gg/4GgCG5C">
          Join Unhandled Exception Club Discord
          <TiledLinkIcon
            src={discordIcon}
            alt="Unhandled Exception Club Discord"
          />
        </TiledLink>
      </TiledLinkContainer>
    </>
  )
}

export default TopLinks
