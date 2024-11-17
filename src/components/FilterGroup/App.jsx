import React from "react";
import "./style.css";

export default function FilterGroup() {
  return (
    <>
      <div className="filterGrupo">
        <h1 className="titulo">Filtrar por</h1>
        <hr />
        <div className="filterMarka">
          <h3>Marka</h3>
          <ul>
            <li>
              {" "}
              <input type="checkbox" />
              <label> Adidas </label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Calenciaga</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>K-Swiss</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Nike</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Puma</label>
            </li>
          </ul>
        </div>
        <div className="filterCategoria">
          <h3>Categoria</h3>
          <ul>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Esporte e lazer </label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Casual</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Utilitário</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Corrida</label>
            </li>
          </ul>
        </div>
        <div className="filterGenero">
          <h3>Gênero</h3>
          <ul>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Masculino</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Feminino</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" />
              <label>Unisex</label>
            </li>
          </ul>
        </div>
        <div className="filterEstado">
          <h3>Estado</h3>
          <ul>
            <li>
              {" "}
              <input name="estado" type="radio" />
              <label>Nova</label>
            </li>

            <li>
              {" "}
              <input name="estado" type="radio" />
              <label>Usado</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
