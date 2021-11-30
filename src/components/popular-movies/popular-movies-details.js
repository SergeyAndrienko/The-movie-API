import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesDetailsRequest, moviesPersonRequest, moviesTrailerRequest} from '../../store/movieSlice'
import {useParams} from 'react-router'
import MovieDetailsSection from './movieDetailsSection'
import Spinner from "../spinner/Spinner";
import Actors from "./actors";
import MovieTrailers from "./movieTrailers";

const PopularMoviesDetails = () => {
    const dispatch = useDispatch();
    const {moviesDetails, moviesPerson, moviesTrailer, statusDetailMovie, error} = useSelector(state => state.popularMovies);


    const params = useParams();


    useEffect(() => {
        dispatch(moviesDetailsRequest(params.id));
        dispatch(moviesPersonRequest(params.id));
        dispatch(moviesTrailerRequest(params.id))
    }, [dispatch]);

    return (
        <Fragment>
            {error ? <h2 className="titleError">{error}</h2> : <Fragment>
                <div className="movie_details">
                    {statusDetailMovie === 'resolved' ? <MovieDetailsSection moviesDetail={moviesDetails}/>
                        : <div className="loading"><Spinner/></div>}
                </div>
                <Actors moviesPersons={moviesPerson}/>
                <MovieTrailers moviesTrailers={moviesTrailer}/>
            </Fragment>}
        </Fragment>
    );
};

export default PopularMoviesDetails;