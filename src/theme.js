import { Link } from "gatsby"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const mediumSize = "770px"
const smallSize = "450px"

const lightScheme = `
  body {
    --bg: #ffffff;
    --text-color: #222222;
    --header-link-title-color: #ac3232;
    --header-link-title-hover-color: #222222;
    --header-link-border-color: #ac3232;
    --tiled-link-color: #222222;
    --tiled-link-bg-color: #f5f5f5;
    --tiled-link-border-color: #e4e4e4;
    --tiled-link-bg-hover-color: #e4e4e4;
    --section-title-color: #222222;
    --podcast-card-border-color: #e4e4e4;
    --podcast-card-title-color: #ffffff;
    --podcast-card-title-bg-color: #000000;
    --toggler-label-border-color: #ac3232;
    --toggler-label-bg-color: #a8dbff;
    --toggler-slider-bg-color: #ac3232;
    --footer-color: #222222;
    --footer-link-color: #5656ff;
    background-color: var(--bg);
    color: var(--text-color);
  }
`

const darkScheme = `
  body.dark {
    --bg: #181a1b;
    --text-color: #c7c7c7;
    --header-link-title-color: #d15f5f;
    --header-link-title-hover-color: #c7c7c7;
    --header-link-border-color: #d15f5f;
    --tiled-link-color: #c7c7c7;
    --tiled-link-bg-color: #1e2021;
    --tiled-link-border-color: #383c3f;
    --tiled-link-bg-hover-color: #383c3f;
    --section-title-color: #c7c7c7;
    --podcast-card-border-color: #383c3f;
    --podcast-card-title-color: #e8e6e3;
    --podcast-card-title-bg-color: #000000;
    --toggler-label-border-color: #d15f5f;
    --toggler-label-bg-color: #383c3f;
    --toggler-slider-bg-color: #d15f5f;
    --footer-color: #c7c7c7;
    --footer-link-color: #5656ff;
    background-color: var(--bg);
    color: var(--text-color);
  }
`
export const GlobalStyle = createGlobalStyle`
  ${props => (props.theme === "light" ? lightScheme : darkScheme)}
`

export const LayoutContainer = styled.div`
  font-family: "Inter", sans-serif;
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
  color: var(--header-link-title-color);
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

export const HeaderLink = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 6px solid var(--header-link-border-color);
  border-radius: 20px;

  &:hover {
    ${HeaderLinkTitle} {
      color: var(--header-link-title-hover-color);
    }
  }
`

export const TiledLink = styled.a`
  display: flex;
  flex-grow: 1;
  min-width: 30%;
  background-color: var(--tiled-link-bg-color);
  align-items: center;
  color: var(--tiled-link-color);
  padding: 10px;
  box-sizing: border-box;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid var(--tiled-link-border-color);
  justify-content: space-between;
  &:hover {
    background-color: var(--tiled-link-border-color);
  }
`

export const TiledLinkIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin-bottom: 0;
  margin-left: 10px;
`

export const TiledLinkContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: -5px;
  margin-right: -5px;
`

export const SectionTitle = styled.h3`
  color: var(--section-title-color);
  margin: 0.4em 0 0 0;
  padding: 0;
  font-family: "Inter", sans-serif;
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
  border: 1px solid var(--podcast-card-border-color);
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
  color: var(--podcast-card-title-color);
  background-color: var(--podcast-card-title-bg-color);
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
  border: 3px solid var(--toggler-label-border-color);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--toggler-label-bg-color);
`

export const TogglerInput = styled.input`
  display: none;
`

export const TogglerSlider = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--toggler-slider-bg-color);
  position: relative;
  transition: all ease-in-out 0.35s;
  top: 0;

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
  color: var(--footer-color);
`

export const FooterLink = styled.a`
  color: var(--footer-link-color);
`
