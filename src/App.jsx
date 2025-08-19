import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Analytics from './components/Analytics.jsx';
import Newsletter from './components/Newsletter.jsx';
import PlanCards from './components/PlanCards.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <PlanCards/>
      <Footer/>
    </div>
  )
}

export default App;
