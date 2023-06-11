import React from 'react';
import "./Orcamento.css";
import Formulario from '../Formulario';
import OrcamentoTextos from '../OrcamentoTextos';


const Orcamento = () => {
      return (
            <section className='orcamentoContainer'>
                  <Formulario />

                  <OrcamentoTextos />
            </section>
      )
}


export default Orcamento;