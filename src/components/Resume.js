import React from 'react';
import './Resume.css'; // Make sure this contains the styling

const Resume = () => {
  return (
    <div className="resume-button-container">
      <a
        href="/Rishabh_Doneriya_MTS.pdf"
        download
        className="resume-button"
      >
        Resume
        <span className="underline"></span>
      </a>
    </div>
  );
};

export default Resume;
