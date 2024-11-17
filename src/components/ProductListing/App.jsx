import "./style.css";
import ProductCard from "../../components/ProductCard/App";
import img from "../../assets/tenis.png";

const product = {
  img: img,
  descontooff: "30% OFF",
  title: "Tênis",
  nomeproduto: "K-Swiss V8 - Masculino",
  preco: "$200",
  precodesconto: "$100",
};

export default function ProductListing() {
  return (
    <div className="productListing">
      {[...Array(8)].map((_, index) => (
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
