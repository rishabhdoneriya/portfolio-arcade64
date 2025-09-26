import React, { useState } from 'react';

const skillCategories = {
  General: ['Operating Systems', 'OOP', 'Data Structures & Algorithms', 'Computer Networks'],
  'Data Side': ['SQL', 'Azure Databricks', 'Oracle Cloud', 'Power Apps'],
  'Dev Side': ['Java', 'C', 'C++', 'Selenium', 'JMeter', 'GitHub', 'Shell Scripting'],
  'System Design': ['Low-Level Design', 'High-Level Design', 'Design Patterns', 'Design Principles']
};

export default function Skills({ expandedSkills, toggleSkillCard }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box'
  };

  const cardStyle = (isHovered) => ({
    backgroundColor: '#1a1a1a',
    border: '2px solid #0ff',
    borderRadius: '12px',
    padding: '16px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-4px)' : 'none',
    boxShadow: isHovered ? '0 0 12px #0ff, 0 0 24px #0ff' : '0 0 4px rgba(0,0,0,0.3)',
    overflow: 'hidden'
  });

  const underlineStyle = (isHovered) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: isHovered ? '100%' : '0%',
    height: '3px',
    backgroundColor: '#0ff',
    borderRadius: '2px',
    transition: 'width 0.3s ease'
  });

  const listStyle = {
    paddingLeft: '20px',
    marginTop: '12px',
    color: '#fff',
    fontSize: '14px',
    lineHeight: '1.5',
    listStyleType: 'circle'
  };

  const headerStyle = {
    color: '#0ff',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      {Object.entries(skillCategories).map(([category, skills]) => {
        const isHovered = hoveredCard === category;
        return (
          <div
            key={category}
            style={cardStyle(isHovered)}
            onClick={() => toggleSkillCard(category)}
            onMouseEnter={() => setHoveredCard(category)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h4 style={headerStyle}>
              {category}
              <span style={{ fontSize: '14px', color: '#0ff' }}>
                {expandedSkills[category] ? '-' : '+'}
              </span>
            </h4>
            <div style={underlineStyle(isHovered)} />
            {expandedSkills[category] && (
              <ul style={listStyle}>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
