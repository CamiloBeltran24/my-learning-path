import { useState } from "react";

import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";
interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };
  // const handleClick = () => {
  //   console.log(`Click en ${productName}`);
  // };
  return (
    <section
      className="item-row"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      // }}
    >
      <span
        className={styles["item-text"]}
        style={{
          // width: 200,
          color: count == 1 ? "red" : "black",
        }}
      >
        {productName}
      </span>
      <button onClick={handleSubstract}> -1 </button>
      <span> {count} </span>
      <button onClick={handleAdd}> +1 </button>
    </section>
  );
};
