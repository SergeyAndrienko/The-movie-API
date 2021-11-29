import React from 'react';

const MovieTrailers = ({moviesTrailers}) => {
    return (
        <div className="trailers">
            <h3 className="trailersTitle">Trailers</h3>
            {moviesTrailers.length >= 1 ?  <div className="wrapTrailers">
                {moviesTrailers.slice(0,3).map(trailer => (
                    <div className="trailer" key={trailer.id}>
                        {console.log(trailer.key)}
                        <iframe width="320" height="200" src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={`https://www.youtube.com/embed/${trailer.key}`}  allowFullScreen/>
                    </div>
                ))}
            </div> : <h3 className="notTrailers">No trailers</h3>}
        </div>
    );
};

export default MovieTrailers;