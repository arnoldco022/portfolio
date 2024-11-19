import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import Header from './components/header/header';
import AboutMe from "./components/tools/tools";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import TopHeader from "./components/tophead/tophead";

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#F5F6F7",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#6f4e37", "#d2b48c", "#e7c7a1"],
        },
        links: {
          enable: false, 
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2, 
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  

  return (
    <div className="App relative">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0 -z-10"
        />
      )}
      <header className="App-header">
        <TopHeader />
      </header>
      <body>
        <Header />
        <AboutMe />
        <Works />
        <Contact />
        <Footer />
      </body>
    </div>
  );
}

export default App;
