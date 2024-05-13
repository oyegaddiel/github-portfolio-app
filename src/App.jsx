import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepositoryList from './components/RepositoryList';
import SingleRepoPage from './pages/SingleRepoPage';
import ErrorBoundary from './components/ErrorBoundary';
import TestErrorPage from './pages/TestErrorPage'; 
import NotFound from './components/NotFound';
import NewRepoModal from './components/NewRepoModal'; 
import NewRepoDetails from './pages/NewRepoDetails'; 

function App() {
  
  return (
    <Router>
      <div>
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<RepositoryList />} />
            <Route path="/repo/:repoName" element={<SingleRepoPage />} />
            <Route path="/test-error" element={<TestErrorPage />} />
            <Route path="/new-repo" element={<NewRepoModal />} /> 
            <Route path="/repo-details/:repoName" element={<NewRepoDetails />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;