import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import Landing from './components/landing';
import Statistics from './components/statistics';
import Footer from './components/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Statistics />
    </div>
  );
}

export default App;
