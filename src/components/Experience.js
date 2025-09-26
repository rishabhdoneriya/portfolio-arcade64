import React, { useState } from 'react';
import './CardHover.css';

const experiences = [
  {
    company: 'Oracle',
    role: 'Member Technical Staff',
    location: 'Bangalore, Karnataka',
    period: 'Oct 2024 -- Present',
    responsibilities: [
      'Designed and executed 20+ ORATST automation scripts and maintained 3 legacy test suites for Listener, CMAN, and Net Naming Adapters.',
      'Implemented new authentication tests for Net Naming Adapters using Oracle Cloud and Selenium, improving test coverage.',
      'Configured and administered Apache HTTP Server and forward proxies to support secure database connections.',
      'Developed shell scripts to automate database, server, and proxy operations, reducing manual effort.',
      'Enhanced automation for OCI Vault and Azure Key Vault, improving secret management and operational efficiency.',
      'Utilized Jenkins to automate and schedule test executions, while gaining hands-on exposure to JMeter for functional and performance validation of database workflows and proxy operations.',
    ],
    tech: ['ORATST', 'Oracle Cloud', 'Selenium', 'Apache', 'Shell', 'OCI Vault', 'Azure Key Vault', 'Jenkins', 'JMeter'],
  },
  {
    company: 'MAQ Software',
    role: 'Software Engineer I',
    location: 'Noida, Uttar Pradesh',
    period: 'Jul 2023 -- Feb 2024',
    responsibilities: [
      'Built a model-driven application using Power Apps, improving client-specific functionality.',
      'Optimized 20+ process flows to ensure efficient business operations.',
      'Authored documentation for 150+ enterprise data tables supporting business and engineering teams.',
      'Validated 10+ data tables for successful migration using Azure Databricks and SQL.',
    ],
    tech: ['Power Apps', 'Azure Databricks', 'SQL'],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);

  const toggleCard = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      {experiences.map((exp, idx) => {
        const isHovered = hovered === idx;
        const isExpanded = expanded === idx;

        return (
          <div
            key={idx}
            className="card"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => toggleCard(idx)}
            style={{
              padding: '16px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: isHovered
                ? '0 0 12px #0ff, 0 0 24px #0ff'
                : '0 0 6px rgba(0,255,255,0.4)',
              transform: isHovered ? 'translateY(-4px)' : 'none',
              backgroundColor: isExpanded ? '#111' : '#1a1a1a',
              borderRadius: '12px',
            }}
          >
            {/* Header */}
            <h4
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                color: '#fff',
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {exp.company} - {exp.role}
              <span style={{ fontSize: '16px', color: '#fff' }}>
                {isExpanded ? '-' : '+'}
              </span>
              <div
                className="underline"
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: isHovered ? '100%' : '0%',
                  height: '3px',
                  backgroundColor: '#0ff',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                }}
              />
            </h4>
            <p style={{ margin: '6px 0 12px 0', color: '#aaa', fontSize: '13px' }}>
              {exp.location} | {exp.period}
            </p>

            {/* Responsibilities */}
            {isExpanded && (
              <div style={{ paddingLeft: '13px' }}>
                <ul style={{ marginTop: '8px', paddingLeft: '18px', color: '#fff', fontSize: '15px', lineHeight: '1.7' }}>
                  {exp.responsibilities.map((res, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>
                      {res}
                    </li>
                  ))}
                </ul>

                {/* Tech stickers */}
                <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tech.map((tech, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#111',
                        borderRadius: '8px',
                        padding: '6px 10px',
                        fontSize: '13px',
                        color: '#0ff',
                        fontWeight: '600',
                        cursor: 'default',
                        boxShadow: '0 0 6px #0ff',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
