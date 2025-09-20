// App.js
import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
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