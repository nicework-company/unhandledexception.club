import React from "react"
import { SectionTitle, PodcastContainer, PodcastCard, PodcastCardTiltle } from '../theme'
import kulak from "../images/kulak.jpg"
import abes from "../images/abes.jpg"

const Podcast = () => (
  <>
    <SectionTitle>Podcasts</SectionTitle>
    <PodcastContainer>
      <PodcastCard href="https://www.kulak.show/" className="podcast-card" style={{ backgroundImage: `url(${kulak})` }}>
        <PodcastCardTiltle>Kulak Podcast</PodcastCardTiltle>
      </PodcastCard>

      <PodcastCard href="https://www.abespodcast.com/" className="podcast-card" style={{ backgroundImage: `url(${abes})` }}>
        <PodcastCardTiltle>Abes Podcast</PodcastCardTiltle>
      </PodcastCard>
    </PodcastContainer>
  </>
)

export default Podcast
