import Axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function MoviePage() {
  const route_parameters = useParams();
  const [movieInfo, set_movieInfo] = useState({});
  const [ratings, set_ratings] = useState([]);
  console.log("params: ", route_parameters.imdb_Id);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(
        `https://omdbapi.com/?apikey=c773b0c1&i=${route_parameters.imdb_Id}`
      );
      console.log("response: ", response);
      set_movieInfo(response.data);

      if (response.data.Ratings) {
        set_ratings(
          response.data.Ratings.map((rating, i) => {
            return (
              <ul key={i}>
                <li>{`${rating.Source} ${rating.Value} `}</li>
              </ul>
            );
          })
        );
      } else {
        <li>{null}</li>;
      }
    }
    fetchData();
  }, [route_parameters.imdb_Id]);

  console.log("whats my movieInfo: ", movieInfo);
  return (
    <div>
      <h1>{movieInfo.Title}</h1> {movieInfo.Year}
      <p>
        <img src={movieInfo.Poster} alt={`${movieInfo.Title} Movieposter `} />
      </p>
      <ul>
        <li>{ratings}</li>
      </ul>
    </div>
  );
}
