import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "b2niNO6mLP7izOfU6vrYV3XDOxmYBUAo";




const createImageUrl = (imageUrl: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.append(imageElement);
}

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const { data } = await response.json();

    return data.images.original.url;
}

getRandomGifUrl()
    .then(createImageUrl)