import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { HiArchiveBox } from "react-icons/hi2";

export default function Header() {
  const [data, setdata] = useState("");
  const [num, setnum] = useState(1);
  const [Data, setData] = useState([]);
  const addData = () => {
    if (data === "") {
      return;
    }

    const usedNumbers = new Set(Data.map((item) => item.num));

    let newNum = 1;
    while (usedNumbers.has(newNum)) {
      newNum++;
    }

    setData([...Data, { num: newNum, data }]);
    setdata("");
  };

  const removeit = (index) => {
    let arr = Data;
    arr.splice(index, 1);
    setData([...arr]);
    setnum(num - 1);
  };
  return (
    <div className="header">
      <div className="main" style={{ boxShadow: "2px 2px 10px grey" }}>
        <h1
          style={{
            textAlign: "left",
            margin: "10px",
            paddingLeft: "5%",
            fontWeight: "bold",
            color: "grey",
            marginBottom: "10px",
          }}
        >
          TODO LIST
        </h1>
        <hr className="L" />

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              display: "inline-flex",
              gap: "20px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <TextField
              id="standard-basic"
              label="Task"
              variant="standard"
              value={data}
              onChange={(e) => setdata(e.target.value)}
            />
            <Stack>
              <Button
                variant="contained"
                onClick={addData}
                style={{
                  padding: "0px",
                  marginLeft: "-10px",
                  marginTop: "10px",
                }}
              >
                <div style={{ fontWeight: "bolder", fontSize: "20px" }}>+</div>
              </Button>
            </Stack>
          </div>
        </Box>
        <div className="daba">
          {Data.map((element, index) => {
            return (
              <div className="DataHolder">
                <div
                  className="tasks"
                  style={{ display: "inline-flex" }}
                  key={index}
                >
                  <h4
                    className="H4"
                    style={{ color: "#495057", fontWeight: "bold" }}
                  >
                    Task {element.num}:
                  </h4>
                  <p style={{ marginLeft: "10%" }}>{element.data}</p>
                  <button
                    className="Delete"
                    style={{
                      marginLeft: "auto",
                      border: "none",
                      backgroundColor: "rgba(255, 0, 0, 0.644)",
                      borderRadius: "5px",
                      color: "white",
                    }}
                    onClick={() => removeit(index)}
                  >
                    <HiArchiveBox />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
