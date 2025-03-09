import React from 'react';
import '../styles/SafeSelector.css';

function SafeSelector({ safeConfig, onSafeChange }) {
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    onSafeChange({ included: checked });
  };

  const handleLockTypeChange = (e) => {
    onSafeChange({ lockType: e.target.value });
  };

  const handleTimerChange = (e) => {
    onSafeChange({ timerDuration: parseInt(e.target.value) });
  };

  return (
    <div className="safe-selector">
      <div className="option-row">
        <label>
          <input
            type="checkbox"
            checked={safeConfig.included}
            onChange={handleCheckboxChange}
          />
          Inclure un coffre fort avec minuteur
        </label>
      </div>

      {safeConfig.included && (
        <>
          <div className="option-row">
            <label>
              Type de verrou:
              <select 
                value={safeConfig.lockType} 
                onChange={handleLockTypeChange}
              >
                <option value="digital">Digital (code)</option>
                <option value="biometric">Biométrique (empreinte)</option>
                <option value="key">Clé physique</option>
              </select>
            </label>
          </div>

          <div className="option-row">
            <label>
              Durée du minuteur (minutes):
              <select 
                value={safeConfig.timerDuration} 
                onChange={handleTimerChange}
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
                <option value="120">120 minutes</option>
              </select>
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default SafeSelector;
