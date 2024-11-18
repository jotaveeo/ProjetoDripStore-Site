import ProductListing from "../../components/ProductListing/App";
import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import Colecao from "../../components/Colecao/app";
import ProdutoLaye from "../../components/ProdutoLaye/App";
import "./style.css";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Gallery></Gallery>
        <Colecao></Colecao>
        <Section/>
        <ProductListing/>
        <ProdutoLaye/>
      </Layout>
    </>
  );
}

// import ProductListing from "../../components/ProductListing/App";
// import Gallery from "../../components/Gallery/app";
// import Layout from "../../components/Layout/App";
// import Section from "../../components/Section/App";
// import cardImg1 from "../../assets/collection-images/collection-1.png";
// import cardImg2 from "../../assets/collection-images/collection-2.png";
// import cardImg3 from "../../assets/collection-images/collection-3.png";
// import "./style.css";

// export default function HomePage() {
//   // Array de imagens para o componente Gallery
//   const galleryImages = [
//     { src: cardImg1 },
//     { src: cardImg2 },
//     { src: cardImg3 },
//     // Adicione mais imagens conforme necessário
//   ];

//   // Array de produtos para o componente ProductListing
//   const products = [
//     {
//       name: "Produto 1",
//       image: cardImg1,
//       price: 200,
//       priceDiscount: 149.9,
//     },
//     {
//       name: "Produto 2",
//       image: cardImg2,
//       price: 49.9,
//     },
//     // Adicione mais produtos conforme necessário
//   ];

//   return (
//     <Layout>
//       {/* Slide de imagens */}
//       <Gallery images={galleryImages} width="1440px" height="681px" />

//       {/* Coleções em destaque */}
//       <Section title="Coleções em destaque" titleAlign="center">
//         <div className="collections">
//           <img
//             src={cardImg1}
//             alt="Coleção 1"
//             className="collection-image"
//           />
//           <img
//             src={cardImg2}
//             alt="Coleção 2"
//             className="collection-image"
//           />
//           <img
//             src={cardImg3}
//             alt="Coleção 3"
//             className="collection-image"
//           />  
//         </div>
//       </Section>

//       {/* Produtos em alta */}
//       <Section title="Produtos em alta" titleAlign="left">
//         <ProductListing products={products} />
//       </Section>
//     </Layout>
//   );
// }
