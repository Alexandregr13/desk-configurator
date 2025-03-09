import React from 'react';
import '../styles/MovableTableSelector.css';

function MovableTableSelector({ movableTable, onMovableTableChange }) {
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    onMovableTableChange({ included: checked });
  };

  const handlePositionChange = (position) => {
    onMovableTableChange({ position });
  };

  const handleMaterialChange = (e) => {
    onMovableTableChange({ material: e.target.value });
  };

  return (
    <div className="movable-table-selector">
      <div className="option-row">
        <label>
          <input
            type="checkbox"
            checked={movableTable.included}
            onChange={handleCheckboxChange}
          />
          Inclure une table amovible
        </label>
      </div>

      {movableTable.included && (
        <>
          <div className="option-row">
            <span>Position:</span>
            <div className="position-buttons">
              <button
                className={movableTable.position === 'top' ? 'selected' : ''}
                onClick={() => handlePositionChange('top')}
              >
                En haut
              </button>
              <button
                className={movableTable.position === 'bottom' ? 'selected' : ''}
                onClick={() => handlePositionChange('bottom')}
              >
                En bas
              </button>
            </div>
          </div>

          <div className="option-row">
            <label>
              Matériau:
              <select 
                value={movableTable.material} 
                onChange={handleMaterialChange}
              >
                <option value="wood">Bois</option>
                <option value="glass">Verre</option>
                <option value="metal">Métal</option>
              </select>
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default MovableTableSelector;
