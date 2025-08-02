// src/App.tsx
import React, { useEffect, useState } from 'react';
// CORREÇÃO: Removemos a importação do AuthenticateResponse que não existe.
import { DiscordSDK } from '@discord/embedded-app-sdk';
import FoundryVTTViewer from './components/FoundryVTTViewer';
import './App.css';

const discordSdk = new DiscordSDK("1401308823200993390");

// CORREÇÃO: Inferimos o tipo de autenticação a partir da própria função do SDK.
type AuthObject = Awaited<ReturnType<typeof discordSdk.commands.authenticate>>;

function App() {
  // Usamos o novo tipo AuthObject que acabámos de criar.
  const [auth, setAuth] = useState<AuthObject | null>(null);

  useEffect(() => {
    async function setupDiscordSdk() {
      // ... o resto do seu código useEffect continua igual ...
      try {
        await discordSdk.ready();

        const { code } = await discordSdk.commands.authorize({
          client_id: discordSdk.clientId,
          response_type: 'code',
          state: '',
          prompt: 'none',
          scope: ['identify', 'guilds'],
        });
        
        const response = await fetch('/api/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });
        const { access_token } = await response.json();

        const authData = await discordSdk.commands.authenticate({
          access_token,
        });

        setAuth(authData);

      } catch (error) {
        console.error("Erro ao configurar o SDK do Discord:", error);
        setAuth(null);
      }
    }

    setupDiscordSdk();
  }, []);

  // O resto do seu componente JSX continua igual...
  return (
    <div className="App">
      <h1>Minha Atividade do Discord</h1>
      {auth ? (
        <div>
          <p>Bem-vindo, {auth.user.username}!</p>
          <img
            src={`https://cdn.discordapp.com/avatars/${auth.user.id}/${auth.user.avatar}.png`}
            alt="Avatar"
            style={{ borderRadius: '50%' }}
          />
        </div>
      ) : (
        <p>Carregando no Discord ou a ser acedido diretamente...</p>
      )}
      <hr />
      <h1>FUNCIONANDO</h1>
      {
      //<FoundryVTTViewer foundryUrl="/" />
      }
    </div>
  );
}

export default App;