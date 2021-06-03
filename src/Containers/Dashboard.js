import React, { useEffect, useState } from "react";
import { Form } from "../Components/Form";
import { List } from "../Components/List";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
 
  const [juegos, setJuegos] = useState([]);


  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="columns">
          <div
            className="column is-6"
            style={{
              backgroundColor: "#eee",
              margin: "5px",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <span className="subtitle is-3">Filtrar juegos</span>
            <hr />
            <Form setJuegos={setJuegos} />
          </div>
          <div
            className="column is-6"
            style={{
              backgroundColor: "#eee",
              margin: "5px",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <span className="subtitle is-3">Filtrar juegos</span>
            <hr />
            <List juegos={juegos} />
          </div>
        </div>
      </div>
    </>
  );
};
