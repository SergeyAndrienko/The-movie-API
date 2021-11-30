import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {setSearch} from "../../store/movieSlice";

const Search = () => {

    const refSearch = useRef()

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const searchMovie = refSearch.current.value
        dispatch(setSearch(searchMovie))
    }

    return (
        <form onSubmit={handleChange}>
            <p className="form_title">Movie search</p>
            <div className="wrap_form_search">
                <input required ref={refSearch} className="input_search" type="text"/>
                <button type="submit" className="search_button">🔍︎</button>
            </div>
        </form>
    );
};

export default Search;