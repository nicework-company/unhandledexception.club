
import styled from 'styled-components'

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
`

export const SectionTitle = styled.h3`
  margin: 0.4em 0 0 0;
  padding: 0;
`

export const PodcastContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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