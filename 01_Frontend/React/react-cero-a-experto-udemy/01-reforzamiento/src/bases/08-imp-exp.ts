import { heroes, type Hero, Owner } from '../data/heroes.data';
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

// TAREA
// Mi solucion
export const getHeroByOwner = (owner: Owner) : Hero[] => {
    console.log(owner)
    let newHeroes: Hero[] = [];

    heroes.forEach( (hero) => {
        if(hero.owner === owner) {
            newHeroes.push(hero)
        }
    })

    return newHeroes;
}

// Solucion del profesor
export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter( (hero) => hero.owner === owner )
    return heroesByOwner;
}

// console.log(getHeroById(4))