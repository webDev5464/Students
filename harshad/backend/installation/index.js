//* ----------------- Import -----------------------

import express, { json } from "express";
import mongoose from 'mongoose'

const app = express();
app.use(json());

//* ------------------------------------------

//* ----------------- Api Handling -----------------------

api, end-point
app.get("/", (req, res) => {
  res.send({
    msg: "Get request",
  });
});

app.post("/", (req, res) => {
  const { fname, lname } = req.body;

  res.send(`Hello ${fname} ${lname}`);
});

//* ------------------------------------------

//* ----------------- Server listening -----------------------

const PORT = 7070;
app.listen(PORT, () => console.log(`==> http://localhost:${PORT}`));

// http://localhost:8080/
// localhost :- 127.0.0.1:8080
// http://127.0.0.1:8080/
