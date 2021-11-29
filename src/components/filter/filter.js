import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesGenres} from "../../store/movieSlice";

import {setGenre} from "../../store/movieSlice";

const Filter = () => {

    const dispatch = useDispatch();
    const moviesGenre = useSelector(state => state.popularMovies.moviesGenres);
    const refSelect = useRef();


    const handleChange = (e) => {
        e.preventDefault()
        const id = refSelect.current.value;
        dispatch(setGenre(id))
    };

    useEffect(() => {
        dispatch(moviesGenres());
    }, [dispatch]);

    return (
        <div>
            <form>
                <p className="formTitle">Genre selection</p>
                <select ref={refSelect} className="selectGenre">
                    {moviesGenre.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>

                <button className="searchButton" onClick={handleChange}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Filter;