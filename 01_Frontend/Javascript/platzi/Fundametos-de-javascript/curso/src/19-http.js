//Http

const FAKEAPI = `https://api.escuelajs.co/api/v1/products`;

fetch(FAKEAPI)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error: ', error))

  // Fetch POST/PUT/DELETE

const FAKEAPI = 'https://api.escuelajs.co/api/v1/products';

fetch(FAKEAPI, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    title: 'Producto de prueba',
    price: 999,
    description: 'Creado desde fetch',
    categoryId: 1,
    images: ['https://placeimg.com/640/480/any'],
  }),
});