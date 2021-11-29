import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesDetails, moviesPerson, moviesTrailer} from '../../store/movieSlice'
import {useParams} from 'react-router'
import MovieDetailsSection from './movieDetailsSection'
import Spinner from "../spinner/Spinner";
import Actors from "./actors";
import MovieTrailers from "./movieTrailers";

const PopularMoviesDetails = () => {
    const dispatch = useDispatch();
    const moviesDetail = useSelector(state => state.popularMovies.moviesDetails);
    const moviesPersons = useSelector(state => state.popularMovies.moviesPerson);
    const moviesTrailers = useSelector(state => state.popularMovies.moviesTrailer)
    const {statusDetailMovie} = useSelector(state => state.popularMovies);
    const params = useParams();


    useEffect(() => {
        dispatch(moviesDetails(params.id));
        dispatch(moviesPerson(params.id));
        dispatch(moviesTrailer(params.id))
    }, [dispatch]);

    return (
        <Fragment>
            <div className="movieDetails">
                {statusDetailMovie === 'resolved' ? <MovieDetailsSection moviesDetail={moviesDetail}/>
                    : <div className="loading"><Spinner/></div>}
            </div>

            <Actors moviesPersons={moviesPersons}/>

            <MovieTrailers moviesTrailers={moviesTrailers} />

        </Fragment>

    );
};

export default PopularMoviesDetails;