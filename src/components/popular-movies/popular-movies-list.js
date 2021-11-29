import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import PopularMoviesItem from './popular-movies-item';
import {moviesByGenres} from "../../store/movieSlice";
import {moviesSearch} from "../../store/movieSlice";

const PopularMoviesList = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.popularMovies.popularMovies);
    const {genre} = useSelector(state => state.popularMovies);
    const {search} = useSelector(state => state.popularMovies);

    useEffect(() => {
        if (genre == null) {
            return <h2>No movies available</h2>
        }
        dispatch(moviesByGenres(genre))
    }, [genre]);

    useEffect(() => {
        if (search == null) {
            return <h2>No movies available</h2>
        }
        dispatch(moviesSearch(search))
    }, [search]);

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

