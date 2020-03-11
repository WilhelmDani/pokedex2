import React, { useEffect, useState } from "react"

interface PokemonItemProps{
    pokemon: Pokemon
}

export const PokemonItem = ({pokemon} : PokemonItemProps) => {
    return (
        <div>
            <h4>{pokemon.name}</h4>
            {pokemon.sprite &&
            <img src={pokemon.sprite}/>
            }
        </div>
    )
}