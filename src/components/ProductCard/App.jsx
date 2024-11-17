import "./style.css";

export default function ProductCard({
  img,
  descontooff,
  title,
  nomeProduto,
  preco,
  precoDesconto,
}) {
  return (
    <article className="article">
      <figure className="containerImg">
        <img src={img} alt={nomeProduto} />
        {descontooff && (
          <div className="off">
            <p>{descontooff}</p>
          </div>
        )}
      </figure>
      <section className="sectionCard">
        <h4>{title}</h4>
        <h5>{nomeProduto}</h5>
        <div className="priceCard">
          <p className={`preco ${precoDesconto ? 'desconto' : ''}`}>{preco}</p>
          {precoDesconto && <p className="precoDesconto">{precoDesconto}</p>}
        </div>
      </section>
    </article>
  );
}
