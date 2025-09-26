import React, { useState } from 'react';
import './CardHover.css';

const educationList = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institute: 'Motilal Nehru National Institute of Technology, Allahabad',
    year: 'Jul 2019 - Jul 2023',
    cgpa: '7.26',
  },
  {
    degree: 'Class XII',
    institute: 'Victor Convent Higher Secondary School, Morena, Madhya Pradesh',
    year: 'May 2016 - Jun 2018',
    percentage: '87.6%',
  },
  {
    degree: 'Class X',
    institute: 'Victor Convent Higher Secondary School, Morena, Madhya Pradesh',
    year: 'May 2015 - Jun 2016',
    percentage: '93%',
  },
];

export default function Education() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {educationList.map((edu, idx) => (
        <div
          key={idx}
          className="card"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          style={{ padding: '16px', position: 'relative' }}
        >
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#fff' }}>
            {edu.degree}
            <div
              className="underline"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: hovered === idx ? '100%' : '0%',
                height: '3px',
                backgroundColor: '#0ff',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
              }}
            />
          </h4>
          <p style={{ margin: '6px 0', color: '#fff', fontSize: '14px' }}>{edu.institute}</p>
          <p style={{ margin: '0 0 6px 0', color: '#aaa', fontSize: '12px' }}>{edu.year}</p>
          {hovered === idx && (
            <p style={{ marginTop: '6px', fontSize: '14px', color: '#fff' }}>
              {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
