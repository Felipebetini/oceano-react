import React, { Component } from "react";
import Image1 from "../assets/img/cafePacote.png";
import Image2 from "../assets/img/cafePacote.png";
import Image3 from "../assets/img/cafePacote.png";
import Image4 from "../assets/img/cafePacote.png";
import Slider from "./slider";

const images = [
  { imagem: Image1, descricao: "balbla", preco: "R$25,00" },
  { imagem: Image2, descricao: "bleble", preco: "R$30,00" },
  { imagem: Image3, descricao: "blibli", preco: "R$40,00" },
  { imagem: Image4, descricao: "bloblo", preco: "R$50,00" },
];

export default class Flickity extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Slider
            options={{
              autoPlay: 0,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div
                style={{
                  width: "80%",
                  height: "100%",
                  margin: "0 0.5em",
                  textAlign: "center",
                }}
                key={index}
              >
                <img src={image.imagem} alt="cafes" />
                <div className="descricao">
                  <span>{image.descricao}</span>
                  <span>{image.preco}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
