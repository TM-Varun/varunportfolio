import React from 'react';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Hi, I'm Varun T M</h1>
      <p>
        I'm a passionate Computer Science Engineer focused on building intelligent systems using AI & Machine Learning.
        I specialize in creating high-performance applications that solve real-world problems using modern tech stacks.
      </p>

   
      
      {/* Download Button */}
      <div style={{ marginTop: '20px' }}>
        <a href="/Varun_Resume.pdf" download="Varun_TM_Resume.pdf">
          <button
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              borderRadius: '6px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
