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

export const MyAwesomeApp = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(", ")} </p>
      <p> {2 + 2} </p>

      <h2>{isActive ? "Activo" : "No Activo"}</h2>

      <p>{JSON.stringify(address)}</p>
    </>
  );
};
