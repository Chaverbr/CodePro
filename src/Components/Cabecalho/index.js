import React from 'react';
import "./Cabecalho.css";


const Cabecalho = () => {
      return (
            <header className='cabecalho'>

                  <h1 className='cabecalho-titulo'>CodePro</h1>

                  <ul className='cabecalho-nav'>
                        <li className='cabecalho-nav--item'>
                              Home
                        </li>

                        <li className='cabecalho-nav--item'>
                              Orçamento
                        </li>
                  </ul>

            </header>
      )
}


export default Cabecalho;