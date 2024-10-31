import iconeBusca from "../../../public/Search.png"
import "./style.css"

export default function Busca() {
    return(
       <div className="Pesquisa">

            <input type="text" className="transparente"  placeholder="Pesquise produto..."/>
            <button className="pesquisaIcons"><img src={iconeBusca} alt="" /></button>
       </div>

    );
}
