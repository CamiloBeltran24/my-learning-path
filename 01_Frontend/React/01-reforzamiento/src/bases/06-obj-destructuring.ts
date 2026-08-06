const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

// const name = person.name;
// const age = person.age;
// const key = person.key;

const { name: ironmanName, age: ironmanAge, key } = person
console.log({ ironmanName, ironmanAge, key })

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        userRank: rank
    }
}

const context = useContext(person)
console.log(context)

// const {keyName, userRank, user: { name, age } } = context
// console.log({ keyName, userRank, name, age })

// mucho mejor opcion
const {keyName, user, userRank } = useContext(person)
const { name } = user
const { age } = user

console.log({keyName, name, age, userRank});




