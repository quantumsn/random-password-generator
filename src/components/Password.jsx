import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import passwordGenerator from "../utilit/passwordGenerator";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function inputFeild() {
  let [password, setPassword] = useState("");
  let [isNumberAllowed, setNumberAllowed] = useState(false);
  let [isCharAllowed, setCharAllowed] = useState(false);
  let [length, setLength] = useState(8);

  let passwordRef = useRef(null);

  useEffect(
    () =>
      setPassword(passwordGenerator(length, isNumberAllowed, isCharAllowed)),
    [isNumberAllowed, length, isCharAllowed]
  );

  let copyPassOnClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

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
            color: "black",
            fontSize: 28,
          }}
          variant="outlined"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <Button
          sx={{ p: "12px", outline: "none" }}
          color="secondary"
          variant="contained"
          onClick={copyPassOnClip}
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
          value={length}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={4}
          max={50}
          color="secondary"
          sx={{ width: 100, marginRight: 3 }}
          onChange={(event) => setLength(event.target.value)}
        />

        <FormControlLabel
          control={<Checkbox color="secondary" style={{ color: "#a523ac" }} />}
          label="Numbers"
          onClick={() => setNumberAllowed(!isNumberAllowed)}
        />
        <FormControlLabel
          control={<Checkbox color="secondary" style={{ color: "#a523ac" }} />}
          label="Characters"
          onClick={() => setCharAllowed(!isCharAllowed)}
        />
      </Paper>
    </>
  );
}
