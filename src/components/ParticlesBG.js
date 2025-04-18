import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";

const options = [
  {
    background: {
      color: "#191970",
      opacity: 0.5
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 60,
            smooth: 10
          }
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1
        },
        attract: {
          distance: 200,
          duration: 2,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: {
          distance: 200
        },
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          }
        },
        grab: {
          distance: 400,
          liks: {
            blink: false,
            opacity: 1,
            consent: false
          }
        },
        attract: {
          distance: 2000,
          duration: 1
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    }
  }
];

function ParticlesBG() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="-z-50">
          {init && <Particles options={options}/>}
        </div>
    );
}

export default ParticlesBG;