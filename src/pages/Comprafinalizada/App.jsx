import img from "../../assets/tenis.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/App";
import "./style.css";

export default function Comprafinalizada() {
  const navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({});
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [purchaseSummary, setPurchaseSummary] = useState([]);

  useEffect(() => {
    // Função para buscar os dados do backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/purchase/details");
        const data = await response.json();

        setPersonalInfo(data.personalInfo);
        setDeliveryInfo(data.deliveryInfo);
        setPaymentInfo(data.paymentInfo);
        setPurchaseSummary(data.purchaseSummary);
      } catch (error) {
        console.error("Erro ao buscar os dados da compra:", error);
      }
    };

    fetchData();
  }, []);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Layout>
        <div className="compra-concluida-container">
          <div className="compra-concluida-card">
            <h2 className="compra-concluida-title">
              🎉 Compra Realizada com sucesso!
            </h2>

            {/* Informações Pessoais */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Informações Pessoais
              </h3>
              <div className="compra-concluida-info-group">
                <p>
                  <strong>Nome:</strong> {personalInfo.name}
                </p>
                <p>
                  <strong>CPF:</strong> {personalInfo.cpf}
                </p>
                <p>
                  <strong>Email:</strong> {personalInfo.email}
                </p>
                <p>
                  <strong>Celular:</strong> {personalInfo.phone}
                </p>
              </div>
            </section>

            {/* Informações de Entrega */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Informações de Entrega
              </h3>
              <div className="compra-concluida-info-group">
                <p>
                  <strong>Endereço:</strong> {deliveryInfo.address}
                </p>
                <p>
                  <strong>Bairro:</strong> {deliveryInfo.district}
                </p>
                <p>
                  <strong>Cidade:</strong> {deliveryInfo.city}
                </p>
                <p>
                  <strong>CEP:</strong> {deliveryInfo.postalCode}
                </p>
              </div>
            </section>

            {/* Informações de Pagamento */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Informações de Pagamento
              </h3>
              <div className="compra-concluida-info-group">
                <p>
                  <strong>Titular do Cartão:</strong> {paymentInfo.cardHolder}
                </p>
                <p>
                  <strong>Final:</strong> **** **** **** {paymentInfo.cardLastDigits}
                </p>
              </div>
            </section>

            {/* Resumo da Compra */}
            <section className="compra-concluida-section">
              <h3 className="compra-concluida-section-title">
                Resumo da Compra
              </h3>
              {purchaseSummary.map((item, index) => (
                <div className="compra-concluida-product-item" key={index}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="compra-concluida-product-image"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>
                      <strong>Total:</strong> R$ {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Botão Imprimir Recibo */}
            <div className="compra-concluida-print-button">
              <button className="compra-concluida-button-link">
                Imprimir Recibo
              </button>
            </div>
          </div>

          {/* Botão Voltar para Home */}
          <button
            className="compra-concluida-home-button"
            onClick={handleHomeClick}
          >
            Voltar para Home
          </button>
        </div>
      </Layout>
    </div>
  );
}