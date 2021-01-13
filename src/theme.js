import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const mediumSize = "770px"
const smallSize = "450px"

export const LayoutContainer = styled.div`
  font-family: 'Inter', sans-serif;
  padding: 50px 20px;
  max-width: 950px;
  margin: auto;
`

export const LayoutBody = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`

export const HeaderLinkImage = styled.img`
  margin: 0;

  @media (max-width: ${mediumSize}) {
    height: 120px;
  }

  @media (max-width: ${smallSize}) {
    height: 80px;
  }
`

export const HeaderLinkTitle = styled.div`
  color: #ac3232;
  padding-left: 30px;
  font-size: 56px;
  line-height: 54px;
  font-weight: bold;
  max-width: 340px;

  @media (max-width: ${mediumSize}) {
    font-size: 32px;
    line-height: 34px;
    max-width: 240px;
  }

  @media (max-width: ${smallSize}) {
    font-size: 16px;
    padding-left: 16px;
    line-height: 18px;
    max-width: 110px;
  }
`

export const HeaderLink = styled(props => <Link {...props}/>)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 6px solid #ac3232;
  border-radius: 20px;

  &:hover {
    ${HeaderLinkTitle} {
      color: #222;
    }
  }
`

export const TiledLink = styled.a`
  display: flex;
  background-color: #f5f5f5;
  width: 49%;
  align-items: center;
  color: #222;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid #e4e4e4;

  &:hover {
    background-color: #e4e4e4;
  }

  @media (max-width: ${mediumSize}) {
    width: 100%;
    font-size: 12px;
  }
`

export const TiledLinkIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin-bottom: 0;
  margin-right: 10px;
`

export const TiledLinkContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${mediumSize}) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h3`
  margin: 0.4em 0 0 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
`

export const PodcastContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${mediumSize}) {
    flex-direction: column;
  }
`

export const PodcastCard = styled.a`
  display: flex;
  border: 1px solid #d8d8d8;
  justify-content: flex-start;
  align-items: flex-end;
  width: 49%;
  margin-bottom: 10px;
  height: 160px;
  text-decoration: none;
  border-radius: 5px;
  background-size: cover;
  background-position-y: 20%;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${mediumSize}) {
    width: 100%;
  }
`

export const PodcastCardTiltle = styled.div`
  color: #ffffff;
  background-color: #000000;
  margin: 10px;
  font-size: 22px;
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: bold;
`
