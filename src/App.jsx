import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import About from './pages/About';
import Stats from './components/Stats';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials';

function App() {

  return (
    <div className='font-sans'>
      <Navbar />
      <section id='home'> <Home /> </section>
      <section id='projects'> <Projects /> </section>
      <section id='about'><About /></section>
      <Stats />
      <section id='portfolio'><Portfolio /></section>
      <section id='contact'><Contacts /></section>
      <section id='testimonials'><Testimonials/></section>

      <Footer />
    </div>
  );
}

export default App;