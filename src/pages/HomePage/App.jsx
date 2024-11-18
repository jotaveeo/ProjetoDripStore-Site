import React from "react";
import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import Gallery from "../../components/Gallery/app";
import Section from "../../components/Section/App";
import Colecao from "../../components/Colecao/app";
import ProdutoLaye from "../../components/ProdutoLaye/App";

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
