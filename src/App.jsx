
import React, { useState } from 'react';
import './App.css'; // Archivo de estilos CSS
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import  Button from './components/Button';


const App = () => {
  const [mode, setMode] = useState('light');
  function handleModeChange(theme){
      setMode(theme);
  }

  return (
    <>
    <ThemeProvider>
        <section className={mode}>
          <div className='header'>
            <Button theme={mode} onClick={handleModeChange}/>
          </div>
          <div className='container'>
            <RoutesApp />
          </div>
        </section>
    </ThemeProvider>

  </>

  );
};

export default App;
