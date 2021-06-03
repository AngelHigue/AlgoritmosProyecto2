import React, { useState } from "react";
import api from "../App/api";

export const Form = ({ setJuegos }) => {
  const [datos, setDatos] = useState({
    categoria: "",
    multijugador: "",
    edad: "",
    plataforma: "",
  });

  const handleData = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const fetch = async (e) => {
    e.preventDefault();
    let data = await api.juegos.search({
      categoria: datos.categoria,
      multijugador: datos.multijugador,
      edad: datos.edad,
      plataforma: datos.plataforma,
    });

    if (data.body != "") {
      setJuegos(data.body);
    }
  };

  return (
    <form onSubmit={fetch}>
      <div class="field">
        <label class="label">Categoria</label>
        <div class="control">
          <div class="select">
            <select
              name="categoria"
              onChange={handleData}
              className=" input is-fullwidht"
            >
              <option>Categoria 1</option>
              <option>Categoria 2</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Multijugador</label>
        <div class="control">
          <div class="select">
            <select name="multijugador" onChange={handleData}>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Es mayor de edad</label>
        <div class="control">
          <div class="select" name="edad" onChange={handleData}>
            <select>
              <option>Si</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Plataforma</label>
        <div class="control">
          <div class="select" name="plataforma" onChange={handleData}>
            <select>
              <option>PC</option>
              <option>PlayStation</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Buscar</button>
        </div>
      </div>
    </form>
  );
};
