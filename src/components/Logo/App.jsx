import React from "react";
import logoHeader from "../../assets/logo-header.svg";
import "../Logo/style.css"

export default function Logo() {
  return (
    <>
      <img className="logo-header" src={logoHeader} alt="logo-header" />
    </>
  );
}
