import React from "react";
import { useState } from "react";
import passwordGenerator from "../utilit/passwordGenerator";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function inputFeild() {
  return (
    <>
      <h2>Password Generator</h2>

      <Paper
        sx={{
          p: "6px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: 0,
        }}
      >
        <input
          id="outlined-basic"
          placeholder="Password"
          style={{
            width: 328,
            height: 50,
            borderRadius: 2,
            outline: "none",
            border: "none",
            backgroundColor: "wheat",
            padding: "0 10px",
            boxSizing: "border-box",
          }}
          variant="outlined"
          readOnly
        />
        <Button
          sx={{ p: "12px", outline: "none" }}
          color="secondary"
          variant="contained"
        >
          Copy
        </Button>
      </Paper>
      <Paper
        sx={{
          p: "6px 4px",
          display: "flex",
          alignItems: "center",
          borderRadius: 0,
          width: 400,
        }}
      >
        <label htmlFor="length" style={{ marginRight: 5 }}>
          Length
        </label>

        <Slider
          defaultValue={8}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={4}
          max={50}
          sx={{ width: 100, marginRight: 3 }}
        />

        <FormControlLabel control={<Checkbox />} label="Numbers" />
        <FormControlLabel control={<Checkbox />} label="Characters" />
      </Paper>
    </>
  );
}

export default inputFeild;
