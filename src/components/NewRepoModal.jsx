import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewRepoModal = ({ isOpen, onClose }) => {
  const [repoDetails, setRepoDetails] = useState({
    name: '',
    description: '',
    language: '',
    owner: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/repo-details/${repoDetails.name}`, { state: { repoDetails } });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '90%',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#333333', marginBottom: '30px' }}>Create New Repository</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555555' }}>Repo Name:</label>
            <input
              type="text"
              name="name"
              value={repoDetails.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cccccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555555' }}>Description:</label>
            <input
              type="text"
              name="description"
              value={repoDetails.description}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cccccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555555' }}>Language:</label>
            <input
              type="text"
              name="language"
              value={repoDetails.language}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cccccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555555' }}>Owner:</label>
            <input
              type="text"
              name="owner"
              value={repoDetails.owner}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cccccc' }}
              required
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginRight: '10px',
                border: 'none',
              }}
            >
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '8px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewRepoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  onCreate: PropTypes.func.isRequired, 
};

export default NewRepoModal;
