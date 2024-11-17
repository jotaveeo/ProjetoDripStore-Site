import Footer from "../Footer/App";
import Header from "../Header/App";

export default function Layout({ children }) {
  return (
    <>
      {/* Componente do cabeçalho */}
      <Header />
      <main>{children}</main>
      <Footer />
      {/* Componente do rodapé */}
    </>
  );
}
