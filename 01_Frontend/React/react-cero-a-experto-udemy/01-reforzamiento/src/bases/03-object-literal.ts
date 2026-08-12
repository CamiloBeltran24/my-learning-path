interface Person {
    firstName: String;
    lastName: String;
    age: number;
    address: address;
}

interface address {
    postalCode: string;
    city: string;
}

// Idealmente debemos utilizar const para declarar objetos literales
const ironman: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

// person.firstName = "Peter"
// person.lastName = "Parker"

const spiderman = {...ironman };
const cloneSpiderman = structuredClone(ironman)

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
// spiderman.address.city = "Manhatan"

// cloneSpiderman.address.city = "Girardot"

console.log(ironman, spiderman, cloneSpiderman);


const superman: Person = {
    firstName: "Clark",
    lastName: "Kent",
    age: 35,
    address: {
        postalCode: "AVF1234",
        city: "Metropolis"
    }
}

console.log(superman);
