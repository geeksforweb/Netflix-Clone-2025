import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../Utils/Axios"
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

// Note: The imports for movieTrailer and YouTube are commented out in the image but are
// included here as they are clearly used later in the handleClick function and the render.

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  // Runs a snippet of code based on a specific condition/variable.
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        // console.log(request)
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  // The dependency array [fetchUrl] ensures this useEffect runs only once when the component loads,
  // and then again every time the 'fetchUrl' prop changes.

  const handleClick = (movie) => {
    if (trailerUrl) {
      // If a trailer is already open, close it (by clearing the URL)
      setTrailerUrl("");
    } else {
      // Use the 'movie-trailer' library to search for the trailer URL on YouTube
      movieTrailer(movie.title || movie.name || movie.original_name)
        .then((url) => {
          // console.log(url) // Logs the full YouTube URL
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(urlParams) // Logs all URL parameters
          // console.log(urlParams.get('v')) // Logs the video ID ('v' parameter)

          // Extract the video ID and set it as the trailer URL to render the YouTube player
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // Options for the YouTube player component
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // Auto-play the trailer when it loads
    },
  };

  return (
    <div className="row">
      {/* Title */}
      <h1>{title}</h1>

      {/* Posters */}
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            // If it's a large row, use poster_path, otherwise use backdrop_path
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            // Conditionally apply a larger CSS class for Netflix Originals row
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>

      {/* Trailer Player */}
      {/* Renders the YouTube player if trailerUrl has a value (i.e., a video ID) */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

      {/* The commented-out div likely corresponds to the YouTube player's container
      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      */}
    </div>
  );
};

export default Row;
