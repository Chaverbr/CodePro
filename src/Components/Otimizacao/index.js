import React from 'react';
import "./Otimizacao.css";
import TextosContainer from "../TextosContainer";
import iconeOtimizado from "../../img/designOtimizar.png";

const Otimizacao = () => {
      return (

            <section className='otimizacaoContainer'>

                  <TextosContainer
                        titulo="Websites Estratégicos e Otimizados"
                        subtitulo="Na CodePro, somos especialistas em fornecer soluções digitais de ponta, focadas em impulsionar o sucesso do seu negócio online. Com nossos serviços de sites otimizados, ajudamos empresas como a sua a alcançar seu verdadeiro potencial na era digital."
                  />

                  <img
                        src={iconeOtimizado}
                        alt='Icone'
                        className='iconeOtimizado'
                  />

            </section>

      )
}


export default Otimizacao;