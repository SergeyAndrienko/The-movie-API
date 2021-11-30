import React from 'react';

const Actors = ({moviesPersons}) => {


    return (
        <div className="actors">
            <h3 className="actors_title">Top Billed Cast</h3>
            <div className="wrap_popular_actors">
                {moviesPersons.slice(0, 5).map(cast => (
                    <div key={cast.id} className="wrap_actors">
                        <div className="img_actors">
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${cast.profile_path}`} alt=""/>
                        </div>

                        <div className="details_actors">
                            <p className="name_actor">{cast.name}</p>
                            <p className="character_actor">{cast.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Actors;