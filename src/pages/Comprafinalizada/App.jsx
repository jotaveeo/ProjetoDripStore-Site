import img from "../../assets/tenis.png";
import React from "react";
import CompraConcluida from "../../components/CompraConcluida/App";
import Layout from "../../components/Layout/App";

export default function Comprafinalizada() {
  const personalInfo = {
    name: "Francisco Antonio Pereira",
    cpf: "123.456.789-35",
    email: "francisco@gmail.com",
    phone: "(85) 5555-5555",
  };

  const deliveryInfo = {
    address: "Rua João Pessoa, 333",
    district: "Centro",
    city: "Fortaleza, Ceará",
    postalCode: "43388-000",
  };

  const paymentInfo = {
    cardHolder: "FRANCISCO A P",
    cardLastDigits: "2020",
  };

  const purchaseSummary = [
    {
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: "219,00",
      imageUrl: img,
    },
  ];

  return (
    <div>
      <Layout>
        <CompraConcluida
          personalInfo={personalInfo}
          deliveryInfo={deliveryInfo}
          paymentInfo={paymentInfo}
          purchaseSummary={purchaseSummary}
        />
      </Layout>
    </div>
  );
}
