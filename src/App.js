// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './hero/Hero';
import About from './about/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;