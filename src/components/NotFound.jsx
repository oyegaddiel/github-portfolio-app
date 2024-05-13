import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.paragraph}>
        The page you are looking for does not exist.
      </p>
      <p style={styles.paragraph}>
        Go back to <Link to="/" style={styles.link}>home</Link>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#FF6347',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginTop: '10px',
    color: '#333',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default NotFound;
