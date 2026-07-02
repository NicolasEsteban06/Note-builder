import './Header.css';

function Header({ onOpenGuide, onOpenSettings }) {
  return (
    <div className="header">
      <div>
        <h1>Support Coordination Notes Builder</h1>
        <p>Click phrases to build your note quickly and accurately</p>
      </div>
      <div className="header-buttons">
        <button className="settings-button" onClick={onOpenSettings}>
          ⚙️ Settings
        </button>
        <button className="guide-button" onClick={onOpenGuide}>
          📚 Actions Guide
        </button>
      </div>
    </div>
  );
}

export default Header;
