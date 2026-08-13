import type { CSSProperties } from "react";

const firstName = "Christian Camilo";
const lastName = "Beltrán";

const favoriteGames = [
  "GTA V",
  "FC 26",
  "Fortnite",
  "Forza Horizon 6",
  "Red Dead Redemption",
];
const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "Colombia",
};

const myStyles: CSSProperties = {
  backgroundColor: "red",
  borderRadius: 10,
  padding: 10,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(", ")} </p>
      <p> {2 + 2} </p>

      <h2>{isActive ? "Activo" : "No Activo"}</h2>

      <p
        // style={{
        //   backgroundColor: "red",
        //   borderRadius: 10,
        //   padding: 10,
        // }}
        // style = {undefined}
        style={myStyles}
      >
        {JSON.stringify(address)}
      </p>
    </>
  );
};
