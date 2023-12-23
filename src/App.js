import React from 'react';
import './App.css';
import Header from './components/header/Headerjs.jsx';
import Home from './components/home/Homejs';
import Aboutjs from './components/about/aboutjs.jsx';
import Skills from './components/skills/Skillsjs.jsx';
import Servicesjs from './components/services/Servicesjs.jsx';
import Qualification from './components/qualification/Qualificationjs.jsx';

function App() {
  return (
  <>
  <Header />
  <main className='main'>
    <Home />
    <Aboutjs />
    <Skills />
    <Servicesjs />
    <Qualification />
    </main>
  </>
  );
}

export default App;
