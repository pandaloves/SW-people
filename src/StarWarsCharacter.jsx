import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const StarWarsCharacter = () => {
  const [inputValue, setInputValue] = useState("");
  const [character, setCharacter] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    try {
      const response = await fetch(
        `https://swapi.tech/api/people/${inputValue}/`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }

      const data = await response.json();
      const { height, eye_color, name } = data.result.properties;

      setCharacter(data.result.properties);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ margin: "5px" }}
      >
        <input
          type="number"
          placeholder="Enter an id number (between 1 to 10)"
          value={inputValue}
          min="1"
          max="10"
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            width: "240px",
            height: "35px",
            margin: "10px auto",
            padding: "3px",
          }}
        />
        <Button
          size="large"
          variant="contained"
          type="submit"
          style={{ margin: "12px" }}
        >
          Submit
        </Button>
      </Box>

      {character && (
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            margin: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: "2px solid grey" }}
            >
              <img
                src={`../public/img/${character.name}.jpg`}
                alt={character.name}
                style={{ width: "200px", height: "220px", margin: "2px auto" }}
              />
            </Box>
          </div>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.name} is {character.height} cm tall and has{" "}
                {character.eye_color} eyes.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default StarWarsCharacter;
