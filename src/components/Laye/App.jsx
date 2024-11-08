import Laye from "../../assets/svgs/Laye.svg";
import "./style.css";

export default function ProdutoLaye() {
return (
    <article>
    <div className="oferta">
        <img src={Laye} alt="tenis" />
    </div>

    <div>
    <table id="laye">
    <thead>
    <tr>
        <th colSpan="2"><strong>Oferta especial</strong></th>
    </tr>
    </thead>
    <tbody>
        <tr>
        <td colSpan="2">
            <h1>Air Jordan edição de colecionador</h1>
        </td>
        </tr>
        <tr>
        <td colSpan="2">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque doloribus nulla sapiente. Ducimus distinctio quis ipsum aperiam accusamus tenetur doloribus?</p>
        </td>
        </tr>
        <tr>
        <td>
            <button><a href="#">Ver Oferta</a></button>
        </td>
        </tr>
    </tbody>
    </table>
    </div>
    </article>
    );
}