import StarWarsCharacter from "./StarWarsCharacter";

const App = () => {
  return (
    <>
      <h3
        style={{
          fontFamily: "cursive",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Search a character in Star Wars
      </h3>
      <StarWarsCharacter />
    </>
  );
};

export default App;
