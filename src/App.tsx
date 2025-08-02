import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoundryVTTViewer from './components/FoundryVTTViewer';

function App() {
  return (
    <div className="App">
      <FoundryVTTViewer foundryUrl="http://rpgdosmanos.com.br" />
    </div>
  );
}

export default App;
