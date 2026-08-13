import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";
// import { MyAwesomeApp } from "./MyAwesomeApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}

    <ItemCounter productName="Nintendo Switch 2" quantity={1} />
    <ItemCounter productName="Celda Brave of the wild" quantity={1} />
    <ItemCounter productName="Pro Controler" quantity={2} />
  </StrictMode>,
);
