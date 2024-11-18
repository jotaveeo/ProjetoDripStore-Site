import React from "react";
import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import Gallery from "../../components/Gallery/app";
import Section from "../../components/Section/App";
import Colecao from "../../components/Colecao/app";
import ProdutoLaye from "../../components/ProdutoLaye/App";
import img from "../../assets/tenis.png";
import "./style.css";

const products = [...Array(8)].map((_, index) => ({
  img: img,
  descontooff: "30% OFF",
  title: "Tênis",
  nomeproduto: "K-Swiss V8 - Masculino",
  preco: "$200",
  precodesconto: "$100",
}));

export default function HomePage() {
  return (
    <Layout>
      <Gallery />
      <Colecao />
      <Section />
      <ProductListing products={products} columns={4} rows={2} />
      <ProdutoLaye />
    </Layout>
  );
}
