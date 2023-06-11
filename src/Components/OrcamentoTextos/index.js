import React from 'react';
import "./OrcamentoTextos.css";
import iconePromocao from "../../img/iconePromocao.png";


const OrcamentoTextos = () => {
      return (
            <div className='orcamentoTextos'>
                  <h2 className='orcamentoTitulo'>
                        Não perca Tempo!
                  </h2>

                  <h3 className='orcamentoSubtitulo'>
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

export default OrcamentoTextos;