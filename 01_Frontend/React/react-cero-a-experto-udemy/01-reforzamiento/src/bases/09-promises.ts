const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(()=>{
        // resolve(100);
        reject('Mi amigo se perdio con el dinero');
    }, 2000)
})

myPromise.then((miMoney) => {
    console.log(`Tengo mi dinero ${miMoney}`)
}).catch((reason)=> {
    console.warn(reason)
}).finally(()=>{
    console.log('Sigo con mi vida :)')
})