import Busca from "../../components/busca";
import Layout from "../../components/Layout/App";
import ProductCard from "../../components/ProductCard/App";
import img from "../../assets/tenis.png"

const Product = {

   img: img,
  descontooff:"30% OFF",
  title:"Tênis",
  nomeproduto:"K-Swiss V8 - Masculino",
  preco:"$200",
  precodesconto:"$100"

}





export default function App() {
  return (
    <>
    <ProductCard img= { Product.img}
     descontooff={Product.descontooff}
     title={Product.title}
     nomeProduto={Product.nomeproduto}
     preco={Product.preco}
     precoDesconto={Product.precodesconto}
    />
    {/* <Layout>
      
    </Layout>
    <Busca></Busca> */}
    </>
  );
}
