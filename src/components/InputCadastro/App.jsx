import React from "react";
import "./style.css";

export default function InputCadastro({ htmlFor, text, id, type, placeholder }) {
  return (
    <div className="input-cadastro-campo">
      <form className="input-cadastro-info">
        <label htmlFor={htmlFor}>{text}</label>
        <input id={id} type={type} placeholder={placeholder} />
      </form>
    </div>
  );
}