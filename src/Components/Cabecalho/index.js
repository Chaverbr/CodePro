import React from 'react';
import "./Cabecalho.css";
import { Link, useLocation } from 'react-router-dom';

const Cabecalho = () => {

      const pathLocation = useLocation();

      function borda(nome) {
            if (nome === "home" && pathLocation.pathname === "/") {
                  return {borderBottom: "2px solid #0D59FF"}
            }else if(nome === "orcamento" && pathLocation.pathname === "/orcamento") {
                  return {borderBottom: "2px solid #0D59FF"}
            }
      }

      return (
            <header className='cabecalho'>

                  <h1 className='cabecalho-titulo'>CodePro</h1>

                  <ul className='cabecalho-nav'>

                        <Link to={"/"} className='listLink'>
                              <li
                                    className='cabecalho-nav--item'
                                    style={borda("home")}
                              >
                                    Home
                              </li>
                        </Link>

                        <Link to={"/orcamento"} className='listLink'>
                              <li
                                    className='cabecalho-nav--item'
                                    style={borda("orcamento")}
                              >
                                    Orçamento
                              </li>
                        </Link>
                  </ul>

            </header>
      )
}


export default Cabecalho;