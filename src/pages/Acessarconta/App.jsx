import Facebook from "../../assets/svgs/facebook-circle.svg";
import Gmail from "../../assets/svgs/gmail.svg";
import ImgCad from "../../assets/svgs/imgcad.svg";
import Footer from "../../components/Footer/App";

import "./style.css";

export default function Acessarconta() {
  return (
    <>
      <section className="acessar-conta">
        <div className="forms-content">
          <form className="form">
            <h1>Acesse sua conta</h1>
            <p>
              Novo cliente? Então registre-se <a href="/cadastro">aqui</a>.
            </p>
            <label htmlFor="login">Login *</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Insira seu login ou email"
              required
            />
            <label htmlFor="password">Senha *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Insira sua senha"
              required
            />
            <a href="/forgot-password" className="forgot-password">
              Esqueci minha senha
            </a>
            <button type="submit">Acessar a Conta</button>
            <div className="login-rede-sociais">
              <span>Ou faça login com</span>
              <img
                src={Facebook}
                alt="Icone Facebook"
                className="social-icon"
              />
              <img src={Gmail} alt="Icone Gmail" className="social-icon" />
            </div>
          </form>
        </div>
        <div className="img-cad">
          <img src={ImgCad} alt="Imagem Página de Cadastro" />
        </div>
      </section>
      <Footer />
    </>
  );
}