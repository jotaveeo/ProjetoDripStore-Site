import React from "react";
import "./style.css";

export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}) {
  return (
    <>
      <section className="section">
        <h2 className="sextion-title">AQUI SERÁ O TITULO</h2>
        {link && (<a href={link.href} className="section-link">{link.text}</a>)}
      </section>
    </>
  );
}
