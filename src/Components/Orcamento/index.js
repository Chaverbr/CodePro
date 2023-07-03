import React from 'react';
import "./Orcamento.css";
import styled from 'styled-components';

const Titulo = styled.h1`
      font-size: 2.4rem;
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      text-shadow: 3px 3px 3px #202020;
`

const Subtitulo = styled.h3`
      width: 500px;
      font-size: 1.2rem;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      text-shadow: 3px 3px 4px #202020;
`

const Formulario = styled.form`
      width: 40%;
      height: 60%;
      padding: 32px;

      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;

      background-color: #f7f7f7;
      border: none;
      border-radius: 12px;
`

const FormularioTitulo = styled.h2`
      font-family: "Open Sans", sans-serif;
      font-size: 1.75rem;
      font-weight: 400;

      color: #0D59FF;
`

const InputContainer = styled.div`
      width: 50%;
      height: 80px;

      display: flex;
      justify-content: center;
`

const StyledSelect = styled.select`
      width: 400px;
      height: 40px;
      padding: 4px 8px;
      box-shadow: 2px 3px 7px #202020;
      border: 1px solid #0D59FF;
      border-radius: 5px;
      color: #000;
`

const StyledInput = styled.input`
      width: 400px;
      height: 40px;
      padding: 4px 8px;
      box-shadow: 2px 3px 7px #202020;
      border: 1px solid #0D59FF;
      border-radius: 5px;
      color: #000;

      &::placeholder {
            color: #000;
      }
`

const InputBotao = styled.input`
      width: 200px;
      height: 30px;
      padding: 4px;
      box-shadow: 2px 3px 7px #202020;
      border: none;
      border-radius: 5px;
      background-color: #0D59FF;
      color: #F7F7F7;
      font-family: "Ubuntu", sans-serif;
`

const Orcamento = () => {
      return (
            <section className='orcamento'>
                  <div className='backgroundBanner'>
                        <div className='orcamentoBanner'>

                              <div>
                                    <Titulo>Descubra o poder do seu investimento</Titulo>
                                    <Subtitulo>Não perca mais Tempo. Faça seu Orçamento e Impulsione seu Sucesso.</Subtitulo>
                              </div>


                              <Formulario>

                                    <FormularioTitulo>Orçamento</FormularioTitulo>

                                    <div>
                                          <InputContainer>
                                                <StyledInput
                                                      placeholder='Digite Seu Nome'
                                                      type='text'
                                                      id='nome'
                                                      required
                                                />
                                          </InputContainer>

                                          <InputContainer>
                                                <StyledInput
                                                      placeholder='Digite Seu Telefone'
                                                      type='number'
                                                      id='tel'
                                                      required
                                                />
                                          </InputContainer>

                                          <InputContainer>
                                                <StyledInput
                                                      placeholder='Digite Seu Email'
                                                      type='email'
                                                      id="email"
                                                      required
                                                />
                                          </InputContainer>

                                          <InputContainer>
                                                <StyledSelect id="servico">
                                                      <option>Escolha seu Serviço</option>
                                                      <option></option>
                                                </StyledSelect>
                                          </InputContainer>

                                          <InputContainer>
                                          
                                                <InputBotao
                                                      type='submit'
                                                      value="Calcular"
                                                />

                                          </InputContainer>
                                    </div>

                              </Formulario>

                        </div>
                  </div>
            </section>
      )
}

export default Orcamento;