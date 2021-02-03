import React from "react"
import { SectionTitle, PodcastContainer, PodcastCard, PodcastCardTitle } from '../theme'
import kulak from "../images/kulak.jpg"
import abes from "../images/abes.jpg"

const Podcast = () => (
  <>
    <SectionTitle>Podcasts</SectionTitle>
    <PodcastContainer>
      <PodcastCard href="https://www.kulak.show/" style={{ backgroundImage: `url(${kulak})` }}>
        <PodcastCardTitle>Kulak Podcast</PodcastCardTitle>
      </PodcastCard>

      <PodcastCard href="https://www.abespodcast.com/" style={{ backgroundImage: `url(${abes})` }}>
        <PodcastCardTitle>Abes Podcast</PodcastCardTitle>
      </PodcastCard>
    </PodcastContainer>
  </>
)

export default Podcast
