import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {moviesFetch} from '../../store/movieSlice'
import PopularMoviesList from "./popular-movies-list";

import './popular-movies.css'
import Spinner from "../spinner/Spinner";


const PopularMovies = () => {
    const dispatch = useDispatch();
const {status,error}= useSelector(state => state.popularMovies)

    useEffect(() => {
        dispatch(moviesFetch());
    }, [dispatch]);

    return (
        <div>
            {status==='loading' && <div className="loading"><Spinner/></div>}
            <PopularMoviesList/>
        </div>
    );
};

export default PopularMovies;