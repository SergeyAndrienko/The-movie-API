import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {setSearch} from "../../store/movieSlice";

const Search = () => {

    const refSearch = useRef()

    const dispatch = useDispatch();

    const handleChange=(e)=>{
        e.preventDefault();
        const searchMovie = refSearch.current.value
        dispatch(setSearch(searchMovie))
    }

    return (
        <form>
            <p className="formTitle">Movie search</p>
            <div className="wrapFormSearch">
            <input ref={refSearch} className="inputSearch" type="text"/>
            <button onClick={handleChange} className="searchButton">🔍︎</button>
            </div>
        </form>
    );
};

export default Search;