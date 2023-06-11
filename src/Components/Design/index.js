import React from 'react';
import "./Design.css";
import TextosContainer from "../TextosContainer";
import iconeComuputador from "../../img/designComputer.jpg";


const Design = () => {
      return (
            <section className='designContainer'>

                  <img src={iconeComuputador} alt='Icone' className='iconeComputador'/>

                  <TextosContainer
                        titulo="Designs Intuitivos e Atrativos"
                        subtitulo="Nosso foco no equilíbrio perfeito entre estética e funcionalidade cria uma experiência cativante. Encante seus clientes com um design exepcional que os mantém engajados."
                  />

            </section>
      )
}

export default Design;