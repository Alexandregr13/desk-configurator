import React from 'react';
import '../styles/AccessorySelector.css';

function AccessorySelector({ accessories, onAccessoryChange }) {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onAccessoryChange({ [name]: checked });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    onAccessoryChange({ [name]: parseInt(value) });
  };

  return (
    <div className="accessory-selector">
      <div className="accessory-option">
        <label>
          <input
            type="checkbox"
            name="mousePad"
            checked={accessories.mousePad}
            onChange={handleCheckboxChange}
          />
          Tapis de souris intégré
        </label>
      </div>

      <div className="accessory-option">
        <label>
          Ports USB:
          <select 
            name="usbPorts" 
            value={accessories.usbPorts} 
            onChange={handleSelectChange}
          >
            <option value="0">Aucun</option>
            <option value="2">2 ports</option>
            <option value="4">4 ports</option>
            <option value="6">6 ports</option>
          </select>
        </label>
      </div>

      <div className="accessory-option">
        <label>
          <input
            type="checkbox"
            name="wirelessCharger"
            checked={accessories.wirelessCharger}
            onChange={handleCheckboxChange}
          />
          Chargeur sans fil
        </label>
      </div>
    </div>
  );
}

export default AccessorySelector;
