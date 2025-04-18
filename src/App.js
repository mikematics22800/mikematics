import Computers from './components/Computers'
import ParticlesBG from './components/ParticlesBG'
import me from "./assets/me.png"
import react from './assets/react.svg'
import node from './assets/node.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.png'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import mongo from './assets/mongo.svg'
import cybersecurity from './assets/cyber-security.png'
import cyclopedia from "./assets/cyclopedia.png"
import cryptomatics from "./assets/cryptomatics.png"
import weatherboy from "./assets/weatherboy.png"
import { Tooltip } from "@mui/material"
import hubble from "./assets/hubble.jpg"

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
          <h1>Click or tap anywhere to begin</h1>
        </div> 
        <nav id="nav">
          <div className='nav-links'>
            <h1 onClick={() => {scrollTo('about')}}>About</h1>
            <h1 onClick={() => {scrollTo('projects')}}>Projects</h1>
            <h1 onClick={() => {scrollTo('contact')}}>Contact</h1>
          </div>
        </nav>
        <div className='content' style={{backgroundImage: `url(${hubble})`}}>
          <div id="about">
            <div className='flex flex-col items-center w-80 max-w-full'>
              <img className='w-full max-w-[50vw]' src={me}/>
              <h1 className='text-xl sm:text-2xl font-bold mt-2 mb-1'>Michael Medina</h1>
              <p className='text-center text-sm'>
                Greetings! I am a bootcamp certified full stack developer. 
                I specialize in building functional and dynamic web applications with the latest libraries and frameworks. 
              </p>
            </div>
            <ul className='skills'> 
              <div className='flex justify-center my-2'>
                <h1 className='sm:text-2xl text-xl font-bold'>Developer Skillset</h1>
              </div>
              <li>
                <img src={react}/>
                <h1>Front-end development with React.js, Next.js, and TypeScript</h1>
              </li>
              <li>
                <img src={node}/>
                <h1>Back-end development with Node.js, Express.js, and RESTful APIs</h1>
              </li>
              <li>
                <img src={github}/>
                <h1>Version control, CI/CD pipelines, and collaboration with GitHub</h1>
              </li>
              <li>
                <DeveloperModeIcon className='!w-8 !h-8'/>
                <h1>Responsive web design with Tailwind CSS and Material-UI</h1>
              </li>
              <li>
                <img src={mongo}/>
                <h1>Database management with MongoDB, PostgreSQL, and Firebase</h1>
              </li>
              <li>
                <img src={cybersecurity}/>
                <h1>Secure user authentication and data encryption with JWT and OAuth</h1>
              </li>
            </ul>
          </div>
          <section id="projects">
            <div className='project'>
              <a href='https://storm-cyclopedia.com' target='_blank'>
                <img src={cyclopedia}/>
              </a>
              <div className='desc'>
                <h1>Cyclopedia</h1>
                <p>
                  Interactive database for exploring historical hurricane track data with advanced visualization tools, including a tracking map and charts. 
                  Incorporated technologies include React.js, Express.js, and Tailwind CSS.                 
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
                  Incorporated technologies include React.js, Coinranking API, and Tailwind CSS.
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
                  Incorporated technologies include React.js, OpenWeatherMap API, and Tailwind CSS.
                </p>              
              </div>
            </div>
          </section>
          <section id="contact">
            <Tooltip title='GitHub' placement='bottom' arrow> 
              <a href="https://github.com/mikematics22800" target='_blank'>
                <img src={github} className='w-12 h-12'/>
              </a>
            </Tooltip>
            <h1>mikematics22800@gmail.com</h1>
            <h1>+1 (561)-715-9065</h1>
            <Tooltip title='LinkedIn' placement='bottom' arrow> 
              <a href='https://www.linkedin.com/in/michael-medina-928828207/' target='_blank'>
                <img src={linkedin} className='w-12 h-12'/>
              </a>
            </Tooltip>
          </section>
        </div>
      </div>
  )
}

export default App