import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TiledLink,
  TiledLinkContainer,
  TiledLinkIcon,
  SectionTitle,
} from "../theme"

const Contributors = () => {
  const contributorsData = useStaticQuery(graphql`
    query {
      allContributors {
        nodes {
          data {
            id
            avatar_url
            html_url
            login
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionTitle>Contributors</SectionTitle>
      <TiledLinkContainer>
        {contributorsData.allContributors.nodes[0].data.map(item => (
          <TiledLink href={item.html_url} key={item.id} target="_blank">
            <TiledLinkIcon src={item.avatar_url} alt={item.login} />@
            {item.login}
          </TiledLink>
        ))}
      </TiledLinkContainer>
    </>
  )
}

export default Contributors
