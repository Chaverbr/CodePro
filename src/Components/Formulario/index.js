import React from 'react';
import "./Formulario.css";


const Formulario = () => {
      return (
            <form className='formulario'>

                  <h2 className='formTitulo'>Contate-nos</h2>

                  <input
                        className='estiloInput'
                        placeholder='Nome Completo'
                        type='text'
                        required
                        autoComplete='on'
                  />

                  <input
                        className='estiloInput'
                        placeholder='Email'
                        type='email'
                        required
                        autoComplete='on'
                  />

                  <input
                        className='estiloInput'
                        placeholder='Assunto'
                        type='text'
                        autoComplete='on'
                  />

                  <textarea
                        className='estiloTextArea'
                        placeholder='Sua Mensagem'
                        required
                        autoComplete='on'
                  />

                  <button className='formBotao'>
                        Enviar
                  </button>


            </form>
      )
}


export default Formulario;