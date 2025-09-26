import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'introduction', title: 'Introduction', content: 'This section presents a detailed overview of who I am, my background, and my career goals. You can include fun facts or a brief personal story here.' },
  { id: 'experience', title: 'Experience', content: 'In this section, you will see a detailed record of my professional experience including roles, responsibilities, and major achievements at previous organizations.' },
  { id: 'projects', title: 'Projects', content: 'This section showcases my notable projects with descriptions, technologies used, and highlights. Each project can have a clickable link or demo if available.' },
  { id: 'skills', title: 'Skills', content: 'Skills section is divided into General, Data Side, Dev Side, and System Design. Each category is displayed in expandable cards with relevant tools, competencies, and design principles from my LaTeX resume.' }
];

function Snowflakes() {
  useEffect(() => {
    if (document.getElementById('snow-container')) return;
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '0';
    document.body.appendChild(snowContainer);

    const snowflakes = [];
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      const size = Math.random() * 4 + 2;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.backgroundColor = 'white';
      snowflake.style.borderRadius = '50%';
      snowflake.style.position = 'absolute';
      snowflake.style.top = '-10px';
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.opacity = Math.random();
      snowflake.style.filter = 'blur(1px)';
      snowflake.style.animation = `fall ${5 + Math.random() * 5}s linear forwards`;
      snowContainer.appendChild(snowflake);
      snowflakes.push(snowflake);
      setTimeout(() => { snowflake.remove(); }, 10000);
    };

    const interval = setInterval(createSnowflake, 150);
    const styleTag = document.createElement('style');
    styleTag.id = 'snow-style';
    styleTag.innerHTML = `
      @keyframes fall { 0% { transform: translateY(0); } 100% { transform: translateY(${window.innerHeight}px); } }
      ::-webkit-scrollbar { width: 10px; }
      ::-webkit-scrollbar-track { background: #111; }
      ::-webkit-scrollbar-thumb { background: #0ff; border-radius: 5px; }
    `;
    document.head.appendChild(styleTag);

    return () => { clearInterval(interval); snowflakes.forEach(sf => sf.remove()); snowContainer.remove(); styleTag.remove(); };
  }, []);

  return null;
}

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState({});

  const styles = {
    screen: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#000', color: '#fff', fontFamily: `'Press Start 2P', monospace`, position: 'relative', overflow: 'hidden' },
    container: { display: 'grid', gridTemplateColumns: '450px 1.3fr', gap: '30px', width: '95%', maxWidth: '1250px', zIndex: 1, position: 'relative' },
    sidebar: { backgroundColor: '#0a0a0a', padding: '32px', border: '4px solid rgba(255,255,255,0.08)' },
    navLink: { display: 'block', padding: '16px', textDecoration: 'none', color: '#fff', marginBottom: '10px', backgroundColor: 'rgba(255,255,255,0.05)', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s ease' },
    main: { padding: '32px', backgroundColor: '#111', minHeight: '520px', position: 'relative', overflowY: 'auto' },
    panel: { backgroundColor: '#111', padding: '20px', border: 'none', marginBottom: '20px' },
    rightCardContent: { fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '20px' },
    skillCard: { backgroundColor: '#222', padding: '16px', margin: '12px 0 16px 0', transition: 'all 0.3s ease', cursor: 'pointer' },
    skillCardHover: { transform: 'translateY(-6px)', boxShadow: '0 0 12px #0ff, 0 0 24px #0ff' },
    scoreCard: { position: 'fixed', bottom: '14px', left: '14px', backgroundColor: '#222', padding: '16px', border: '4px solid #0ff', fontSize: '14px', lineHeight: '1.6', zIndex: 2 }
  };

  const skillCategories = {
    General: ['Operating Systems', 'OOP', 'Data Structures & Algorithms', 'Computer Networks'],
    'Data Side': ['SQL', 'Azure Databricks', 'Oracle Cloud', 'Power Apps'],
    'Dev Side': ['Java', 'C', 'C++', 'Selenium', 'JMeter', 'GitHub', 'Shell Scripting'],
    'System Design': ['Low-Level Design', 'High-Level Design', 'Design Patterns', 'Design Principles']
  };

  const toggleSkillCard = (category) => {
    setExpandedSkills(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const renderSkillsContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: '450px', paddingRight: '4px', paddingLeft: '4px' }}>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} style={styles.skillCard} onClick={() => toggleSkillCard(category)} onMouseEnter={e => Object.assign(e.currentTarget.style, styles.skillCardHover)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: 'none', boxShadow: 'none' })}>
          <h4 style={{ color: '#0ff', marginBottom: '10px' }}>{category}</h4>
          <hr style={{ border: '1px solid #0ff', marginBottom: '10px' }} />
          {expandedSkills[category] && <ul style={{ paddingLeft: '16px', marginTop: '10px' }}>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>}
        </div>
      ))}
    </div>
  );

  const rightCardDefaultContent = (
    <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
      <p>Welcome to my neon-themed portfolio!</p>
      <p>Explore introduction, experience, projects, and skills.</p>
    </div>
  );

  const activeContent = activeSection === 'skills' ? renderSkillsContent() : sections.find(sec => sec.id === activeSection)?.content;

  return (
    <div style={styles.screen}>
      <Snowflakes />
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <div style={{ fontSize: '20px', color: '#ff2ec4', marginBottom: '12px' }}>Rishabh Doneriya</div>
          <div style={{ fontSize: '14px', color: '#0ff', marginBottom: '18px'}}>PLAYER 1 • LIVES: 3</div>
          <nav>
            {sections.map(section => (
              <div key={section.id} style={styles.navLink} onClick={() => setActiveSection(section.id)}>{section.title}</div>
            ))}
          </nav>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>Template • Dark Mode • Pixel-style UI</div>
        </aside>
        <main style={styles.main}>
          <div style={{ fontSize: '26px', color: '#ff2ec4', marginBottom: '12px' }}>{activeSection ? sections.find(sec => sec.id === activeSection).title : 'Home'}</div>
          <div style={styles.panel}>
            <div style={styles.rightCardContent}>{activeSection ? activeContent : rightCardDefaultContent}</div>
          </div>
        </main>
      </div>
      <div style={styles.scoreCard}>
        <strong>Score</strong>: 47/16/06 (16-13 win)
      </div>
    </div>
  );
}
