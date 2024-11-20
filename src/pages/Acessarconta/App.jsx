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
    login: "",
    password: "",
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
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST", // Use POST para enviar dados de login
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login bem-sucedido!", data);
        alert("Login bem-sucedido!");
        navigate("/"); // Redireciona para a página inicial
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Erro ao acessar a conta");
      }
    } catch (error) {
      console.error("Erro ao acessar a conta:", error);
    }
    console.log(formData);
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
