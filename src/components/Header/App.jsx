// import Busca from "../Busca/index";
// import "./style.css";

// export default function Header() {
//   return (
//     <>
//       <header>
//         <Busca />
//         <nav className="nav">
//           <ul>
//             <li>
//               <a href="/" className="active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/produtos">Produtos</a>
//             </li>
//             <li>
//               <a href="/categorias">Categorias</a>
//             </li>
//             <li>
//               <a href="/pedidos">Meus Pedidos</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// }

//

import { NavLink } from "react-router-dom";
import Busca from "../Busca/index";
import "./style.css";
export default function Header() {
  return (
    <header>
      <div>
        <Busca />
        <nav className="nav">
          <ul>
            <li>
            <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink to="/categorias" activeClassName="active">
                Categorias
              </NavLink>
            </li>
            <li>
              <NavLink to="/meuspedidos" activeClassName="active">
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
