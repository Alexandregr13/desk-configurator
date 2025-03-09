import React from 'react';
import '../styles/TextureSelector.css';

function TextureSelector({ selectedTexture, onTextureChange }) {
  const textures = [
    { id: 'oak', name: 'Chêne' },
    { id: 'walnut', name: 'Noyer' },
    { id: 'maple', name: 'Érable' },
    { id: 'glass', name: 'Verre' },
    { id: 'metal', name: 'Métal' }
  ];
  
  return (
    <div className="texture-selector">
      {textures.map(texture => (
        <div 
          key={texture.id}
          className={`texture-option ${selectedTexture === texture.id ? 'selected' : ''}`}
          onClick={() => onTextureChange(texture.id)}
        >
          <div className={`texture-preview ${texture.id}-texture`}></div>
          <span>{texture.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TextureSelector;
