import React from 'react';
import Skills from './components/Skills'; // import your Skills component

export default function MainContent({ activeSection, setActiveSection, sections, expandedSkills, toggleSkillCard }) {
  const styles = {
    panel: { backgroundColor: '#111', padding: '20px', border: 'none', marginBottom: '20px' },
    rightCardContent: { fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' },
    backButton: { padding: '6px 12px', backgroundColor: '#ff2ec4', color: '#000', border: 'none', cursor: 'pointer', fontFamily: `'Press Start 2P', monospace`, marginBottom: '12px', alignSelf: 'flex-start' },
    sectionTitle: { fontSize: '22px', color: '#ff2ec4', marginBottom: '12px' },
  };

  if (!activeSection) {
    return (
      <div>
        <div style={styles.sectionTitle}>Home</div>
        <div style={styles.panel}>
          <div style={styles.rightCardContent}>
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
        <div style={styles.rightCardContent}>
          <button style={styles.backButton} onClick={() => setActiveSection(null)}>
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
