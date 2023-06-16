import React from 'react';
import "./EmailTextos.css";
import iconePromocao from "../../img/iconePromocao.png";


const EmailTextos = () => {
      return (
            <div className='emailTextos'>
                  <h2 className='emailTitulo'>
                        Não perca Tempo!
                  </h2>

                  <h3 className='emailSubtitulo'>
                        Entre em contato conosco e garanta <span>15%</span> de <span>Desconto</span> no seu <span>Primeiro Orçamento</span>.
                  </h3>

                  <img
                        src={iconePromocao}
                        alt='Icone'
                        className='iconePromocao'
                  />
            </div>
      )
}

export default EmailTextos;