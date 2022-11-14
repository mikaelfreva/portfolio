import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
interface ParticleProps {
  theme?: string;
}
export const ParticlePage: React.FC<ParticleProps> = ({theme}) :any => {
  


    const particlesInit = useCallback(async (engine : any) => {
       await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container : any) => {
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0",
            
                backgroundColor: theme === "light" ? "#000000" : "#FFFFFF",
            }}
            params={{
              particles: {
                     color: {
       value:  theme === "light" ? "#000000" : "#FFFFFF",
     },
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 1500,
                  },
                },
                line_linked: {
                  enable: false,
                  opacity: 0.03,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.3,
                  straight: false,
                },
             
                size: {
                  value: 1,
                },
                opacity: {
                  value:0.5,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                  },
                },
              },
              fpsLimit: 10,
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  push: {
                    particles_nb: 1,
                  },
                },
              },
              retina_detect: true,
            }}
        />
    );
};






// tsParticles.load("tsparticles", {
//   background: {
//     color: "#FFF"
//   },
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push"
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse"
//       },
//       resize: true
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         duration: 2,
//         opacity: 0.8,
//         size: 40
//       },
//       push: {
//         quantity: 4
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4
//       }
//     }
//   },
//   particles: {
//     color: {
//       value: "#000000"
//     },
//     links: {
//       color: "#000000",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1
//     },
//     collisions: {
//       enable: true
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outMode: "bounce",
//       random: false,
//       speed: 6,
//       straight: false
//     },
//     number: {
//       density: {
//         enable: true,
//         value_area: 800
//       },
//       value: 80
//     },
//     opacity: {
//       value: 0.5
//     },
//     shape: {
//       type: "circle"
//     },
//     size: {
//       random: true,
//       value: 5
//     }
//   }
// });
