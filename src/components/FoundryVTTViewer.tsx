// src/components/FoundryVTTViewer.js
import React from 'react';

const FoundryVTTViewer = ({ foundryUrl }:any) => {
  if (!foundryUrl) {
    return <p>URL do Foundry VTT não configurada.</p>;
  }

  const iframeStyles = {
    width: '100%',
    height: '100vh', // Ocupa a altura inteira da tela
    border: 'none', // Remove a borda padrão
  };

  return (
    <div>
      <iframe
        src={foundryUrl}
        style={iframeStyles}
        title="Foundry VTT"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups" // Atributos de segurança
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
  );
};

export default FoundryVTTViewer;

// Para usar na sua aplicação principal:
// import FoundryVTTViewer from './components/FoundryVTTViewer';
// <FoundryVTTViewer foundryUrl="http://SEU_IP_NA_ORACLE:30000" />