
import Footer from './components/footer';
import About from './components/about';
import Hero from './components/hero';
import Navbar from './components/navbar';

import WhatIDo from './components/what-is-done';
import ScrollingImage from './components/scroll-image';
import Projects from './components/projects';
import Timeline from './components/timeline';
import SocialSidebar from './components/socials';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <About />
      <WhatIDo />
      <ScrollingImage />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
