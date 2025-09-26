import React from 'react';
import './NavBar.css';

export default function Sidebar({ sections, activeSection, setActiveSection }) {
  return (
    <aside style={{ backgroundColor: '#0a0a0a', padding: '32px', border: '4px solid rgba(255,255,255,0.08)' }}>
      <div style={{ fontSize: '20px', color: '#ff2ec4', marginBottom: '12px' }}>Rishabh Doneriya</div>
      <div style={{ fontSize: '14px', color: '#0ff', marginBottom: '18px' }}>PLAYER 1 • LIVES: 1</div>
      <nav>
        {sections.map(section => (
          <div
            key={section.id}
            className="navCard"
            onClick={() => setActiveSection(section.id)}
          >
            <h4>{section.title}</h4>
          </div>
        ))}
      </nav>
      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>Portfolio • Dark Mode • Pixel-style UI</div>
    </aside>
  );
}
