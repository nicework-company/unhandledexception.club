import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TiledLinkContainer, TiledLink, TiledLinkIcon } from '../theme'


const TopLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      youtubeIcon: file(relativePath: { eq: "youtube_social_icon_red.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      },
      discordIcon: file(relativePath: { eq: "Discord-Logo-Color.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      }
    }
  `)
  const youtubeIcon = data.youtubeIcon.childImageSharp.resize.src
  const discordIcon = data.discordIcon.childImageSharp.resize.src

  return (
    <>
      <TiledLinkContainer>
        <TiledLink href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg/live">
          <TiledLinkIcon src={youtubeIcon} alt="Unhandled Exception Club Youtube Live" />
          Watch Live On Youtube
        </TiledLink>

        <TiledLink href="http://discord.gg/4GgCG5C">
          <TiledLinkIcon src={discordIcon} alt="Unhandled Exception Club Discord" />
          Join Discord
        </TiledLink>
      </TiledLinkContainer>
    </>
  )
}

export default TopLinks
