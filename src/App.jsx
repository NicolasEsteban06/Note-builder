import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ActionsGuide from './components/ActionsGuide';
import {
  clientActions,
  timeActions,
  providerTypes,
  internalActions,
  documentActions
} from './data/phrases';

function App() {
  const [currentFocus, setCurrentFocus] = useState('actionsCompleted');
  const [showGuide, setShowGuide] = useState(false);
  const [noteData, setNoteData] = useState({
    title1: '',
    title2: '',
    title3: '',
    clientId: '[Check]',
    actionsCompleted: '',
    nextSteps: '',
    timeAllocation: '',
    totalTime: ''
  });

  const updateNoteData = (field, value) => {
    setNoteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addToNote = (text) => {
    const currentText = noteData[currentFocus];
    let newText;

    if (currentText && !currentText.endsWith('\n') && !currentText.endsWith('. ') && !currentText.endsWith('.')) {
      newText = currentText + '. ' + text;
    } else {
      newText = currentText + text;
    }

    updateNoteData(currentFocus, newText);
  };

  const addQuickAction = (type) => {
    let promptText;
    let template;

    switch(type) {
      case 'phone':
        promptText = prompt('Who did you call?', 'client');
        if (promptText) template = `Writer called ${promptText}`;
        break;
      case 'email':
        promptText = prompt('Who did you email?', 'client');
        if (promptText) template = `Writer sent email to ${promptText}`;
        break;
      case 'research':
        promptText = prompt('What did you research?', 'housing options');
        if (promptText) template = `Writer conducted research on ${promptText}`;
        break;
      case 'meeting':
        promptText = prompt('Who did you meet with?', 'client');
        if (promptText) template = `Writer met with ${promptText}`;
        break;
    }

    if (template) {
      addToNote(template);
    }
  };

  return (
    <div className="container">
      <Header onOpenGuide={() => setShowGuide(true)} />

      <div className="main-layout">
        <Sidebar
          title="👤 Client Actions"
          sections={[
            { title: '👤 Client Actions', items: clientActions, type: 'client' },
            { title: '⏰ Time & Duration', items: timeActions, type: 'time' }
          ]}
          onPhraseClick={addToNote}
        />

        <MainContent
          noteData={noteData}
          onUpdateNoteData={updateNoteData}
          onFocusChange={setCurrentFocus}
          onQuickAction={addQuickAction}
        />

        <Sidebar
          title="🏢 Provider & Internal"
          sections={[
            { title: '🏢 Provider Actions', items: providerTypes, type: 'provider' },
            { title: '📋 Internal Actions', items: internalActions, type: 'internal' },
            { title: '📄 Documents', items: documentActions, type: 'document' }
          ]}
          onPhraseClick={addToNote}
        />
      </div>

      {showGuide && (
        <ActionsGuide
          onClose={() => setShowGuide(false)}
          onPhraseClick={addToNote}
        />
      )}
    </div>
  );
}

export default App;
