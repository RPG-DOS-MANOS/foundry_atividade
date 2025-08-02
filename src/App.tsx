import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoundryVTTViewer from './components/FoundryVTTViewer';

function App() {
  return (
    <div className="App">
      <FoundryVTTViewer foundryUrl="https://rpgdosmanos.com.br" />
    </div>
  );
}

export default App;
