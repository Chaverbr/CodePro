import React from 'react';
import "./Rodape.css";
import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const Rodape = () => {
      return (
            <footer className='rodapeContainer'>

                  <div className='contatos-titulo'>
                        <h1>
                              Contatos
                        </h1>
                  </div>

                  <div className='rodape-contatos'>

                        <div className='contatos'>

                              <h3>Telefone</h3>

                              <ul>
                                    <li>
                                          <RiWhatsappLine className='icon' />
                                          +55 (21) 98241-0516
                                    </li>

                                    <li>
                                          <RiWhatsappLine className='icon' />
                                          +55 (21) 96722-0868
                                    </li>
                              </ul>
                        </div>

                        <div className='redeSocial'>

                              <h3>Email</h3>

                              <ul>

                                    <li>
                                          <AiOutlineMail className='icon' />
                                          codepro@codepro.website
                                    </li>

                              </ul>
                        </div>

                  </div>

                  <h1 className='rodape-titulo'>
                        &copy; 2023 CodePro
                  </h1>
            </footer>
      )
}

export default Rodape;