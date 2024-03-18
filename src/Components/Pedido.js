import React from "react";
import "./Pedido.css";
import Pastel from "../assets/pastelPequeno.png";

export const Pedido = ({ data }) => {
  return (
    <div>
      <div className="pedidoWrapper">
        <div className="tittlePedido">
          <div className="tituloPedido">
            <span>" {data.pedido}"</span>
          </div>
          <div className="valorPedido">
            <span>R${data.valor} </span>
          </div>
        </div>
        <div className="descriptionWrapper">
          <div className="img">
            <img src={Pastel} alt="imagemPedido" />
          </div>
          <div className="description">
            <span>
              Sabor: <span id="saborDescription">{data.sabor}</span>
            </span>
            <span>
              Descrição: <span id="descriptionPedido">{data.descricao}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
