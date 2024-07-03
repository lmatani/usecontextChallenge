
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
        <div className={mode}>
          <Button theme={mode} onClick={handleModeChange}/>
          <RoutesApp />
        </div>
    </ThemeProvider>

  </>

  );
};

export default App;
