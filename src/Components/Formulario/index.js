import React, { useState } from 'react';
import "./Formulario.css";
import emailjs from "@emailjs/browser";


const Formulario = () => {
      
      const [nome, setNome] = useState("");
      const [email, setEmail] = useState("");
      const [mensagem, setMensagem] = useState("");

      function sendEmail(e) {
            e.preventDefault();

            const templateParams = {
                  from_name: nome,
                  email: email,
                  message: mensagem
            }

            emailjs.send("service_40rng3m", "template_w52km6h", templateParams, "_ywwqJY2fld2ZhA2c")
            .then(() => {
                  setNome("");
                  setMensagem("");
                  setEmail("");
            }, (err) => {
                  console.log("Erro: ", err);
            })

      }
      
      
      return (
            <form className='formulario' onSubmit={sendEmail}>

                  <h2 className='formTitulo'>Contate-nos</h2>

                  <input
                        className='estiloInput'
                        placeholder='Nome Completo'
                        type='text'
                        required
                        autoComplete='on'
                        value={nome}
                        onChange={(e) => {
                              setNome(e.target.value)
                        }}
                  />

                  <input
                        className='estiloInput'
                        placeholder='Email'
                        type='email'
                        required
                        autoComplete='on'
                        value={email}
                        onChange={(e) => {
                              setEmail(e.target.value)
                        }}
                  />

                  <textarea
                        className='estiloTextArea'
                        placeholder='Sua Mensagem'
                        required
                        autoComplete='on'
                        value={mensagem}
                        onChange={(e) => {
                              setMensagem(e.target.value)
                        }}
                  />

                  <button className='formBotao'>
                        Enviar
                  </button>


            </form>
      )
}


export default Formulario;