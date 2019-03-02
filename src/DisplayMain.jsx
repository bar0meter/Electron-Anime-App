import React, { useState, useEffect, lazy, Suspense } from "react";

const ImageLoader = lazy(() => import("./ImageLoader"));

const DisplayMain = ({ result, startIndex, endIndex }) => {
  const [displayResult, setDisplayResult] = useState([]);
  const [anime, setAnime] = useState({
    title: "",
    index: -1,
    poster: "",
    synopsis: "",
    malURL: ""
  });
  useEffect(
    () => {
      result = result.filter(
        (_, index) => index >= startIndex && index <= endIndex
      );
      setDisplayResult(result);
    },
    [startIndex + endIndex]
  );
  let animeDetails = {};
  const handleClick = (animeTitle, animeIndex) => {
    const anime_selected = result[animeIndex];
    setAnime({
      title: animeTitle,
      index: animeIndex,
      poster: anime_selected.image_url,
      synopsis: anime_selected.synopsis,
      malURL: anime_selected.url
    });
  };

  return (
    <div className="displayMain">
      <div className="displayResults">
        <ul>
          {displayResult.map((data, index) => (
            <li key={index}>
              <a href="#" onClick={() => handleClick(data.title, index)}>
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {anime.title !== "" && (
        <div className="detailedView">
          <h3>
            {anime.title !== "" ? (
              <a href={anime.malURL} target="_blank">
                {anime.title}
              </a>
            ) : (
              ""
            )}
          </h3>
          <div className="animePoster">
            <Suspense fallback={<div>Loading...</div>}>
              <ImageLoader image_url={anime.poster} />
            </Suspense>
            <div className="animeSynopsis">
              <p>{anime.synopsis}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMain;
