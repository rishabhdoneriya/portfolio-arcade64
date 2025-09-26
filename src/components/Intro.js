import React, { useState } from 'react';
import './CardHover.css';

export default function Intro() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    const resumeUrl = 'https://drive.google.com/file/d/19tMx-wO5oQLznZX9HtAd8G3ZWhx0_F3B/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Introduction Card */}
      <div
        className="card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
        style={{ position: 'relative' }} // make card relative for absolute button positioning
      >
        {/* Header */}
        <div className="header">
          <span>Introduction</span>
          <span style={{ color: '#0ff', fontSize: '16px' }}>{expanded ? '-' : '+'}</span>
          <div
            className="underline"
            style={{ width: hovered ? '100%' : '0%' }}
          />
        </div>

        {/* Expanded Content */}
        {expanded && (
          <div className="skill-list" style={{ paddingBottom: '50px', position: 'relative' }}>
            <p><b>Welcome, Digital Explorer</b></p>
            <p>
              Hey there, fellow traveler! I'm <b>Rishabh Doneriya</b>, a software engineer at Oracle with an insatiable curiosity for exploration—whether it's discovering new places or diving deep into complex codebases.
            </p>

            <p><b>My Philosophy</b></p>
            <p>
              I believe the most beautiful solutions emerge from breaking down complex problems into elegant simplicities. My passions revolve around optimization, crafting efficient systems, and building tools that push humanity forward, one line of code at a time.
            </p>

            <p><b>The Journey</b></p>
            <p>
              From Data Engineering to Oracle Net Test Development, each role has shaped my understanding that great technology isn't just about algorithms—it's about solving real human problems with purpose and precision.
            </p>

            <p>
              Let's see how far we can fly together.
            </p>

            {/* Neon-style stickers */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
              {['Software Engineer', 'Oracle', 'Curiosity', 'Exploration'].map((item) => (
                <div key={item} style={{
                  backgroundColor: '#111',
                  padding: '6px 10px',
                  color: '#0ff',
                  fontWeight: '600',
                  boxShadow: '0 0 6px #0ff',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}>{item}</div>
              ))}
            </div>

            {/* Download Button - bottom right inside expanded content */}
            <div
              className="download-button"
              onClick={handleDownload}
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                backgroundColor: '#111',
                border: '2px solid #ff6b35',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#ff6b35',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 0 8px rgba(255, 107, 53, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ff6b35';
                e.target.style.color = '#111';
                e.target.style.boxShadow = '0 0 15px rgba(255, 107, 53, 0.6)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#111';
                e.target.style.color = '#ff6b35';
                e.target.style.boxShadow = '0 0 8px rgba(255, 107, 53, 0.3)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span>📄</span>
              <span>Resume</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
