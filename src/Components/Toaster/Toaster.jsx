import React from 'react';

function Toaster() {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>I AM TOASTER</h1>
      {/* Additional content or functionality can be added here */}
    </div>
  );
}

export default Toaster;
