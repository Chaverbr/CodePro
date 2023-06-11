import React from 'react';
import Cabecalho from './Components/Cabecalho';
import Banner from "./Components/Banner";
import Design from './Components/Design';
import Otimizacao from "./Components/Otimizacao";
import Experiencia from './Components/Experiencia';
import Orcamento from './Components/Orcamento';
import Rodape from "./Components/Rodape";

function App() {
  return (
    <>
      <Cabecalho />

      <main>

        <Banner />
        <Design />
        <Otimizacao />
        <Experiencia />
        <Orcamento />

      </main>

      <Rodape />
    </>
  );
}

export default App;
