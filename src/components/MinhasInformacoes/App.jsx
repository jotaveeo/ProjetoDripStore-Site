import React from "react";
import "./style.css";

export default function MinhasInformacoes() {
  return (
    <div className="minhas-informacoes-container">
      <div className="minhas-informacoes-nav">
        <p>Meu Perfil</p>
        <hr />
        <p>Meus Pedidos</p>
        <hr />
        <p>Minhas Informações</p>
        <hr />
        <p>Métodos de Pagamento</p>
      </div>

      <div className="minhas-informacoes-content">
        <section className="minhas-informacoes-header">
          <div>
            <p>
              <strong>Minhas Informações</strong>
            </p>
          </div>
          <div className="minhas-informacoes-edit-link">
            <a href="#">Editar</a>
          </div>
        </section>

        <hr />

        <div className="minhas-informacoes-pessoais">
          <div className="minhas-informacoes-title">
            <h2>Informações Pessoais</h2>
          </div>
          <div className="minhas-informacoes-item">
            <p>Nome:</p>
            <p>Francisco Antonio Pereira</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>CPF:</p>
            <p>123485913-35</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Email:</p>
            <p>francisco@gmail.com</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Celular:</p>
            <p>(85) 5555-5555</p>
          </div>
        </div>

        <hr />

        <div className="minhas-informacoes-entrega">
          <div className="minhas-informacoes-title">
            <div>
              <h2>Informações de Entrega</h2>
            </div>
          </div>
          <div className="minhas-informacoes-item">
            <p>Endereço:</p>
            <p>Rua João Pessoa, 333</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Bairro:</p>
            <p>Centro</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>Cidade:</p>
            <p>Fortaleza, Ceará</p>
          </div>
          <div className="minhas-informacoes-item">
            <p>CEP:</p>
            <p>433-8800</p>
          </div>
        </div>
      </div>
    </div>
  );
}
