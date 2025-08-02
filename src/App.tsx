import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoundryVTTViewer from './components/FoundryVTTViewer';

function App() {
  return (
    <div className="App">
      <FoundryVTTViewer foundryUrl="/" />
    </div>
  );
}

export default App;
