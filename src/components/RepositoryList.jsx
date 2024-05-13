import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NewRepoModal from './NewRepoModal';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewRepoModalOpen, setNewRepoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch repositories from GitHub
    fetch('https://api.github.com/users/oyegaddiel/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.error('Error fetching repositories:', error));

    // Fetch user data from GitHub
    fetch('https://api.github.com/users/oyegaddiel')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < repositories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const createNewRepo = () => {
    console.log('New repository created');
    setNewRepoModalOpen(false);
    navigate.push('/');
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#f9f9f9',
      }}
    >
      {userData && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={userData.avatar_url} alt="Profile" style={{ width: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>{userData.name}</p>
          <p style={{ fontSize: '16px', color: '#040A08', marginBottom: '10px' }}>{userData.bio}</p>
        </div>
      )}

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '50%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>

      {searchQuery && (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {filteredRepositories.map(repo => (
            <li
              key={repo.id}
              style={{
                borderBottom: '1px solid #e0e0e0',
                padding: '10px 0',
              }}
            >
              <Link
                to={`/repo/${repo.name}`}
                style={{
                  textDecoration: 'none',
                  color: '#2980b9',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                {repo.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!searchQuery && repositories.length > 0 && (
        <div>
          <div
            key={repositories[currentIndex].id}
            style={{
              borderBottom: '1px solid #e0e0e0',
              padding: '10px 0',
            }}
          >
            <Link
              to={`/repo/${repositories[currentIndex].name}`}
              style={{
                textDecoration: 'none',
                color: '#2980b9',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              {repositories[currentIndex].name}
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                backgroundColor: currentIndex === 0 ? '#e0e0e0' : '#2980b9',
                color: currentIndex === 0 ? '#9e9e9e' : '#fff',
                borderRadius: '5px',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'}
              onMouseOut={(e) => e.target.style.backgroundColor = currentIndex === 0 ? '#e0e0e0' : '#2980b9'}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === repositories.length - 1}
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                backgroundColor: currentIndex === repositories.length - 1 ? '#e0e0e0' : '#2980b9',
                color: currentIndex === repositories.length - 1 ? '#9e9e9e' : '#fff',
                borderRadius: '5px',
                cursor: currentIndex === repositories.length - 1 ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2c3e50'}
              onMouseOut={(e) => e.target.style.backgroundColor = currentIndex === repositories.length - 1 ? '#e0e0e0' : '#2980b9'}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
          }}
          onClick={() => setNewRepoModalOpen(true)}
        >
          Create New Repository
        </button>
      </div>

      <NewRepoModal isOpen={isNewRepoModalOpen} onClose={() => setNewRepoModalOpen(false)} onCreate={createNewRepo} />
    </div>
  );
};

export default RepositoryList;
