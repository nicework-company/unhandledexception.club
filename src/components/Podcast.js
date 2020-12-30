import React from "react"

import kulak from "../images/kulak.jpg"
import abes from "../images/abes.jpg"

const Podcast = () => (
  <div className="podcast">
    <h2>Podcast</h2>
    <div className="podcast-container">
      <a href="https://www.kulak.show/" className="podcast-card" style={{ backgroundImage: `url(${kulak})` }}>
        <div>Kulak Podcast</div>
      </a>

      <a href="https://abespodcast.github.io/" className="podcast-card" style={{ backgroundImage: `url(${abes})` }}>
        <div>Abes Podcast</div>
      </a>
    </div>
  </div>
)

export default Podcast
