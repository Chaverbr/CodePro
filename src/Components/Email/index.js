import React from 'react';
import "./Email.css";
import Formulario from '../Formulario';
import EmailTextos from '../EmailTextos';


const Email = () => {
      return (
            <section className='emailContainer'>
                  <Formulario />

                  <EmailTextos />
            </section>
      )
}


export default Email;