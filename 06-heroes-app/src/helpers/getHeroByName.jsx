import { heroes } from "../Data/heroes"

export const getHeroByName = (namex) => {
    return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(namex.toLowerCase()))
}