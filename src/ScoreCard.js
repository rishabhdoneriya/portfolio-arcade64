import React, { useState } from 'react';
import csczImage from './img/csgo.jpeg'; // import the image

export default function ScoreCard({ score }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  return (
    <>
      {/* Score Card */}
      <div
        style={{
          position: 'fixed',
          bottom: isMobile ? '12px' : '20px',
          left: isMobile ? '12px' : '20px',
          backgroundColor: '#222',
          padding: isMobile ? '10px' : '16px',
          border: '4px solid #0ff',
          fontSize: isMobile ? '12px' : '14px',
          lineHeight: '1.6',
          cursor: 'pointer',
          zIndex: 900, // keep above content but below modal overlay
        }}
        onClick={openModal} // click to open image
      >
        <strong>Score</strong>: {score}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal} // click outside or on modal to close
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
            cursor: 'pointer',
          }}
        >
          <img
            src={csczImage}
            alt="CSCZ"
            style={{
              maxWidth: isMobile ? '95%' : '80%',
              maxHeight: isMobile ? '70%' : '80%',
              boxShadow: '0 0 20px #0ff',
              border: '4px solid #0ff',
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
          />
        </div>
      )}
    </>
  );
}
