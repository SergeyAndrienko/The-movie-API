import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import PopularMoviesItem from './popular-movies-item';
import {moviesByGenresRequest} from "../../store/movieSlice";
import {moviesSearchRequest} from "../../store/movieSlice";

const PopularMoviesList = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.popularMovies.popularMovies);
    const {genre} = useSelector(state => state.popularMovies);
    const {search, error} = useSelector(state => state.popularMovies);


    useEffect(() => {
        if (genre == null) {
            return
        }
        dispatch(moviesByGenresRequest(genre))
    }, [genre]);

    useEffect(() => {
        if (search == null) {
            return
        }
        dispatch(moviesSearchRequest(search))
    }, [search]);


    return (
        <div className="popular_movies_wrap">
            {popularMovies <= 0 ? <h2>No movies found for your request </h2> : popularMovies.map((movie) => (
                <PopularMoviesItem
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    )
};

export default PopularMoviesList;

