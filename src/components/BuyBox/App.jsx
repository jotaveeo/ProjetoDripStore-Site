// import React from "react";
// import Gallery from "../Gallery/app2";
// import "./style.css";

// export default function BuyBox() {
//   return (
//     <div className="product-details">
//       <h2 className="product-title">
//         Tênis Nike Revolution 6 Next Nature Masculino
//       </h2>
//       <p className="product-category">Casual | Nike | REF:3846171</p>

//       <div className="rating">
//         <span className="stars">⭐⭐⭐⭐</span>
//         <span className="rating-value">4.7</span>
//         <span className="review-count">(90 avaliações)</span>
//       </div>

//       <div className="price">
//         <span className="current-price">R$ 219,00</span>
//         <span className="original-price">R$ 299,00</span>
//       </div>

//       <p className="product-description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco.
//       </p>

//       <div className="size-selection">
//         <h4>Tamanho</h4>
//         <div className="size-options">
//           {["39", "40", "41", "42", "43"].map((size) => (
//             <button key={size} className="size-option">
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="color-selection">
//         <h4>Cor</h4>
//         <div className="color-options">
//           {["#00c3ff", "#ff5c5c", "#555", "#8a57f2"].map((color, index) => (
//             <span
//               key={index}
//               className="color-circle"
//               style={{ backgroundColor: color }}
//             ></span>
//           ))}
//         </div>
//       </div>

//       <button className="buy-button">COMPRAR</button>
//     </div>
//   );
// }

import React from "react";
import "./style.css";

export default function BuyBox({
  name = "Tênis Nike Revolution 6 Next Nature Masculino",
  category = "Casual | Nike | REF:3846171",
  stars = 4.7,
  reviewCount = 90,
  price = "R$ 219,00",
  originalPrice = "R$ 299,00",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  sizeOptions = ["39", "40", "41", "42", "43"],
  colorOptions = ["#00c3ff", "#ff5c5c", "#555", "#8a57f2"],
  onBuyClick = () => alert("Produto comprado!"),
}) {
  return (
    <div className="product-details">
      <h2 className="product-title">{name}</h2>
      <p className="product-category">{category}</p>

      <div className="rating">
        <span className="stars">⭐⭐⭐⭐</span>
        <span className="rating-value">{stars}</span>
        <span className="review-count">({reviewCount} avaliações)</span>
      </div>

      <div className="price">
        <span className="current-price">{price}</span>
        <span className="original-price">{originalPrice}</span>
      </div>

      <p className="product-description">{description}</p>

      <div className="size-selection">
        <h4>Tamanho</h4>
        <div className="size-options">
          {sizeOptions.map((size) => (
            <button key={size} className="size-option">
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="color-selection">
        <h4>Cor</h4>
        <div className="color-options">
          {colorOptions.map((color, index) => (
            <span
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>

      <button className="buy-button" onClick={onBuyClick}>
        COMPRAR
      </button>
    </div>
  );
}
