import React from 'react';
import "./Experiencia.css";
import iconeExperiencia from "../../img/designExperiencia.jpg";
import TextosContainer from "../TextosContainer";

const Experiencia = () => {
      return (

            <section className='experienciaContainer'>

                  <img
                        src={iconeExperiencia}
                        alt='Icone'
                        className='iconeExperiencia'
                  />

                  <TextosContainer
                        titulo="A melhor Experiência aos Usuários"
                        subtitulo="Seu site uma navegação intuitiva que será a bússola para a exploração encantadora de seu conteúdo. Com menus meticulosamente organizados e categorias lógicas, seus visitantes encontrarão seu tesouro digital com facilidade e agilidade. A jornada será fluida, evitando qualquer obstáculo que possa comprometer a satisfação."
                  />

            </section>

      )
}


export default Experiencia;