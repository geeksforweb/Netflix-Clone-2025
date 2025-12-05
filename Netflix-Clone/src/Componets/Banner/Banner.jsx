import React from 'react'
import { useState, useEffect } from 'react';
import axios from "../../Utils/Axios";
import requests from "../../Utils/Requests";
import "./banner.css";

// Function inside Banner.jsx to cut off long text
function truncate(str, n) {
  // If str is null or undefined, return an empty string
  if (!str) return ''; 
  // If the string length is greater than n, return a substring plus '...'
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
}


function Banner() {
        // State to hold the movie data
    const [movie, setMovie] = useState({});

    // Effect hook to fetch data on component mount
    useEffect(() => {
        async function fetchData() {
            try {
                // 1. Fetch Netflix Originals data using the predefined endpoint
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request);
                // 2. Select a random movie from the results array
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData();
        // The dependency array is empty, so it runs once on mount
    }, []); 

    // console.log(movie); // Line often used for debugging, not strictly necessary for final output

    // Component Rendering (JSX)
  return (
        <div 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {/* Display title, name, or original name, prioritizing title */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                {/* Display truncated overview/description */}
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom"></div>
        </div>
    );
};

export default Banner;
