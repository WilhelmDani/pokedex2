import React, { FC, useEffect, useState } from 'react';
import './PokemonList.css';

export const PokemonList: FC = () => {
    const [Pokemon, setPokemon] = useState<Pokemon[]>([])
    const [IsLoading, setIsLoading] = useState<Boolean>(true)

    useEffect(() => {
        fetch(
            'http://localhost:5000/api/pokemon/getall',
            {
                method: 'GET'
            }
        )
        .then(response => response.json())
        .then(pokemon => {
            setIsLoading(false);
            setPokemon(pokemon)
        })
        .catch(error => console.log(error))
    }, [IsLoading])

    return (
        <div className="pokemon-list">
            {Pokemon.map((p,index) => (
            <div key={index}>
                {p.name}
            </div>
            ))}
        </div>
    )
}