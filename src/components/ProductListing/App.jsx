import React from "react";
import "./style.css";
import ProductCard from "../../components/ProductCard/App";

export default function ProductListing({
  products,
  columns = 4,
  rows = "auto",
}) {
  return (
    <div
      className="product-listing"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          img={product.img}
          descontooff={product.descontooff}
          title={product.title}
          nomeProduto={product.nomeproduto}
          preco={product.preco}
          precoDesconto={product.precodesconto}
        />
      ))}
    </div>
  );
}
