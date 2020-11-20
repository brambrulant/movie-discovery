import { Switch, Route } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/NavBar";
import MoviePage from "./pages/MoviePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">IMDp</header>

      <Navbar className="App-Navbar" />
      <Switch>
        <Route path="/discover/:searchtext" component={DiscoverMoviesPage} />
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/movies/:imdb_Id" component={MoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
