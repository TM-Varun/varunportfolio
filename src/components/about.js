import React from 'react';

function About() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fdfdfd' }}>
      <h1 style={{ fontSize: '36px', color: '#1d3557', marginBottom: '10px', textAlign: 'center' }}>
        👨‍💻 About Me
      </h1>

      <h2 style={{ fontSize: '24px', color: '#457b9d', textAlign: 'center', marginBottom: '30px' }}>
        🚀 Building <strong style={{ color: '#e63946' }}>AI-Powered Solutions</strong>
      </h2>

      <p style={{ fontSize: '18px', color: '#333', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        I'm <strong style={{ color: '#1d3557' }}>Varun T M</strong>, a driven Computer Science Engineer with a passion for building intelligent systems. My mission is to use technology to solve real-world problems through smart software engineering.
      </p>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        <div style={cardStyle}>
          <h3>🔧 Modular Architecture</h3>
          <p>Designing scalable systems with clean, reusable components.</p>
        </div>
        <div style={cardStyle}>
          <h3>🤖 Intelligent Automation</h3>
          <p>Building ML pipelines to automate and enhance decision-making.</p>
        </div>
        <div style={cardStyle}>
          <h3>🚀 Performance Optimization</h3>
          <p>Creating high-performance software through efficient engineering practices.</p>
        </div>
      </div>

      <div style={{ marginTop: '50px', maxWidth: '900px', marginInline: 'auto' }}>
        <h2 style={{ color: '#1d3557' }}>💼 Core Expertise</h2>

        <Section title="🧠 AI/ML Engineering" items={[
          'Deep Learning (CNNs, RNNs, Transformers)',
          'Computer Vision & Object Detection',
          'NLP with LLMs & Prompt Engineering'
        ]} />

        <Section title="🎨 Frontend" items={[
          'React.js + Tailwind CSS',
          'Framer Motion, Three.js',
          'Responsive Design & Web Animation'
        ]} />

        <Section title="🛠️ Backend" items={[
          'Node.js, Express, Flask',
          'REST APIs, MongoDB, MySQL',
          'Git, Version Control & Deployment'
        ]} />
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#f1faff',
  padding: '20px',
  borderRadius: '12px',
  width: '80%',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  textAlign: 'center',
};

function Section({ title, items }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h4 style={{ fontSize: '20px', color: '#457b9d' }}>{title}</h4>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '6px' }}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
