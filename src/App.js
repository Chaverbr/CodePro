import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cabecalho from './Components/Cabecalho';
import Rodape from "./Components/Rodape";
import Inicio from './Pages/Inicio';
import PaginaOrcamento from "./Pages/PaginaOrcamento";

function App() {
  return (
    <>

      <BrowserRouter>

        <Cabecalho />

        <Routes>

          <Route path='/' element={<Inicio />} />
          <Route path='/orcamento' element={<PaginaOrcamento />} />

        </Routes>

        <Rodape />

      </BrowserRouter>


    </>
  );
}

export default App;
