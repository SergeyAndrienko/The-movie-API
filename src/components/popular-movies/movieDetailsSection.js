import React from 'react';

const MovieDetailsSection = ({moviesDetail}) => {

    const {poster_path, original_title, release_date, genres, vote_average, tagline, overview} = moviesDetail;
    try {
        return (
            <div className="wrap_detail">
                <div className="wrap_image">
                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt="film"/>
                </div>
                <div className="section">
                    <h1 className="movie_title">{original_title}</h1>
                    <p className="release_date">{release_date}</p>
                    <ul className="genres">
                        {genres.map(name => (
                            <li key={name.id}> • {name.name}</li>
                        ))}
                    </ul>
                    <h2 className="vote_detail"><span>IMDb: </span>{vote_average}%</h2>
                    <p className="tagline">« {tagline} »</p>
                    <p className="overview">
                        <span className="overview_title">Overview</span>
                        {overview}
                    </p>
                </div>
            </div>
        )
    } catch (e) {
        return <h2> Sorry, something went wrong, please try refreshing the page. </h2>
    }

};

export default MovieDetailsSection;