import React from "react";
import { Button, Card, TextField } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const App = () => {
  const handleClick = () => {
    alert("submitted successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: lightBlue[100],
        height: "100vh",
      }}
    >
      <Card sx={{ minWidth: 100, padding: 2 }}>
        <div>
          <p>Welcome to demo...</p>
        </div>
        <TextField fullWidth label="Provide Your Feedback" id="fullWidth" />
        <div>
          <p>Submit your feedback</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Button onClick={handleClick} variant="contained">
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default App;
