import { useState } from 'react';
import './Settings.css';

function Settings({ settings, onUpdateSettings, onClose }) {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleToggle = (key) => {
    const updated = { ...localSettings, [key]: !localSettings[key] };
    setLocalSettings(updated);
    onUpdateSettings(updated);
  };

  const handleSliderChange = (key, value) => {
    const updated = { ...localSettings, [key]: parseFloat(value) };
    setLocalSettings(updated);
    onUpdateSettings(updated);
  };

  const handleSizeChange = (size) => {
    const updated = { ...localSettings, illustrationSize: size };
    setLocalSettings(updated);
    onUpdateSettings(updated);
  };

  return (
    <div className="settings-modal" onClick={onClose}>
      <div className="settings-content" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>⚙️ Settings</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>

        <div className="settings-section">
          <h3>🎨 Illustrations</h3>

          <div className="setting-item">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={localSettings.showIllustrations}
                onChange={() => handleToggle('showIllustrations')}
              />
              <span className="toggle-text">Show Illustrations</span>
            </label>
          </div>

          {localSettings.showIllustrations && (
            <>
              <div className="setting-item">
                <label>Opacity: {Math.round(localSettings.illustrationOpacity * 100)}%</label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={localSettings.illustrationOpacity}
                  onChange={(e) => handleSliderChange('illustrationOpacity', e.target.value)}
                  className="slider"
                />
              </div>

              <div className="setting-item">
                <label>Size</label>
                <div className="size-buttons">
                  <button
                    className={`size-btn ${localSettings.illustrationSize === 'small' ? 'active' : ''}`}
                    onClick={() => handleSizeChange('small')}
                  >
                    Small
                  </button>
                  <button
                    className={`size-btn ${localSettings.illustrationSize === 'medium' ? 'active' : ''}`}
                    onClick={() => handleSizeChange('medium')}
                  >
                    Medium
                  </button>
                  <button
                    className={`size-btn ${localSettings.illustrationSize === 'large' ? 'active' : ''}`}
                    onClick={() => handleSizeChange('large')}
                  >
                    Large
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="settings-footer">
          <p className="settings-note">
            💡 Add your digital art images to <code>src/assets/illustrations/</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
