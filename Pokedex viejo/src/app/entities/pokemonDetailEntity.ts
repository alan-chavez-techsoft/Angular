import { Type } from "./typeEntity"
import { Ability } from "./abilityEntity"
import { Mfe } from "./mfeEntity"
import { Sprite } from "./sprite"

export interface PokemonDetailEntity{
    abilities?: Ability[]
    height: number
    id: number
    moves?: Mfe[]
    sprites: Sprite
    types?: Type[]
    weight?: number
}