import React from 'react';
import '../styles/ColorSelector.css';

function ColorSelector({ selectedColor, onColorChange }) {
  const colors = [
    { id: 'white', value: '#FFFFFF', name: 'Blanc' },
    { id: 'black', value: '#000000', name: 'Noir' },
    { id: 'brown', value: '#A52A2A', name: 'Marron' },
    { id: 'gray', value: '#808080', name: 'Gris' },
    { id: 'blue', value: '#0000FF', name: 'Bleu' },
    { id: 'red', value: '#FF0000', name: 'Rouge' }
  ];
  
  return (
    <div className="color-selector">
      {colors.map(color => (
        <div 
          key={color.id}
          className={`color-option ${selectedColor === color.value ? 'selected' : ''}`}
          style={{ backgroundColor: color.value }}
          onClick={() => onColorChange(color.value)}
          title={color.name}
        />
      ))}
    </div>
  );
}

export default ColorSelector;
