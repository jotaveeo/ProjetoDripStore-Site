import ProductListing from "../../components/ProductListing/App";
import Gallery from "../../components/Gallery/app2";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import "./style.css";
import BuyBox from "../../components/BuyBox/App";
import ProductOptions from "../../components/ProductOptions/App";

export default function ProductViewPage() {
  return (
    <>
      <Layout>
        <div className="product-view-container">
          <Gallery />
          <BuyBox
            name="Tênis Nike Air Max"
            category="Esportivo | Nike | REF:12345"
            stars={4.8}
            reviewCount={200}
            price="R$ 249,99"
            originalPrice="R$ 350,00"
            description="Tênis confortável para a prática de esportes."
            sizeOptions={["37", "38", "39", "40", "41"]}
            colorOptions={["#ff5c5c", "#000", "#00c3ff", "#ffff00"]}
          >
            <ProductOptions
              options={["39", "40", "41"]}
              radius="5px"
              shape="square"
              type="text"
            />
          </BuyBox>
        </div>
        <Section title="Produtos relacionados">
          <ProductListing />
        </Section>
      </Layout>
    </>
  );
}

// name="Tênis Nike Air Max"
// reference="123456"
// stars={4.5}
// rating={120}
// price="R$ 399,99"
// priceDiscount="R$ 299,99"
// description="Tênis confortável e estiloso para o seu dia a dia."
