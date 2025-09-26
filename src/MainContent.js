import React from 'react';
import Skills from './components/Skills'; // import your Skills component

export default function MainContent({ activeSection, setActiveSection, sections, expandedSkills, toggleSkillCard }) {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  const scrollToSidebar = () => {
    const el = document.getElementById('nav-sidebar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const styles = {
    panel: { backgroundColor: '#111', padding: isMobile ? '16px' : '20px', border: 'none', marginBottom: isMobile ? '16px' : '20px' },
    rightCardContent: { fontSize: isMobile ? '14px' : '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '20px', maxHeight: isMobile ? 'none' : 'calc(100vh - 150px)', overflowY: isMobile ? 'visible' : 'auto' },
    backButton: { padding: isMobile ? '6px 10px' : '6px 12px', backgroundColor: '#ff2ec4', color: '#000', border: 'none', cursor: 'pointer', fontFamily: `'Press Start 2P', monospace`, marginBottom: '12px', alignSelf: 'flex-start' },
    sectionTitle: { fontSize: isMobile ? '18px' : '22px', color: '#ff2ec4', marginBottom: '12px' },
  };

  if (!activeSection) {
    return (
      <div>
        <div style={styles.sectionTitle}>Home</div>
        <div style={styles.panel}>
          <div style={styles.rightCardContent} className="scrollarea">
            <p>Welcome to my 1980's Arcade neon-themed portfolio!</p>
            <p>Explore introduction, experience, projects, and skills.</p>
          </div>
        </div>
      </div>
    );
  }

  const sectionObj = sections.find(sec => sec.id === activeSection);

  if (!sectionObj) return null;

  return (
    <div>
      <div style={styles.sectionTitle}>{sectionObj.title}</div>
      <div style={styles.panel}>
        <div style={styles.rightCardContent} className="scrollarea">
          <button style={styles.backButton} onClick={() => { setActiveSection(null); scrollToSidebar(); }}>
            &larr; Back
          </button>
          {activeSection === 'skills' ? (
            <Skills expandedSkills={expandedSkills} toggleSkillCard={toggleSkillCard} />
          ) : (
            sectionObj.content
          )}
        </div>
      </div>
    </div>
  );
}
