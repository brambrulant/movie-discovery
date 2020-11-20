import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchResult, set_searchResult] = useState([]);
  const [error, set_error] = useState(false);
  const history = useHistory();
  const param = useParams();

  // console.log("history: ", history);

  const search = async () => {
    const queryParam = encodeURIComponent(param.searchtext);
    const response = await Axios.get(
      `https://omdbapi.com/?apikey=c773b0c1&s=${queryParam}`
    );
    console.log("Start searching for:", param);
    // if the response has no data.search, set error!
    if (response.data.Search) {
      set_searchResult(response.data.Search);
      set_error(false);
      console.log("response.data.Search is true", response.data);
    } else {
      set_searchResult([]);
      set_searchText("");
      set_error(true);
      console.log("do i get to error?: ", error);
    }
  };

  useEffect(() => {
    // console.log("hello from UseEffect: Params: ", param);
    if (param.searchtext) {
      search();
    }
  }, [param.searchtext]);

  const submitHandler = (event) => {
    event.preventDefault();
    history.push(`/discover/${searchText}`);
  };

  const onChangeHandler = (event) => {
    set_searchText(event.target.value);
  };

  return (
    <div>
      <h3>Search for movies and their ratings!</h3>
      <Form onSubmit={submitHandler}>
        <input type="text" value={searchText} onChange={onChangeHandler} />
        <button type="submit">Search</button>
      </Form>
      <div>
        {error ? <p>movie not found</p> : null}
        {searchResult.map((result) => {
          return (
            <ul key={result.imdbID}>
              <Link
                to={`/movies/${result.imdbID}`}
              >{`${result.Title} (${result.Year})`}</Link>

              <p>
                <img
                  src={result.Poster}
                  alt={`Movie Poster: ${result.Title} `}
                />
              </p>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
