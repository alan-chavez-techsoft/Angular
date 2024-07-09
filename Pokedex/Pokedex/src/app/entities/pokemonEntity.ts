export interface PokemonEntity{
    name: string;
    url: string;
    detail: PokemonDetailEntity
}

export interface PokemonDetailEntity{
    abilities?: Ability;
    height: number;
    id: number;
    Moves?: Mfe[];
    sprites: Sprite;
    types: Type[];
    weight: number;
}

export interface Ability{
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Ability2{
    name: string;
    url: string;
}

export interface Mfe{
    move: Move;
}

export interface Move{
    name: string;
    url: string;
}

export interface Sprite{
    front_default: string;
}

export interface Type{
    slot: number;
    type: Type2;
}

export interface Type2{
    name: string;
    url: string;
    imgSource: string;
}
