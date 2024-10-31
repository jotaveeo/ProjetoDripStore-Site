import "./style.css"
export default function ProductCard (props){
    return (

        <>

       <article className="article">
            <figure className="containerImg">
                <img src={props.img} />
                <div className="off">
                <p>{props.descontooff}</p>
                    </div> 
            </figure>
        
             <section className="sectionCard">
                     <h4>{props.title}</h4>
                     <h5>{props.nomeProduto}</h5>
                     <div className="priceCard">
                        <p className="preco">{props.preco}</p>
                        <p className="precoDesconto">{props.precoDesconto}</p>
                     </div>
             </section>

       </article>
    </>

    )
         
}