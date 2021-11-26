import React from "react";
import {useSelector} from 'react-redux';
import PopularMoviesItem from './popular-movies-item';


const PopularMoviesList = () => {

    const popularMovies = useSelector(state => state.popularMovies.popularMovies);



    return (
        <div className="popularMoviesWrap">

            {popularMovies.map((movie) => (
                        <PopularMoviesItem
                            key={movie.id}
                            movie={movie}
                        />
            ))}

        </div>
    );
};

export default PopularMoviesList;

