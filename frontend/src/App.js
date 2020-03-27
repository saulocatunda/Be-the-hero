import React from 'react';
// JSX (JavaScript XML) = Quando HTML está dentro do arquivo JS
// Componente no HTML = função.
import './global.css';
import Routes from './routes';
// Sempre procura o index da pasta.
function App() {
  return (
      <Routes />
  );
}

export default App;
