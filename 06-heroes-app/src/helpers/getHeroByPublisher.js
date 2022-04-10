import { heroes } from "../Data/heroes"

export const getHeroByPublisher = (publisher) =>{
    return heroes.filter((heroe) => heroe.publisher === publisher )
}