import React from 'react';

const MovieDetailsSection = ({moviesDetail}) => {

    const {poster_path, original_title, release_date, genres, vote_average, tagline,overview} = moviesDetail;

    return(

        <div className="wrapDetail">
            <div className="wrapImage">
                <img
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="film"/>
            </div>
            <div className="section">
                <h1 className="movieTitle">{original_title}</h1>
                <p className="releaseDate">{release_date}</p>
                <ul className="genres">
                    {genres.map(name => (
                        <li key={name.id}> • {name.name}</li>
                    ))}
                </ul>
                <h2 className="voteDetail"><span>IMDb: </span>{vote_average}%</h2>
                <p className="tagline">« {tagline} »</p>
                <p className="overview">
                    <span className="overviewTitle">Overview</span>
                    {overview}
                </p>

            </div>
        </div>
            )

};

export default MovieDetailsSection;