import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage    from './pages/LoginPage';

const App = () => {
  const [mode, setMode] = useState('register'); 

  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <button onClick={() => setMode('register')}>
          Ir a Registro
        </button>
        <button onClick={() => setMode('login')} style={{ marginLeft: '1rem' }}>
          Ir a Login
        </button>
      </div>

      {mode === 'register' && <RegisterPage />}
      {mode === 'login'    && <LoginPage />}

      <Footer />
    </div>
  );
};

export default App;
