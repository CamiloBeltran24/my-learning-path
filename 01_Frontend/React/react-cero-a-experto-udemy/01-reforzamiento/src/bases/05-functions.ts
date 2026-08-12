function greet( name: string): string {
    return `Hola soy ${name}`
}

const message = greet('Goku');

console.log(message)

const greet2 = (name: string): string => {
    return `Hola ${name}`
}

console.log(greet2('Christian'))

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'Elpapi_21',
    }
}

console.log(getUser());


// const getUser2 = () => {
//     return {
//         uid: 'ABC-123',
//         username: 'Elpapi_21',
//     }
// }

// return implicito en arrow functions
const getUser3 = () => ({
    uid: 'ABC-123',
    username: 'Elpapi_21',
})

console.log(getUser3);


interface User {
    uid: string,
    username: string,
}

const getUser2 = (uid: string, username: string ) : object => {
    let newUser: User  = {
        uid: uid,
        username: username,
    }
    return newUser
}


console.log(getUser2('ABC-123', 'El_Papi23'));

function getUser4(): User {
    return {
        uid: 'ABC-1234',
        username: 'Elpapi_4',
    }
}

console.log(getUser4());


const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach(function ( value) {
    console.log(value)
})

myNumbers.forEach( (value) => {
    console.log(value)
})
myNumbers.forEach( (value, index, arr) => {
    console.log(value, index, arr)
})
myNumbers.forEach(console.log)