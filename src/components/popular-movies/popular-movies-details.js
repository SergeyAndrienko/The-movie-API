import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesDetails} from '../../store/movieSlice'
import {useParams} from 'react-router'
import MovieDetailsSection from './movieDetailsSection'

const PopularMoviesDetails = () => {
    const dispatch = useDispatch();
    const moviesDetail = useSelector(state => state.popularMovies.moviesDetails);
    const {status2, error} = useSelector(state => state.popularMovies)
    const params = useParams();


    useEffect(() => {
        dispatch(moviesDetails(params.id));
    }, [dispatch]);

    return (

        <div className="movieDetails">
            {status2 === 'resolved' ? <MovieDetailsSection moviesDetail={moviesDetail}/>
             : <div className="loading">...Loading</div>}


        </div>

    );
};

export default PopularMoviesDetails;