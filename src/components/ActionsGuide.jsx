import { useState } from 'react';
import './ActionsGuide.css';
import { guideData, recoveryTools } from '../data/phrases';

function ActionsGuide({ onClose, onPhraseClick }) {
  const [activeRole, setActiveRole] = useState('sc');

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  const handlePhraseClick = (text) => {
    onPhraseClick(text);
    // Optionally close the modal after adding a phrase
    // onClose();
  };

  const renderCategory = (title, items) => (
    <div className="guide-category" key={title}>
      <h3>{title}</h3>
      {items.map(item => (
        <button
          key={item.label}
          className="guide-button-item"
          onClick={() => handlePhraseClick(item.text)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Professional Actions Guide</h2>
        <p>Based on NDIS Practice Standards and Recovery-Oriented Framework</p>

        <div className="role-tabs">
          <span
            className={`role-tab ${activeRole === 'sc' ? 'active' : ''}`}
            onClick={() => setActiveRole('sc')}
          >
            Support Coordinator
          </span>
          <span
            className={`role-tab ${activeRole === 'rc' ? 'active' : ''}`}
            onClick={() => setActiveRole('rc')}
          >
            Recovery Coach
          </span>
        </div>

        {activeRole === 'sc' && (
          <div className="role-content active">
            <div className="guide-grid">
              {renderCategory('🔗 Coordination & Service Navigation', guideData.supportCoordinator.coordination)}
              {renderCategory('💪 Capacity Building', guideData.supportCoordinator.capacityBuilding)}
              {renderCategory('🚨 Crisis Planning & Response', guideData.supportCoordinator.crisis)}
              {renderCategory('📢 Advocacy & Rights', guideData.supportCoordinator.advocacy)}
              {renderCategory('📊 Plan Management & Admin', guideData.supportCoordinator.planManagement)}
              {renderCategory('🤝 Stakeholder Liaison', guideData.supportCoordinator.stakeholder)}
            </div>
          </div>
        )}

        {activeRole === 'rc' && (
          <div className="role-content active">
            <div className="guide-grid">
              {renderCategory('🌟 Recovery Coaching', guideData.recoveryCoach.coaching)}
              {renderCategory('🧠 Mental Health Support', guideData.recoveryCoach.mentalHealth)}
              {renderCategory('🏥 Clinical Coordination', guideData.recoveryCoach.clinical)}
              {renderCategory('💡 Skill Development', guideData.recoveryCoach.skillDevelopment)}
              {renderCategory('🔄 Engagement & Motivation', guideData.recoveryCoach.engagement)}
              {renderCategory('👨‍👩‍👧 Family & Carer Support', guideData.recoveryCoach.family)}
            </div>

            <div className="tool-section">
              <h3>🛠️ Recovery Tools & Programs</h3>
              <div className="tool-buttons">
                {recoveryTools.map(tool => (
                  <button
                    key={tool.label}
                    className="tool-button"
                    onClick={() => handlePhraseClick(tool.text)}
                  >
                    {tool.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActionsGuide;
