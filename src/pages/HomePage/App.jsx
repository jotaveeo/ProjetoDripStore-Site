import ProductListing from "../../components/ProductListing/App";
import img from "../../assets/tenis.png"
import FilterGroup from "../../components/FilterGroup/App";

const Product = {

  img: img,
 descontooff:"30% OFF",
 title:"Tênis",
 nomeproduto:"K-Swiss V8 - Masculino",
 preco:"$200",
 precodesconto:"$100",


}


function HomePage() {
  return (

    <>
    
    <ProductListing product={Product} />
    <FilterGroup/>
      
    </>

  )
}

export default HomePage;