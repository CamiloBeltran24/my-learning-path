import { heroes, type Hero } from "../data/heroes.data"
// import {heroes as misSuperHeroes} from "../data/heroes.data"
// import heroesFavoritos from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    // console.log(heroesFavoritos)
    // heroesFavoritos
    console.log(heroes)
    const hero = heroes.find( (hero) => {
        return hero.id === id
    } )

    // if( !hero ) {
    //     throw new Error(`No existe un heroe con el id ${id}`)
    // }
    return hero
}

console.log(getHeroById(4))