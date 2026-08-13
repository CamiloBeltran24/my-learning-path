interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintento Switch 2",
    quantity: 1,
  },
  {
    productName: "Pro Controler",
    quantity: 3,
  },
  {
    productName: "Super Smash",
    quantity: 8,
  },
];

export function FirstStepsApp() {
  return (
    <>
      {/* <h1>Hola Desde Main</h1>
      <p>Hola esto es un parrafo</p>

      <button>Click me</button>

      <div>
        <h2>Hola dentro de un div</h2>
      </div> */}
      <h1>Carrito de Compras</h1>
    </>
  );
}
