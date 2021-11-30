import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesGenresRequest} from "../../store/movieSlice";

import {setGenre} from "../../store/movieSlice";

const Filter = () => {

    const dispatch = useDispatch();
    const moviesGenre = useSelector(state => state.popularMovies.moviesGenres);
    const refSelect = useRef();


    const handleChange = (e) => {
        e.preventDefault();
        const id = refSelect.current.value;
        if (id === 'All') {
            window.location.reload()
        }
        dispatch(setGenre(id))
    };

    useEffect(() => {
        dispatch(moviesGenresRequest());
    }, [dispatch]);


    return (
        <div>
            <form>
                <p className="form_title">Genre selection</p>
                <select ref={refSelect} className="select_genre">
                    <option value={'All'}>All</option>
                    {moviesGenre.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name} </option>
                    ))}
                </select>
                <button className="search_button" onClick={handleChange}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Filter;