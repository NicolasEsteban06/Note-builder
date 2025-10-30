import { useState } from 'react';
import './MainContent.css';

function MainContent({ noteData, onUpdateNoteData, onFocusChange, onQuickAction }) {
  const [showOutput, setShowOutput] = useState(false);
  const [generatedNote, setGeneratedNote] = useState('');

  const handleFocus = (fieldName) => {
    if (['actionsCompleted', 'nextSteps', 'timeAllocation'].includes(fieldName)) {
      onFocusChange(fieldName);
    }
  };

  const formatAsBulletPoints = (text) => {
    return text
      .split('. ')
      .filter(item => item.trim())
      .map(item => `• ${item.trim()}${item.endsWith('.') ? '' : '.'}`)
      .join('\n');
  };

  const formatTimeAllocation = (text) => {
    return text
      .split('\n')
      .filter(item => item.trim())
      .map(item => `• ${item.trim()}`)
      .join('\n');
  };

  const generateNote = () => {
    const formattedActions = formatAsBulletPoints(noteData.actionsCompleted);
    const formattedNextSteps = formatAsBulletPoints(noteData.nextSteps);
    const formattedTimeAllocation = formatTimeAllocation(noteData.timeAllocation);

    const note = `**Title Options**
${noteData.title1}
${noteData.title2}
${noteData.title3}

**Client ID:** ${noteData.clientId}

**Actions Completed**
${formattedActions}

**Next Steps & Follow-Up**
${formattedNextSteps}

**Time Allocation Summary**
${formattedTimeAllocation}

**Total Time Spent:** ${noteData.totalTime}`;

    setGeneratedNote(note);
    setShowOutput(true);

    // Copy to clipboard
    navigator.clipboard.writeText(note).then(() => {
      alert('Note copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className="main-content">
      <div className="quick-actions">
        <button className="quick-action-btn" onClick={() => onQuickAction('phone')}>
          📞 Add Phone Call
        </button>
        <button className="quick-action-btn" onClick={() => onQuickAction('email')}>
          📧 Add Email
        </button>
        <button className="quick-action-btn" onClick={() => onQuickAction('research')}>
          🔍 Add Research
        </button>
        <button className="quick-action-btn" onClick={() => onQuickAction('meeting')}>
          👥 Add Meeting
        </button>
      </div>

      <div className="note-section">
        <label>Title Options (3 required)</label>
        <input
          type="text"
          className="title-option"
          placeholder="Title option 1"
          value={noteData.title1}
          onChange={(e) => onUpdateNoteData('title1', e.target.value)}
        />
        <input
          type="text"
          className="title-option"
          placeholder="Title option 2"
          value={noteData.title2}
          onChange={(e) => onUpdateNoteData('title2', e.target.value)}
        />
        <input
          type="text"
          className="title-option"
          placeholder="Title option 3"
          value={noteData.title3}
          onChange={(e) => onUpdateNoteData('title3', e.target.value)}
        />
      </div>

      <div className="note-section">
        <label>Client ID</label>
        <input
          type="text"
          value={noteData.clientId}
          onChange={(e) => onUpdateNoteData('clientId', e.target.value)}
        />
      </div>

      <div className="note-section">
        <label>Actions Completed</label>
        <textarea
          placeholder="Click buttons to add actions or type directly..."
          value={noteData.actionsCompleted}
          onChange={(e) => onUpdateNoteData('actionsCompleted', e.target.value)}
          onFocus={() => handleFocus('actionsCompleted')}
        />
      </div>

      <div className="note-section">
        <label>Next Steps & Follow-Up</label>
        <textarea
          placeholder="What needs to happen next..."
          value={noteData.nextSteps}
          onChange={(e) => onUpdateNoteData('nextSteps', e.target.value)}
          onFocus={() => handleFocus('nextSteps')}
        />
      </div>

      <div className="note-section">
        <label>Time Allocation Summary</label>
        <textarea
          placeholder="Break down time spent on different activities..."
          value={noteData.timeAllocation}
          onChange={(e) => onUpdateNoteData('timeAllocation', e.target.value)}
          onFocus={() => handleFocus('timeAllocation')}
        />
      </div>

      <div className="note-section">
        <label>Total Time Spent</label>
        <input
          type="text"
          placeholder="e.g., 2 hours 30 minutes"
          value={noteData.totalTime}
          onChange={(e) => onUpdateNoteData('totalTime', e.target.value)}
        />
      </div>

      <button className="generate-btn" onClick={generateNote}>
        Generate Formatted Note
      </button>

      {showOutput && (
        <div className="output-section">
          {generatedNote}
        </div>
      )}
    </div>
  );
}

export default MainContent;
