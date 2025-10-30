import { useState } from 'react';
import './Sidebar.css';

function Sidebar({ sections, onPhraseClick }) {
  const [expandedProviders, setExpandedProviders] = useState({});

  const toggleProvider = (type) => {
    setExpandedProviders(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const renderButton = (item, type) => {
    const baseClass = 'phrase-button';
    let className = baseClass;

    if (type === 'time') className += ' time-button';
    if (type === 'internal') className += ' action-button';
    if (item.type === 'simple') className += ' provider-type';

    return (
      <button
        key={item.label}
        className={className}
        onClick={() => onPhraseClick(item.text)}
      >
        {item.label}
      </button>
    );
  };

  const renderProviderItem = (item) => {
    if (item.type === 'simple') {
      return (
        <button
          key={item.label}
          className="phrase-button provider-type"
          onClick={() => onPhraseClick(item.text)}
        >
          {item.label}
        </button>
      );
    }

    const isExpanded = expandedProviders[item.type];

    return (
      <div key={item.type}>
        <button
          className="phrase-button provider-type"
          onClick={() => toggleProvider(item.type)}
        >
          {item.label}
        </button>
        {isExpanded && (
          <div className="sub-items">
            {item.actions.map(action => (
              <button
                key={action.label}
                className="phrase-button sub-phrase-button"
                onClick={() => onPhraseClick(action.text)}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="sidebar">
      {sections.map(section => (
        <div key={section.title} className="category-section">
          <div className="category-title">{section.title}</div>
          <div className="category-items">
            {section.type === 'provider'
              ? section.items.map(renderProviderItem)
              : section.items.map(item => renderButton(item, section.type))
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
