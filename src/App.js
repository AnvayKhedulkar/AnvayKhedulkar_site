import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Header from './components/Header';
import Card from './components/Card';
import RotatingMoon from './components/RotatingMoon';
import Footer from './components/Footer';
import ResumeInfo from './components/ResumeInfo';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  const [scrollY, setScrollY] = useState(0);

  const socialHandles = [
    { name: 'GitHub', link: 'https://github.com/AnvayKhedulkar' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/anvay-khedulkar-464331201/' },
    { name: 'Hackerrank', link: 'https://www.hackerrank.com/profile/Anvaykhedulkar' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Check if window exists before adding listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="top-bar"></div>
      <div className="rotating-feature">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* Suspense wrapper for loading the RotatingMoon component */}
          <Suspense fallback={<div>Loading...</div>}>
            <RotatingMoon scrollY={scrollY} />
          </Suspense>
        </Canvas>
      </div>

      <main>
        <Header 
          name="Anvay Khedulkar" 
          introduction="I'm a Computer Science student, and I am here to make your space travel inside the computer world sail smooth."
          title="Fullstack Web Dev || App Dev || .Net Framework || MLDL Dev" 
          degree="(Engineering in Computer Science in AIEC)" 
        />

        <div className="cards-container">
          {socialHandles.map((handle, index) => (
            <Card key={index} name={handle.name} link={handle.link} />
          ))}
        </div>

        <ResumeInfo />
      </main>
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
