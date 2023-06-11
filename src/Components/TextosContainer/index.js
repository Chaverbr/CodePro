import React from 'react';
import "./TextosContainer.css";

const TextosContainer = ({ titulo, subtitulo }) => {
      return (
            <div className='textosContainer'>
                  <h3 className='textos-titulo'>
                        {titulo}
                  </h3>
                  <h4 className='textos-subtitulo'>
                        {subtitulo}
                  </h4>
            </div>
      )
}


export default TextosContainer;