import React from 'react';
import ColorSelector from './ColorSelector';
import TextureSelector from './TextureSelector';
import AccessorySelector from './AccessorySelector';
import MovableTableSelector from './MovableTableSelector';
import SafeSelector from './SafeSelector';
import '../styles/Configurator.css';

function Configurator({ configuration, onConfigurationChange }) {
  const handleColorChange = (color) => {
    const newConfig = {
      ...configuration,
      appearance: {
        ...configuration.appearance,
        color
      }
    };
    onConfigurationChange(newConfig);
  };

  const handleTextureChange = (texture) => {
    const newConfig = {
      ...configuration,
      appearance: {
        ...configuration.appearance,
        texture
      }
    };
    onConfigurationChange(newConfig);
  };

  const handleAccessoryChange = (accessoryChanges) => {
    const newConfig = {
      ...configuration,
      accessories: {
        ...configuration.accessories,
        ...accessoryChanges
      }
    };
    onConfigurationChange(newConfig);
  };

  const handleMovableTableChange = (tableChanges) => {
    const newConfig = {
      ...configuration,
      movableTable: {
        ...configuration.movableTable,
        ...tableChanges
      }
    };
    onConfigurationChange(newConfig);
  };

  const handleSafeChange = (safeChanges) => {
    const newConfig = {
      ...configuration,
      deepWorkSafe: {
        ...configuration.deepWorkSafe,
        ...safeChanges
      }
    };
    onConfigurationChange(newConfig);
  };

  return (
    <div className="configurator">
      <section className="config-section">
        <h2>Apparence</h2>
        <div className="option-group">
          <h3>Couleur</h3>
          <ColorSelector 
            selectedColor={configuration.appearance.color} 
            onColorChange={handleColorChange} 
          />
        </div>
        <div className="option-group">
          <h3>Texture</h3>
          <TextureSelector 
            selectedTexture={configuration.appearance.texture} 
            onTextureChange={handleTextureChange} 
          />
        </div>
      </section>

      <section className="config-section">
        <h2>Accessoires</h2>
        <AccessorySelector 
          accessories={configuration.accessories}
          onAccessoryChange={handleAccessoryChange}
        />
      </section>

      <section className="config-section">
        <h2>Table Amovible</h2>
        <MovableTableSelector 
          movableTable={configuration.movableTable}
          onMovableTableChange={handleMovableTableChange}
        />
      </section>

      <section className="config-section">
        <h2>Coffre Fort Deep Work</h2>
        <SafeSelector 
          safeConfig={configuration.deepWorkSafe}
          onSafeChange={handleSafeChange}
        />
      </section>
    </div>
  );
}

export default Configurator;
