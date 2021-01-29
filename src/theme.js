import { Link } from "gatsby"
import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

const mediumSize = "770px"
const smallSize = "450px"

const lightScheme = `
  body {
    --bg: #ffffff;
    --red: #ac3232;
    --blue: #5656ff;
    --sky-blue: #a8dbff;
    --white: #ffffff;
    --black: #000000;
    --dark: #222222;
    --grey: #e4e4e4;
    --soft-grey: #f5f5f5;
    background-color: var(--bg);
  }
`

const darkScheme = `
  body.dark {
    --bg: #181a1b;
    --red: #d15f5f;
    --blue: #5656ff;
    --sky-blue: #a8dbff;
    --white: #e8e6e3;
    --black: #000000;
    --dark: #c7c7c7;
    --grey: #383c3f;
    --soft-grey: #1e2021;
    background-color: var(--bg);
  }
`

export const GlobalStyle = createGlobalStyle`
  ${lightScheme}

  ${darkScheme}

  @media (prefers-color-scheme: light) {
    ${lightScheme}
  }

  @media (prefers-color-scheme: dark) {
    ${darkScheme}
  }
`

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
  color: var(--red);
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
  border: 6px solid var(--red);
  border-radius: 20px;

  &:hover {
    ${HeaderLinkTitle} {
      color: var(--dark);
    }
  }
`

export const TiledLink = styled.a`
  display: flex;
  background-color: var(--soft-grey);
  width: 49%;
  align-items: center;
  color: var(--dark);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid var(--grey);

  &:hover {
    background-color: var(--grey);
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
  color: var(--dark);
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
  border: 1px solid var(--grey);
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

export const PodcastCardTitle = styled.div`
  color: var(--white);
  background-color: var(--black);
  margin: 10px;
  font-size: 22px;
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: bold;
`

export const TogglerLabel = styled.label`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 30px;
  border: 3px solid var(--red);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.light {
    background-color: var(--sky-blue);
  }

  &.dark {
    background-color: var(--grey);
  }
`

export const TogglerInput = styled.input`
  display: none;
`

export const TogglerSlider = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--red);
  position: relative;
  transition: all ease-in-out .35s;
  top: 0px;

  &.light {
    left: 3px;
  }

  &.dark {
    left: calc(100% - 23px);
  }
`

export const TogglerSunImage = styled.img`
  position: absolute;
  transition: all ease-in-out 0.5s;
  width: 30px;
  filter: drop-shadow(0px 0px 5px rgb(252, 167, 38));

  &.light {
    top: -5px;
    right: -8px;
  }

  &.dark {
    top: -5px;
    right: -45px;
  }
`

export const TogglerMoonImage = styled.img`
  position: absolute;
  transition: all ease-in-out 0.5s;
  width: 30px;
  filter: drop-shadow(0px 0px 5px rgb(255, 255, 255));

  &.light {
    top: -5px;
    left: -45px;
  }

  &.dark {
    top: -5px;
    left: -8px;
  }
`

export const Footer = styled.div`
  margin-top: 2em;
  color: var(--dark);
`

export const FooterLink = styled.a`
  color: var(--blue);
`
