import React, { useState } from "react";
import "./style.css";

export default function ProductOptions({
  options,
  radius,
  shape,
  type,
}) {
  // Estado para armazenar a opção selecionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Função para lidar com a seleção de uma opção
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  // Estilos dinâmicos com base nas propriedades
  const getOptionStyle = (option) => {
    const isSelected = option === selectedOption;
    const baseStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      border: "1px solid var(--cor-light-gray-2)",
    };

    if (shape === "square") {
      return {
        ...baseStyle,
        width: "46px",
        height: "46px",
        borderRadius: radius || "5px",
        backgroundColor: type === "color" ? option : "transparent",
        fontSize: type === "text" ? "24px" : "initial",
        color: type === "text" ? "var(--cor-dark-gray-2)" : "transparent",
        border: isSelected ? "2px solid var(--cor-primary)" : baseStyle.border,
      };
    } else if (shape === "circle") {
      return {
        ...baseStyle,
        width: "31px",
        height: "31px",
        borderRadius: "50%",
        backgroundColor: type === "color" ? option : "transparent",
        fontSize: type === "text" ? "24px" : "initial",
        color: type === "text" ? "var(--cor-dark-gray-2)" : "transparent",
        border: isSelected ? "2px solid var(--cor-primary)" : baseStyle.border,
      };
    }
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className="option-item"
          style={getOptionStyle(option)}
          onClick={() => handleSelect(option)}
        >
          {type === "text" ? option : ""}
        </div>
      ))}
    </div>
  );
}
