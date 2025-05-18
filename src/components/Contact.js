import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, I will contact you soon!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      padding: '50px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f1faff',
      minHeight: '100vh'
    }}>
      <h2 style={{
        fontSize: '36px',
        textAlign: 'center',
        color: '#1d3557',
        marginBottom: '20px'
      }}>📬 Contact Me</h2>

      <div style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '40px'
      }}>
        <p><strong>📞 Phone:</strong> +91-6380809306</p>
        <p><strong>📍 Location:</strong> Madurai, Tamil Nadu</p>
        <p><strong>✉️ Email:</strong> varuntmmdu@gmail.com</p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            style={inputStyle}
            placeholder="Your full name"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            style={inputStyle}
            placeholder="your@email.com"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            rows="4"
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="Type your message here..."
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            📤 Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
  color: '#1d3557',
  fontSize: '14px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
  boxSizing: 'border-box'
};

export default Contact;
