import React from 'react';

const projectCardStyle = {
  backgroundColor: '#f9f9f9',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  marginBottom: '30px',
  transition: 'transform 0.3s',
};

const headingStyle = {
  fontSize: '36px',
  color: '#333',
  textAlign: 'center',
  marginBottom: '10px',
};

const tagStyle = {
  display: 'inline-block',
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
  fontSize: '12px',
  marginBottom: '10px',
};

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  paddingLeft: 0,
  marginTop: '10px',
};

const liStyle = {
  backgroundColor: '#e0e0e0',
  borderRadius: '20px',
  padding: '6px 12px',
  marginRight: '10px',
  marginBottom: '10px',
  fontSize: '14px',
};

function Projects() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={headingStyle}>My Projects</h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px' }}>
        Innovative solutions bringing ideas to life
      </p>

      {/* Career Recommendation System */}
      <div style={projectCardStyle}>
        <span style={tagStyle}>✅ Live</span>
        <h3 style={{ color: '#222' }}>Career Recommendation System</h3>
        <p style={{ color: '#444' }}>
          AI-powered platform that analyzes user skills and preferences to suggest optimal career paths with personalized learning roadmaps.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Python</li>
          <li style={liStyle}>Machine Learning</li>
          <li style={liStyle}>NLP</li>
          <li style={liStyle}>Flask</li>
          <li style={liStyle}>React</li>
        </ul>
      </div>

      {/* Smart Waste Management */}
      <div style={projectCardStyle}>
        <span style={tagStyle}>✅ Live</span>
        <h3 style={{ color: '#222' }}>Smart Waste Management</h3>
        <p style={{ color: '#444' }}>
          IoT-enabled waste monitoring system that optimizes collection routes using sensor data and predictive analytics.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>IoT</li>
          <li style={liStyle}>Node.js</li>
          <li style={liStyle}>TensorFlow</li>
          <li style={liStyle}>MongoDB</li>
        </ul>
      </div>

      {/* AI Code Review Tool */}
      <div style={projectCardStyle}>
        <span style={tagStyle}>🛠️ In Progress</span>
        <h3 style={{ color: '#222' }}>AI Code Review Tool</h3>
        <p style={{ color: '#444' }}>
          AI-based tool that reviews code quality, flags potential bugs, and provides suggestions using LLMs.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>JavaScript</li>
          <li style={liStyle}>React</li>
          <li style={liStyle}>OpenAI API</li>
          <li style={liStyle}>Express</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
