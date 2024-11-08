import Footer from "../Footer/App";
import Header from "../Header/App";
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};