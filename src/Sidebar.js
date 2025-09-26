import React, { useMemo } from 'react';
import './NavBar.css';

export default function Sidebar({ sections, activeSection, setActiveSection, isDropdownOpen, setIsDropdownOpen, isMobile }) {
  const sidebarStyle = {
    backgroundColor: '#0a0a0a',
    padding: isMobile ? '16px' : '32px',
    border: '4px solid rgba(255,255,255,0.08)',
    position: isMobile ? 'fixed' : 'static',
    top: isMobile ? 0 : 'auto',
    left: isMobile ? 0 : 'auto',
    right: isMobile ? 0 : 'auto',
    zIndex: isMobile ? 1000 : 'auto',
    width: isMobile ? '100%' : 'auto',
    height: isMobile ? (isDropdownOpen ? 'auto' : '0px') : 'auto',
    overflow: isMobile ? 'hidden' : 'visible',
    transition: isMobile ? 'height 0.3s ease' : 'none'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: isMobile ? 'pointer' : 'default'
  };

  const toggleButtonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #0ff',
    color: '#0ff',
    padding: '4px 8px',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: `'Press Start 2P', monospace`
  };

  const floatingToggleStyle = {
    position: 'fixed',
    top: '12px',
    left: '12px',
    zIndex: 1100,
    backgroundColor: '#111',
    color: '#0ff',
    border: '2px solid #0ff',
    borderRadius: '8px',
    padding: '8px 10px',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
    fontFamily: `'Press Start 2P', monospace`,
  };

  return (
    <>
      {isMobile && (
        <button
          aria-label="Toggle navigation"
          style={floatingToggleStyle}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? '×' : '≡'}
        </button>
      )}
      <aside id="nav-sidebar" style={sidebarStyle}>
        {isMobile && isDropdownOpen && (
          <div style={headerStyle}>
            <div>
              <div style={{ fontSize: isMobile ? '16px' : '20px', color: '#ff2ec4', marginBottom: isMobile ? '8px' : '12px' }}>Rishabh Doneriya</div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#0ff', marginBottom: isMobile ? '12px' : '18px' }}>PLAYER 1 • LIVES: 1</div>
            </div>
          </div>
        )}
        {!isMobile && (
          <div style={headerStyle}>
            <div>
              <div style={{ fontSize: isMobile ? '16px' : '20px', color: '#ff2ec4', marginBottom: isMobile ? '8px' : '12px' }}>Rishabh Doneriya</div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: '#0ff', marginBottom: isMobile ? '12px' : '18px' }}>PLAYER 1 • LIVES: 1</div>
            </div>
          </div>
        )}
        
        <nav style={{ display: isMobile && !isDropdownOpen ? 'none' : 'block' }}>
        {sections.map(section => (
          <div
            key={section.id}
            className={`navCard${activeSection === section.id ? ' active' : ''}`}
            onClick={() => {
              setActiveSection(section.id);
              const main = document.getElementById('main-content');
              if (main) {
                main.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <h4>{section.title}</h4>
          </div>
        ))}
        </nav>
        
        <div style={{ 
          fontSize: '10px', 
          color: 'rgba(255,255,255,0.3)', 
          marginTop: '8px',
          display: isMobile && !isDropdownOpen ? 'none' : 'block'
        }}>
          Portfolio • Dark Mode • Pixel-style UI
        </div>
      </aside>
    </>
  );
}
