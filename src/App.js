import React from 'react';
import './App.css';
import Header from './components/header/Headerjs.jsx';
import Home from './components/home/Homejs';
import Aboutjs from './components/about/aboutjs.jsx';
import Skills from './components/skills/Skillsjs.jsx';

function App() {
  return (
  <>
  <Header />
  <main className='main'>
    <Home />
    <Aboutjs />
    <Skills />
    </main>
  </>
  );
}

export default App;
