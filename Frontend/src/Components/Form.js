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
    let data = await api.juegos.search(datos);

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
              <option value="-" selected disabled>
                --------------
              </option>
              <option value="Accion">Acción</option>
              <option value="Aventura">Aventura</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Multijugador</label>
        <div class="control">
          <div class="select">
            <select name="multijugador" onChange={handleData}>
              <option value="-" selected disabled>
                --------------
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Es mayor de edad</label>
        <div class="control">
          <div class="select">
            <select name="edad" onChange={handleData}>
              <option value="-" selected disabled>
                --------------
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Plataforma</label>
        <div class="control">
          <div class="select">
            <select name="plataforma" onChange={handleData}>
              <option value="-" selected disabled>
                --------------
              </option>
              <option value="PC">PC</option>
              <option value="PlayStation">PlayStation</option>
              <option value="Xbox">Xbox</option>
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
