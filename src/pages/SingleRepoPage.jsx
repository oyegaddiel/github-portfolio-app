import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleRepoPage = () => {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/oyegaddiel/${repoName}`)
      .then(response => response.json())
      .then(data => setRepoDetails(data))
      .catch(error => console.error('Error fetching repository details:', error));
  }, [repoName]);

  if (!repoDetails) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '450px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#2c3e50' }}>{repoDetails.name}</h2>
      <p style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold', color: '#2980b9' }}>Description:</p>
      <p style={{ marginBottom: '20px', color: '#2c3e50' }}>{repoDetails.description || 'No description'}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>Owner:</p>
          <p style={{ color: '#2c3e50' }}>{repoDetails.owner.login}</p>
        </div>
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>Language:</p>
          <p style={{ color: '#2c3e50' }}>{repoDetails.language || 'Unknown'}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>Last Updated:</p>
          <p style={{ color: '#2c3e50' }}>{new Date(repoDetails.updated_at).toLocaleString()}</p>
        </div>
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>Stars:</p>
          <p style={{ color: '#2c3e50' }}>{repoDetails.stargazers_count}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>Forks:</p>
          <p style={{ color: '#2c3e50' }}>{repoDetails.forks}</p>
        </div>
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>Open Issues:</p>
          <p style={{ color: '#2c3e50' }}>{repoDetails.open_issues_count}</p>
        </div>
      </div>
      {repoDetails.license && (
        <div>
          <p style={{ fontSize: '16px', marginBottom: '5px', fontWeight: 'bold', color: '#2980b9' }}>License:</p>
          <p style={{ color: '#2c3e50' }}>{repoDetails.license.name}</p>
        </div>
      )}
      
      {/* Home button */}
      <button
        onClick={() => window.history.back()}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
          transition: '0.3s',
          marginTop: '20px',
        }}
      >
        Home
      </button>
    </div>
  );
};

export default SingleRepoPage;
