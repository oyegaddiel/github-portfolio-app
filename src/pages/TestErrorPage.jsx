
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const TestErrorPage = () => {
  const throwError = () => {
    throw new Error('Intentional error for testing');
  };

  return (
    <div>
      <h1>Testing Error Boundary</h1>
      <ErrorBoundary>
        <button onClick={throwError}>Throw Error</button>
      </ErrorBoundary>
    </div>
  );
};

export default TestErrorPage;
