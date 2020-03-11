interface Pokemon {
    pokemonId?: number,
    regionId: number,
    number: number,
    name: string,
    description: string,
    region?: Regions,
    pokemonTypes: PokemonTypes[],
    sprite?: string
}

interface Regions {
    regionId: number,
    name: string,
}

interface PokemonTypes {
    pokemonTypesId: number,
    pokemonId: number,
    typeId: number,
    types: Types,
}

interface Types {
    typeId: number,
    name: string,
}