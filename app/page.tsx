
import Footer from './components/footer';
import About from './components/about';
import Hero from './components/hero';

import WhatIDo from './components/what-is-done';
import ScrollingImage from './components/scroll-image';
import Projects from './components/projects';
import Timeline from './components/timeline';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <WhatIDo />
      <ScrollingImage />
      <Projects />
      <Timeline />
    </div>
  );
}

export default Home;
