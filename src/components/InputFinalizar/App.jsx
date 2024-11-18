import React from "react";
import "./style.css";

export default function InputFinalizar({ htmlFor, text, id, type, placeholder }) {
  return (
    <div className="input-finalizar-campo">
      <form className="input-finalizar-info">
        <label htmlFor={htmlFor}>{text}</label>
        <input id={id} type={type} placeholder={placeholder} />
      </form>
    </div>
  );
}