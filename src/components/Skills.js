import React, { useState } from 'react';
import './CardHover.css'; // import the CSS

const skillCategories = {
  General: ['Operating Systems', 'OOP', 'Data Structures & Algorithms', 'Computer Networks'],
  'Data Side': ['SQL', 'Azure Databricks', 'Oracle Cloud', 'Power Apps'],
  'Dev Side': ['Java', 'C', 'C++', 'Selenium', 'JMeter', 'GitHub', 'Shell Scripting'],
  'System Design': ['Low-Level Design', 'High-Level Design', 'Design Patterns', 'Design Principles']
};

export default function Skills({ expandedSkills, toggleSkillCard }) {
  // eslint-disable-next-line no-unused-vars
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      {Object.entries(skillCategories).map(([category, skills]) => {
        return (
          <div
            key={category}
            className="card"
            onClick={() => toggleSkillCard(category)}
            onMouseEnter={() => setHoveredCard(category)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h4 className="header">
              {category}
              <span style={{ fontSize: '14px', color: '#0ff' }}>
                {expandedSkills[category] ? '-' : '+'}
              </span>
              <div className="underline" />
            </h4>
            {expandedSkills[category] && (
              <div
                style={{
                  marginTop: '10px',
                  borderRadius: '12px',
                  backgroundColor: '#111',
                  padding: '12px'
                }}
              >
                <ul className="skill-list">
                  {skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
