import React, { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  function handleSubmit(value) {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=IObOJK61QQCQjsQ0Bni7DksPAXjiuCY8&rating=g"
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedGifs = [
          data.data[0].images.original.url,
          data.data[1].images.original.url,
          data.data[2].images.original.url,
        ];
        setGifs(fetchedGifs);
      });
  }

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;