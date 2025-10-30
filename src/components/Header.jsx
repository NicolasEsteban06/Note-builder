import './Header.css';

function Header({ onOpenGuide }) {
  return (
    <div className="header">
      <div>
        <h1>Support Coordination Notes Builder</h1>
        <p>Click phrases to build your note quickly and accurately</p>
      </div>
      <button className="guide-button" onClick={onOpenGuide}>
        📚 Actions Guide
      </button>
    </div>
  );
}

export default Header;
