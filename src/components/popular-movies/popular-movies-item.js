import React from "react";
import {Link} from 'react-router-dom';


const PopularMoviesItem = ({movie}) => {

    const {poster_path, vote_average, original_title, release_date} = movie;

    function getClassByRate(vote) {
        if (vote >= 7) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }

    return (
        <div className="wrap_movie">
            <Link to={'/movie/' + movie.id}>
                <div className="image">
                    <img width="100%" height="100%"
                         src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="film"/>
                </div>
            </Link>

            <div className="content">
                <div className={`vote ${getClassByRate(vote_average)}`}>{vote_average}</div>
                <Link className="link_movie" to={'/movie/' + movie.id}><h2 className="title">{original_title}</h2>
                </Link>
                <p className="date">{release_date}</p>

            </div>
        </div>
    );
};

export default PopularMoviesItem;