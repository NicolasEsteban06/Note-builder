# Support Coordination Notes Builder

A modern React application designed for NDIS Support Coordinators and Recovery Coaches to quickly build professional case notes with pre-defined phrases and templates.

## Features

- **Quick Phrase Insertion**: Click buttons to add common professional phrases to your notes
- **Role-Specific Actions**: Comprehensive action library for both Support Coordinators and Recovery Coaches
- **Smart Formatting**: Automatically formats your notes with bullet points and proper structure
- **Professional Templates**: Based on NDIS Practice Standards and Recovery-Oriented Framework
- **One-Click Copy**: Generated notes are automatically copied to clipboard
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Tech Stack**: Built with React and Vite for optimal performance

## Tech Stack

- **React 18**: Modern UI library with hooks
- **Vite**: Lightning-fast build tool and dev server
- **CSS Modules**: Modular, component-scoped styling
- **Modern JavaScript**: ES6+ with module imports

## Project Structure

```
Note-builder/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── MainContent.jsx
│   │   ├── MainContent.css
│   │   ├── ActionsGuide.jsx
│   │   └── ActionsGuide.css
│   ├── data/              # Data and configuration
│   │   └── phrases.js     # All phrase templates
│   ├── styles/            # Global styles
│   │   └── index.css
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NicolasEsteban06/Note-builder.git
cd Note-builder
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Usage

### Building a Note

1. **Select Title Options**: Enter 3 title options for your note
2. **Enter Client ID**: Add the client identifier
3. **Add Actions**: Click phrase buttons from the sidebars to quickly build your note
   - Left sidebar: Client actions and time durations
   - Right sidebar: Provider actions, internal actions, and documents
4. **Quick Actions**: Use the quick action buttons for common tasks (phone calls, emails, research, meetings)
5. **Add Next Steps**: Describe follow-up actions required
6. **Time Allocation**: Break down time spent on different activities
7. **Generate**: Click "Generate Formatted Note" to create and copy your note

### Using the Actions Guide

Click the "📚 Actions Guide" button to access:
- **Support Coordinator Actions**:
  - Coordination & Service Navigation
  - Capacity Building
  - Crisis Planning & Response
  - Advocacy & Rights
  - Plan Management & Admin
  - Stakeholder Liaison

- **Recovery Coach Actions**:
  - Recovery Coaching
  - Mental Health Support
  - Clinical Coordination
  - Skill Development
  - Engagement & Motivation
  - Family & Carer Support
  - Recovery Tools & Programs

## Customization

### Adding New Phrases

Edit `src/data/phrases.js` to add new phrases to any category:

```javascript
export const clientActions = [
  { label: 'Button Label', text: 'Text to insert' },
  // Add your new phrases here
];
```

### Modifying Styles

Each component has its own CSS file for easy customization:
- Global styles: `src/styles/index.css`
- Component styles: `src/components/*.css`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

BSD 2-Clause License - see LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for NDIS Support Coordinators and Recovery Coaches
