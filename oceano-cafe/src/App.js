import "./App.css";
import facebook from "./assets/img/facebook.png";
import instagram from "./assets/img/instagram.png";
import logo from "./assets/img/logoOceanoCafe.jpeg";
import cafePacote from "./assets/img/cafePacote.png";
import { Component } from "react";

class App extends Component {
  state = {
    isActive: true,
  };

  handleShow = () => {
    this.setState({
      isActive: false,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: true,
    });
  };
  render() {
    return (
      <div className="App">
        <section id="home">
          <div className="row">
            <div className=" divImgLogo col-6">
              <img src={logo} className="imgLogo" />
            </div>

            <div className=" logo col-6">
              <svg viewBox="-100 -90 301 200" className="svg">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="25%" stopColor="#000" />
                    <stop offset="50%" stopColor=" #000" />
                  </linearGradient>
                  <pattern
                    id="wave"
                    x="0"
                    y="-4"
                    width="100"
                    height="300"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      id="wavePath"
                      d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                      mask="url(#mask)"
                      fill="url(#gradient)"
                    >
                      <animateTransform
                        attributeName="transform"
                        begin="0s"
                        dur="1.5s"
                        type="translate"
                        from="0,0"
                        to="40,0"
                        repeatCount="indefinite"
                      />
                    </path>
                  </pattern>
                </defs>

                <text
                  className="text-anchor"
                  textAnchor="middle"
                  x="50"
                  y="15"
                  fill="url(#wave)"
                >
                  {" "}
                  oceano café{" "}
                </text>
                <text
                  className="text-anchor"
                  textAnchor="middle"
                  x="50"
                  y="15"
                  fill="url(#gradient)"
                  fillOpacity="0.5"
                >
                  {" "}
                  oceano café
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container-fluid divAbout">
            <div className="row">
              <div className="col-sm textCenter">
                <p className="text1">
                  A Oceano Cafe mergulha no desejo de ampliar as percepcoes
                  sensiveis da cultura do cafe especial e tambem da
                  responsabilidade social e que mensura nossos impactos no mundo
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="produtos">
          <div>
            <h1 className="hContact">Compre aqui o seu café</h1>
          </div>

          <div>
            {this.state.isActive ? (
              <div className="produtosInline">
                <div
                  class="card"
                  style={{
                    width: "18rem",
                    marginLeft: "100px",
                    marginRight: "100px",
                    borderRadius: "50px",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={cafePacote}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Catuai vermelho</h5>
                    <p class="card-text">
                      Gosto puxado para o adocicado, mais corpo, e viscosidade
                    </p>
                    <a class="btn btn-dark" onClick={this.handleShow}>
                      Pedir
                    </a>
                  </div>
                </div>
                <div
                  class="card"
                  style={{
                    width: "18rem",
                    marginLeft: "100px",
                    marginRight: "100px",
                    borderRadius: "50px",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={cafePacote}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Catuai Amarelo</h5>
                    <p class="card-text">
                      Mais ácido, sabor de frutas amarelas, menos encorpado
                    </p>
                    <a class="btn btn-dark" onClick={this.handleShow}>
                      Pedir
                    </a>
                  </div>
                </div>
                <div
                  class="card"
                  style={{
                    width: "18rem",
                    marginLeft: "100px",
                    marginRight: "100px",
                    borderRadius: "50px",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <img
                    class="card-img-top"
                    src={cafePacote}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Mundo Novo</h5>
                    <p class="card-text">
                      Sabor puxando para o cacao, tendencia a ser mais
                      equilibrado
                    </p>

                    <a class="btn btn-dark" onClick={this.handleShow}>
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cadastro">
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1" style={{ color: "white" }}>
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      aria-describedby="nome"
                      placeholder="Seu Nome!"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1" style={{ color: "white" }}>
                      Seu Sobrenome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sobreNome"
                      aria-describedby="sobreNome"
                      placeholder="Seu Sobrenome!"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1" style={{ color: "white" }}>
                      Endereço
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="endereco"
                      aria-describedby="endereco"
                      placeholder="Seu endereço"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1" style={{ color: "white" }}>
                      Tipo café
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Catuai Vermelho</option>
                      <option>Catuai Amarelo</option>
                      <option>Mundo Novo</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: "2rem" }}>
                    <label for="exampleInputEmail1" style={{ color: "white" }}>
                      Quantidade
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleHide}
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
        {/* <section className="about2" id="about2">
        <div className="container-fluid">
          <div className="container-fluid about2Div">
            <h1 className="about2H1Up">Saiba mais sobre cafés especiais</h1>
          </div>

          <div className="center">
            <button className="fancy">
              <span className="top-key"></span>
              <a href="./html/learnMore.html" target="_blank" className="">
                clique aqui para saber mais
              </a>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </div>
        </div>
      </section> */}

        <section className="contact" id="contact">
          <div>
            <h1 className="hContact">Deixe um recado para nós!</h1>
          </div>
          <div className="container contactDiv">
            <form action="action_page.php">
              <label htmlFor="fname">Primeiro Nome</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Seu nome.."
              />
              <label htmlFor="lname">Sobrenome</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Seu Sobrenome.."
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail.."
              />
              <label htmlFor="subject">Mande seu recado!</label>
              <textarea
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Digite aqui..."
                required
              ></textarea>
              <input type="submit" value="Submit" className="btnSubmit" />
              <div className="container-fluid" id="redesSociais">
                <p className="pRedes">Nos visite tambem!</p>
                <a href="#" target="_blank">
                  <img className="imgRedesFacebook" src={facebook} />
                </a>
                <a href="#" target="_blank">
                  <img className="imgRedesInstagram" src={instagram} />
                </a>
              </div>
            </form>
          </div>
          <a href="#home" className="to-top"></a>
        </section>
      </div>
    );
  }
}

export default App;
