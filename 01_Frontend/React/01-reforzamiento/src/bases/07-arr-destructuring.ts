const characterNames = ['Goku', 'Vegueta', 'Trunks'];

// Tomar elementos en base a su posicion
// Goku es el primero por que esta en la posicion cero, vegueta el segundo por que esta en la posicion 1.....
const [ goku, vegueta, trunks ] = characterNames
console.log(goku, vegueta, trunks)

const [, p2] = characterNames
console.log(p2)

const [, , p3] = characterNames
console.log(trunks)

const returnsArrayFn = () => {
    return ["ABC", 123] as const
}

const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);
console.log(numbers + 100);
// console.log(letters + 100);

// Tarea:
const useState = (name: string) => {
    return [name,
        (newValue: string) => {
        console.log(newValue)
    }] as const
}


const [ name, setName ] = useState('Goku')
console.log(name)
setName('Vegueta')