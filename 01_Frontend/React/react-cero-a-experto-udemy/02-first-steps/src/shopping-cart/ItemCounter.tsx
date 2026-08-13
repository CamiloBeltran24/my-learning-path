import { useState } from "react";

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity }: Props) => {
  const [count, setCount] = useState(quantity);
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span
        style={{
          width: 200,
        }}
      >
        {productName}
      </span>
      <button> -1 </button>
      <span> {count} </span>
      <button> +1 </button>
    </section>
  );
};
