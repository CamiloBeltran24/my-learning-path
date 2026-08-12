import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "b2niNO6mLP7izOfU6vrYV3XDOxmYBUAo";

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

// myRequest.then((response) => {
//     console.log(response);
//     if( response.status !== 200) return

//     response.json().then( data => {
//         console.log(data)
//     })


// }).catch( (err) => {
//     console.error(err)
// })

const createImageUrl = (imageUrl: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.append(imageElement);
}


myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        // console.log(data)
        const imageUrl = data.images.original.url;
        createImageUrl(imageUrl);
    })
    .catch(error => console.error(error))