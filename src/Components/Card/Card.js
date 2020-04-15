import React from 'react';
import './style.css';
import pokemonType from '../../Features/pokemonTypes';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__number">
                {pokemon.id}
            </div>
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card_types">
                {pokemon.types.map(type => {
                    return (
                        <div className="Card__type" style={{ backgroundColor: pokemonType[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Card;