import React, { useState } from 'react';
import Configurator from './components/Configurator';
import DeskVisualizer from './components/DeskVisualizer';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import './styles/App.css';

function App() {
  const [configuration, setConfiguration] = useState({
    appearance: {
      color: '#A52A2A',
      texture: 'oak',
    },
    accessories: {
      mousePad: true,
      usbPorts: 4,
      wirelessCharger: true
    },
    movableTable: {
      included: true,
      position: 'top',
      material: 'glass'
    },
    deepWorkSafe: {
      included: true,
      lockType: 'digital',
      timerDuration: 60
    }
  });

  const handleConfigurationChange = (newConfig) => {
    setConfiguration(newConfig);
  };

  const saveConfiguration = () => {
    const configJSON = JSON.stringify(configuration, null, 2);
    const blob = new Blob([configJSON], { type: 'application/json' });
    saveAs(blob, 'desk-configuration.json');
  };

  const shareConfiguration = async () => {
    const canvas = document.getElementById('desk-visualizer-container');
    const snapshot = await html2canvas(canvas);
    
    const configStr = encodeURIComponent(JSON.stringify(configuration));
    const shareLink = `${window.location.origin}?config=${configStr}`;
    
    alert(`Partagez ce lien: ${shareLink}\n(Exemple simplifié qui nécessiterait un backend pour la production)`);
    
    snapshot.toBlob((blob) => {
      saveAs(blob, 'desk-preview.png');
    });
  };

  return (
    <div className="app">
      <header>
        <h1>Bureau Connecté - Configurateur</h1>
      </header>
      <main>
        <div className="configurator-panel">
          <Configurator 
            configuration={configuration} 
            onConfigurationChange={handleConfigurationChange} 
          />
          <div className="action-buttons">
            <button onClick={saveConfiguration}>Sauvegarder Configuration</button>
            <button onClick={shareConfiguration}>Partager</button>
          </div>
        </div>
        <div id="desk-visualizer-container" className="visualizer-panel">
          <DeskVisualizer configuration={configuration} />
        </div>
      </main>
      <footer>
        <p>© 2025 Bureau Connecté Configurateur</p>
      </footer>
    </div>
  );
}

export default App;

