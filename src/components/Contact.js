import React, { useState } from 'react';
import phoneImg from './stickers/phone.png';
import emailImg from './stickers/email.png';
import linkedinImg from './stickers/linkedin.png';
import githubImg from './stickers/github.png';
import copySticker from './stickers/copy.png'; // small sticker icon for copy
import './CardHover.css'; // your hover styles

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [hoverCopyIndex, setHoverCopyIndex] = useState(null);

  const contactData = [
    { type: 'Phone', value: '+91 88175 29511', copyValue: '+918817529511', link: 'tel:+918817529511', icon: phoneImg },
    { type: 'Email', value: 'rishabhdoneriya@gmail.com', copyValue: 'rishabhdoneriya@gmail.com', link: 'mailto:rishabhdoneriya@gmail.com', icon: emailImg },
    { type: 'LinkedIn', value: 'rishabh-doneriya', copyValue: 'https://linkedin.com/in/rishabh-doneriya-69b697ab/', link: 'https://linkedin.com/in/rishabh-doneriya-69b697ab/', icon: linkedinImg },
    { type: 'GitHub', value: 'rishabhdoneriya', copyValue: 'https://github.com/rishabhdoneriya', link: 'https://github.com/rishabhdoneriya', icon: githubImg },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {contactData.map((contact, index) => {
        const isHovered = hoveredCard === index;
        const showTooltip = copiedIndex === index || hoverCopyIndex === index;

        return (
          <div
            key={index}
            className="card-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '12px',
              border: '2px solid #0ff',
              boxShadow: isHovered ? '0 0 12px #0ff, 0 0 24px #0ff' : '0 0 4px rgba(0,0,0,0.3)',
              transform: isHovered ? 'translateY(-4px)' : 'none',
              transition: 'all 0.3s ease',
              backgroundColor: '#1a1a1a',
              position: 'relative',
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => window.open(contact.link, '_blank')}
          >
            {/* Copy Sticker */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard(contact.copyValue, index);
              }}
              onMouseEnter={() => setHoverCopyIndex(index)}
              onMouseLeave={() => setHoverCopyIndex(null)}
            >
              <img src={copySticker} alt="copy" style={{ width: '100%', height: '100%' }} />
              {showTooltip && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-22px',
                    right: '-10px',
                    backgroundColor: '#0ff',
                    color: '#000',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy'}
                </span>
              )}
            </div>

            {/* Icon */}
            <img src={contact.icon} alt={contact.type} style={{ width: '32px', height: '32px' }} />

            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <h4 style={{ color: '#0ff', margin: 0, position: 'relative' }}>
                {contact.type}
                <div
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
              <span style={{ color: '#fff', fontSize: '14px' }}>{contact.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
