import React, { useState } from "react";

import "./App.css";
import logo from "./LogoPastel.svg";
import pastelBlur from "./assets/pastel-paralax.png";
import pastelPqno from "./assets/pasteis-pequenos.png";
import Pedido from "./Components/Pedido";

function App() {
  const [formData, setFormData] = useState({
    pedido: "",
    sabor: "",
    valor: "",
    descricao: "",
    imagem: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoPedido = {
      pedido: formData.pedido,
      sabor: formData.sabor,
      valor: formData.valor,
      descricao: formData.descricao,
      imagem: formData.imagem,
    };

    setPedidos([novoPedido, ...pedidos]);

    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className="img-pasteis">
        <div className="pastelblur">
          <img src={pastelBlur} alt="" />
        </div>
        <div className="doispasteis">
          <img src={pastelPqno} alt="" />
        </div>
      </div>
      <div className="wrapperForm">
        <div className="titleWrapper">
          <div className="textTittle">
            <span>Monte aqui o seu cardápio. O que está esperando?</span>
          </div>
          <div className="select">
            <span className="textComida" id="comida">
              Comida
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="textBebida">Bebida</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="threeInputs">
            <input
              type="text"
              name="pedido"
              id="pedido"
              required
              minLength={3}
              maxLength={60}
              placeholder="Título do pedido"
              value={formData.pedido}
              onChange={handleChange}
            />
            <input
              type="text"
              name="sabor"
              id="sabor"
              placeholder="Sabor"
              value={formData.sabor}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="valor"
              id="valor"
              placeholder="R$"
              min={0}
              required
              value={formData.valor}
              onChange={handleChange}
            />
          </div>
          <div className="descricao">
            <input
              type="text"
              name="descricao"
              id="descricao"
              placeholder="Descrição"
              value={formData.descricao}
              onChange={handleChange}
            />
            <label for="arquivo" id="labelArquivo">
              <img src="" alt="" />
              Jogue aqui o arquivo de imagem do seu pastel ou clique para
              localizar a pasta.
            </label>
            <input
              type="file"
              name="arquivo"
              id="arquivo"
              value={formData.imagem}
              onChange={handleChange}
            />
          </div>
          <div className="buttons">
            <div id="limpar">LIMPAR</div>
            <button id="cadastrar" type="submit">
              CADASTRAR
            </button>
          </div>
        </form>
      </div>
      <div className="line">
        <span>Veja como será apresentado ao cliente</span>
      </div>
      {pedidos.map((pedido, index) => (
        <Pedido key={index} data={pedido} />
      ))}
    </div>
  );
}

export default App;
