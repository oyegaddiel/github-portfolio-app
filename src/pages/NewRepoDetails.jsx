import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NewRepoDetails = () => {
  const location = useLocation();
  const { repoDetails } = location.state;

  const handleDelete = () => {
    // Shows confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this repository?');
    if (confirmDelete) {
      // Implements delete functionality
      console.log('Deleting repository:', repoDetails.name);
      // Navigates back to the home page after deletion logic
      window.location.href = '/';
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '20px', color: '#2c3e50' }}>Repository Details</h2>
      <p style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>Repo Name: {repoDetails.name}</p>
      <p style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>Description: {repoDetails.description}</p>
      <p style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>Language: {repoDetails.language}</p>
      <p style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>Owner: {repoDetails.owner}</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleDelete} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Delete</button>
        <Link to="/" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none' }}>Home</Link>
      </div>
    </div>
  );
};

export default NewRepoDetails;
