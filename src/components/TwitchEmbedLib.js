import { useEffect } from "react"

const TwitchEmbedLib = props => {
  const { loadCallback } = props;

  useEffect(() => {
    if (!window.TwitchEmbed) {
      // https://stackoverflow.com/a/49545033/13615958
      const EMBED_URL = "https://player.twitch.tv/js/embed/v1.js";
      const script = document.createElement("script");
      script.setAttribute("src", EMBED_URL);
      script.addEventListener("load", loadCallback);
      document.body.appendChild(script);
    }
  });

  return null;
}

export default TwitchEmbedLib;
