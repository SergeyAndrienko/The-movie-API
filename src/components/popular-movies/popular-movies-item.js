import React, {Fragment} from "react";
import { Link } from 'react-router-dom';


const PopularMoviesItem = ({movie}) => {

    const {poster_path,vote_average,original_title,release_date}= movie

    return (

        <div className="wrapMovie">
            <Link to={'/movie/' + movie.id}>
                <div className="image">
                    <img width="100%" height="100%"
                         src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="film"/>
                </div>
            </Link>

            <div className="content">
                <div className="vote">{vote_average}%</div>
                <h2 className="title">{original_title}</h2>
                <p className="date">{release_date}</p>

            </div>
        </div>
    );
};

export default PopularMoviesItem;