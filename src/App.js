import { Tooltip } from '@mui/material'
import Computers from './components/Computers'
import ParticlesBG from './components/ParticlesBG'
import me from "./assets/me.png"
import react from './assets/react.svg'
import node from './assets/node.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.png'
import cyclopedia from "./assets/cyclopedia.png"
import cryptomatics from "./assets/cryptomatics.png"
import weatherboy from "./assets/weatherboy.png"
import hubble from "./assets/hubble.jpg"
import ts from "./assets/typescript.svg"
import mongo from "./assets/mongo.svg"
import tailwind from "./assets/tailwind.png"
import next from "./assets/next.svg"
import mui from "./assets/material-ui.svg"
import webpack from "./assets/webpack.svg"
import redux from "./assets/redux.svg"
import vite from "./assets/vite.svg"


const App = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  } 

  const ghUrl = "https://mikematics22800.github.io"

  window.addEventListener('click', (e) => {
    scrollTo('nav')
  })

  return (
      <div className='w-screen source-code-pro'>
        <ParticlesBG/>
        <div className="hero">
          <div className='computers-container'>
            <Computers/>
          </div>
          <div className='z-10 pt-20'>
            <span className='text-[red]'>Mike</span>
            <span className='text-[aqua]'>matics</span>
          </div>
          <h1>Click or tap anywhere to start</h1>
        </div> 
        <nav id="nav">
          <div className='nav-links'>
            <h1 onClick={() => {scrollTo('about')}}>About</h1>
            <h1 onClick={() => {scrollTo('projects')}}>Projects</h1>
            <h1 onClick={() => {scrollTo('contact')}}>Contact</h1>
          </div>
        </nav>
        <div className='content' style={{backgroundImage: `url(${hubble})`}}>
          <section id="about">
            <div className='flex flex-col items-center'>
              <img className='w-80 max-w-[50vw]' src={me}/>
              <h1 className='text-xl sm:text-2xl font-bold mt-2 mb-1'>Michael Medina</h1>
              <p className='text-center text-xs sm:text-sm w-80 max-w-[50vw]'>
                Welcome to my gallery. I specialize in building polished, efficient, and dynamic web applications using the latest JavaScript libraries and frameworks. 
              </p>
            </div>
            <div className='skills'>
              <div className='row'>
                <Tooltip title="Node.js" arrow placement="bottom">
                  <a href="https://nodejs.org/en" target='_blank'>
                    <img src={node} alt="Node.js" />
                  </a>
                </Tooltip>
              </div>
              <div className='row'>
                <Tooltip title="React" arrow placement="bottom">
                  <a href="https://react.dev/" target='_blank'>
                    <img src={react} alt="React" />
                  </a>
                </Tooltip>
                <Tooltip title="TypeScript" arrow placement="bottom">
                  <a href="https://www.typescriptlang.org/" target='_blank'>
                    <img src={ts} alt="TypeScript" />
                  </a>
                </Tooltip>
              </div>
              <div className='row'>
                <Tooltip title="Tailwind CSS" arrow placement="bottom">
                  <a href="https://tailwindcss.com/" target='_blank'>
                    <img src={tailwind} alt="Tailwind CSS" />
                  </a>
                </Tooltip>
                <Tooltip title="Vite" arrow placement="bottom">
                  <a href="https://vite.dev/" target='_blank'>
                    <img src={vite} alt="Vite" />
                  </a>
                </Tooltip>
                <Tooltip title="Material UI" arrow placement="bottom">
                  <a href="https://mui.com/" target='_blank'>
                    <img src={mui} alt="Material UI" />
                  </a>
                </Tooltip>
              </div>
              <div className='row'>
                <Tooltip title="Webpack" arrow placement="bottom">
                  <a href="https://webpack.js.org/" target='_blank'>
                    <img src={webpack} alt="Webpack" />
                  </a>
                </Tooltip>
                <Tooltip title="Next.js" arrow placement="bottom">
                  <a href="https://nextjs.org/" target='_blank'>
                    <img src={next} alt="Next.js" />
                  </a>
                </Tooltip>
                <Tooltip title="Redux" arrow placement="bottom">
                  <a href="https://redux.js.org/" target='_blank'>
                    <img src={redux} alt="Redux" />
                  </a>
                </Tooltip>
                <Tooltip title="MongoDB" arrow placement="bottom">
                  <a href="https://www.mongodb.com/" target='_blank'>
                    <img src={mongo} alt="MongoDB" />
                  </a>
                </Tooltip>
              </div>
              <h1 className='font-bold text-xl sm:text-2xl'>Developer Skills</h1>
            </div>
          </section>
          <section id="projects">
            <div className='project'>
              <a href='https://storm-cyclopedia.com' target='_blank'>
                <img src={cyclopedia}/>
              </a>
              <div className='desc'>
                <h1>Cyclopedia</h1>
                <p>
                  Interactive database for exploring historical hurricane track data with advanced visualization tools, including a tracking map and charts. 
                  Incorporated technologies include React.js, Express.js, and React Leaflet.                 
                </p>              
              </div>
            </div>
            <div className='project xl:!flex-row-reverse'>
              <a href={`${ghUrl}/Cryptomatics`} target='_blank'>
                <img src={cryptomatics}/>
              </a>
              <div className='desc xl:!text-right'>
                <h1 className='xl:!text-right'>Cryptomatics</h1>
                <p>
                  Live interactive database for viewing cryptocurrency market changes with advanced visualization tools, including dynamic time plots.
                  Incorporated technologies include React.js, Coinranking API, and Chart.js.
                </p>              
              </div>
            </div>
            <div className='project'>
              <a href={`${ghUrl}/Weatherboy`} target='_blank'>
                <img src={weatherboy}/>
              </a>
              <div className='desc'>
                <h1>Weatherboy</h1>
                <p>
                  Weather application providing real-time data and 5-day forecasts for any city worldwide, as well as an interactive map to view global atmospheric patterns.
                  Incorporated technologies include React.js, OpenWeatherMap API, and Google Maps API.
                </p>              
              </div>
            </div>
          </section>
          <section id="contact">
            <Tooltip title="GitHub" arrow placement="bottom">
              <a href="https://github.com/mikematics22800" target='_blank'>
                <img src={github}/>
              </a>
            </Tooltip>
            <h1>mikematics22800@gmail.com</h1>
            <h1>+1 (561)-715-9065</h1>
            <Tooltip title="LinkedIn" arrow placement="bottom">
              <a href='https://www.linkedin.com/in/michael-medina-928828207/' target='_blank'>
                <img src={linkedin}/>
              </a>
            </Tooltip>
          </section>
        </div>
      </div>
  )
}

export default App