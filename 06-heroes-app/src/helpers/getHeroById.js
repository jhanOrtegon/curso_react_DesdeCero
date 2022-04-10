import { heroes } from "../Data/heroes"

export const getHeroById = (id) =>{
    console.log(id);
    return heroes.find((heroe) => heroe.id.toLowerCase() === id.toLowerCase())
}