import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoundryVTTViewer from './components/FoundryVTTViewer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Header/> */}
      <div className='rota'>
        <Routes>
          <Route path='/app/*' element={<FoundryVTTViewer foundryUrl="/" />} />
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
