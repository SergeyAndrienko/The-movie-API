import React from "react";
import './App.css';
import PopularMovies from "./components/popular-movies/popular-movies";
import Filter from "./components/filter/filter";
import Search from "./components/search/search";


function App() {
    return (
        <div className="App">
            <div className="block">
                <Search/>
                <Filter/>

            </div>
            <PopularMovies/>

        </div>
    );
}

export default App;
