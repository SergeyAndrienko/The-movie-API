import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesDetails, moviesPerson, moviesTrailer} from '../../store/movieSlice'
import {useParams} from 'react-router'
import MovieDetailsSection from './movieDetailsSection'
import Spinner from "../spinner/Spinner";
import Actors from "./actors";

const PopularMoviesDetails = () => {
    const dispatch = useDispatch();
    const moviesDetail = useSelector(state => state.popularMovies.moviesDetails);
    const moviesPersons = useSelector(state => state.popularMovies.moviesPerson);
    const moviesTrailers = useSelector(state => state.popularMovies.moviesTrailer)
    const {statusDetailMovie, error} = useSelector(state => state.popularMovies);
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

            <div className="trailers">
                <h3 className="trailersTitle">Trailers</h3>
                {moviesTrailers.length >= 1 ?  <div className="wrapTrailers">
                    {moviesTrailers.slice(0,3).map(trailer => (
                        <div className="trailer" key={trailer.id}>
                            {console.log(trailer.key)}
                            <iframe width="320" height="200" src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title={`https://www.youtube.com/embed/${trailer.key}`}  allowFullScreen/>
                        </div>
                    ))}
                </div> : <h3 className="notTrailers">No trailers</h3>}


            </div>

        </Fragment>

    );
};

export default PopularMoviesDetails;