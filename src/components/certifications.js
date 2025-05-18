import React from 'react';

const cardStyle = {
  backgroundColor: '#f4f4ff',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '25px',
  transition: 'transform 0.3s',
};

const titleStyle = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '8px',
};

const platformStyle = {
  fontSize: '16px',
  color: '#007bff',
};

const dateStyle = {
  fontSize: '14px',
  color: '#555',
};

const linkStyle = {
  display: 'inline-block',
  marginTop: '10px',
  color: '#fff',
  backgroundColor: '#28a745',
  padding: '8px 15px',
  borderRadius: '8px',
  textDecoration: 'none',
};

function Certifications() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '30px', color: '#222' }}>
        🎓 My Certifications
      </h2>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Wipro Talent Next</h3>
        <p style={platformStyle}>Platform: Wipro</p>
        <p style={dateStyle}>Date: Oct 2024</p>
        <a
          href="/certificates/wiprotalent.pdf"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Java: Beginner to Master</h3>
        <p style={platformStyle}>Platform: Udemy</p>
        <p style={dateStyle}>Date: Oct 2022</p>
        <a
          href="/certificates/java-master.pdf"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Cloud Computing</h3>
        <p style={platformStyle}>Platform: NPTEL</p>
        <p style={dateStyle}>Date: July–Oct 2024</p>
        <a
          href="/certificates/nptel-cloud.jpg"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </div>
    </div>
  );
}

export default Certifications;
