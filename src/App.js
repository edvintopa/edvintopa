import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import LandingPage from './pages/LandingPage/LandingPage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;