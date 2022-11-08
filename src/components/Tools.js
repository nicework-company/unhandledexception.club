import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  TiledLink,
  TiledLinkContainer,
  TiledLinkIcon,
} from "../theme"

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      toolsIcon: file(relativePath: { eq: "tools.png" }) {
        childImageSharp {
          resize(height: 64) {
            src
          }
        }
      }
    }
  `)
  const toolsIcon = data.toolsIcon.childImageSharp.resize.src

  return (
    <>
      <TiledLinkContainer>
        <TiledLink href="./tools">
          Tools
          <TiledLinkIcon
            src={toolsIcon}
            alt="tools"
          />
        </TiledLink>
      </TiledLinkContainer>
    </>
  )
}

export default Social
