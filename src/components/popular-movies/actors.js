import React from 'react';

const Actors = ({moviesPersons}) => {


    return (
        <div className="actors">
            <h3 className="actorsTitle">Top Billed Cast</h3>
            <div className="wrapPopularActors">
                {moviesPersons.slice(0, 5).map(cast => (
                    <div key={cast.id} className="wrapActors">
                        <div className="imgActors">
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${cast.profile_path}`} alt=""/>
                        </div>

                        <div className="detailsActors">
                            <p className="nameActor">{cast.name}</p>
                            <p className="characterActor">{cast.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Actors;