import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Facebook from "../../assets/svgs/facebook-circle.svg";
import Gmail from "../../assets/svgs/gmail.svg";
import ImgCad from "../../assets/svgs/imgcad.svg";
import Footer from "../../components/Footer/App";

import "./style.css";

export default function Acessarconta() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://673cb70796b8dcd5f3fb3aba.mockapi.io/login",
        {
          method: "GET", // MockAPI usa GET para recuperar dados
        }
      );
      const users = await response.json();

      // Validação simples: verifica se o login e a senha correspondem a algum usuário
      const user = users.find(
        (user) =>
          (user.email === formData.login || user.nome === formData.login) &&
          user.senha === formData.password
      );

      if (user) {
        console.log("Login bem-sucedido!", user);
        navigate("/"); // Redireciona para a página inicial
      } else {
        alert("Login ou senha inválidos!");
      }
    } catch (error) {
      console.error("Erro ao acessar a conta:", error);
    }
  };

  return (
    <>
      <section className="acessar-conta">
        <div className="forms-content">
          <form className="form" onSubmit={handleSubmit}>
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
              value={formData.login}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Senha *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Insira sua senha"
              value={formData.password}
              onChange={handleChange}
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
