import Axios from "axios";
import React, { useState } from "react";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchResult, set_searchResult] = useState([]);
  const [error, set_error] = useState(false);

  const search = async () => {
    console.log("Start searching for:", searchText);
    const queryParam = encodeURIComponent(searchText);

    const response = await Axios.get(
      `https://omdbapi.com/?apikey=c773b0c1&s=${queryParam}`
    );
    if (response.data.Search) {
      set_searchResult(response.data.Search);
      set_error(false);
      console.log("response.data.Search is true");
    } else {
      set_searchResult([]);
      set_searchText("");
      set_error(true);
      console.log("do i get to error?: ", error);
    }
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>
        {error ? <p>movie not found</p> : null}
        {searchResult.map((result) => {
          return <li>{`${result.Title} Year of release: ${result.Year}`}</li>;
        })}
      </p>
    </div>
  );
}
