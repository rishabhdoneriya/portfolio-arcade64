import React, { useState } from 'react';
import sections from './Sections';
import Snowflakes from './Snowflakes';
import Sidebar from './Sidebar';
import ScoreCard from './ScoreCard';
import MainContent from './MainContent';


export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState({});

  const toggleSkillCard = (category) => {
    setExpandedSkills(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const styles = {
    screen: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: `'Press Start 2P', monospace`,
      position: 'relative',
      overflow: 'hidden',
    },
    container: { display: 'grid', gridTemplateColumns: '450px 1.3fr', gap: '30px', width: '95%', maxWidth: '1250px', zIndex: 1 },
    main: { padding: '32px', backgroundColor: '#111', minHeight: '520px', position: 'relative' },
  };

  return (
    <div style={styles.screen}>
      
      <Snowflakes />
      <div style={styles.container}>
        
        <Sidebar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
        <main style={styles.main}>
          <MainContent
            activeSection={activeSection}
              setActiveSection={setActiveSection} 
            sections={sections}
            expandedSkills={expandedSkills}
            toggleSkillCard={toggleSkillCard}
          />
        </main>
      </div>
      <ScoreCard score="47/16/06 (16-13 win)" />
      <div
  style={{
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    color: '#fff',
    fontFamily: `'Press Start 2P', monospace`,
    fontSize: '12px',
    opacity: 0.9,
    pointerEvents: 'none', // makes it unclickable
    zIndex: 1000,
    textShadow: '0 0 4px #0ff, 0 0 8px #0ff',
  }}
>
  Created by Rishabh Doneriya
</div>
    </div>

    
  );
}
