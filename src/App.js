import { useEffect, useState, createContext } from 'react'
import Computers from './components/Computers'
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

export const AppContext = createContext()

const App = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  } 

  const ghUrl = "https://mikematics22800.github.io/"

  const [monitorColor, setMonitorColor] = useState('red')

  window.addEventListener('click', (e) => {
    scrollTo('nav')
  })

  useEffect(() => {
    setTimeout(() => {
      switch (monitorColor) {
        case 'red':
          setMonitorColor('orange')
          break
        case 'orange':
          setMonitorColor('yellow')
          break
        case 'yellow':
          setMonitorColor('lime')
          break
        case 'lime':
          setMonitorColor('aqua')
          break
        case 'aqua':
          setMonitorColor('violet')
          break
        case 'violet':
          setMonitorColor('red')
          break
      }
    }, 1000)
  }, [monitorColor])

  return (
    <AppContext.Provider value={{ monitorColor, setMonitorColor }}>
      <div className='w-screen source-code-pro'>
        <div className='computers-container'>
          <Computers/>
        </div>
        <div className="hero">
          <div>
            <span className='text-[red]'>Mike</span>
            <span className='text-[aqua]'>Matics</span>
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
        <div className='content'>
          <div id="about">
            <div className='w-full flex xl:flex-row flex-col gap-10 sm:justify-between'>
              <div className='flex flex-col items-center gap-4'>
                <img src={me} className="sm:w-96 w-64"/>
                <h1 className='sm:text-3xl text-xl font-bold'>Michael Medina</h1>
              </div>
              <ul className='skills'> 
                <div className='flex justify-center mb-4'>
                  <h1 className='sm:text-3xl text-xl font-bold'>Technical Skillset</h1>
                </div>
                <li>
                  <img src={react}/>
                  <h1>Front-end development using HTML, CSS, JavaScript, and React</h1>
                </li>
                <li>
                  <img src={node}/>
                  <h1>Back-end development using Node.js and Express.js</h1>
                </li>
                <li>
                  <img src={github}/>
                  <h1>Version control and collaboration using Git and GitHub</h1>
                </li>
                <li>
                  <DeveloperModeIcon className='!w-8 !h-8'/>
                  <h1>Responsive web design and mobile-first development</h1>
                </li>
                <li>
                  <img src={mongo}/>
                  <h1>MongoDB management using AWS, Azure, and Google Cloud</h1>
                </li>
                <li>
                  <img src={cybersecurity}/>
                  <h1>Encrypted user authentication using JWT and OAuth</h1>
                </li>
              </ul>
            </div>
            <p>
              Greetings! I am a full stack engineer with extensive experience in both front-end and back-end development. 
              I specialize in creating dynamic, responsive web applications using modern technologies. 
              I am passionate about writing clean, efficient code and continuously learning new tools and techniques to improve my skills. 
              I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality software solutions. 
              I lead and contribute to open-source projects, staying updated with the latest industry trends and tools.
            </p>
          </div>
          <section id="projects">
            <div className='project'>
              <a className="w-[48rem] max-w-full" href='https://storm-cyclopedia.com' target='_blank'>
                <img className='rounded-lg w-full' src={cyclopedia}/>
              </a>
              <div className='desc'>
                <h1>Cyclopedia</h1>
                <p>
                  Interactive database for exploring historical hurricane track data with advanced filtering and visualization tools including dynamic charts powered by Chart.js. 
                  Built with React.js frontend for a seamless user experience, Express.js backend for efficient API handling, and Tailwind CSS for polished and responsive UI.                 
                </p>              
              </div>
            </div>
            <div className='project !flex-col-reverse sm:!flex-row'>
              <div className='desc'>
                <h1>Cryptomatics</h1>
                <p>
                  Interactive database for exploring live cryptocurrency stats and market trends with advanced filtering and visualization tools including dynamic charts powered by Chart.js.
                  Built with React.js frontend for a seamless user experience, Axios for efficient API handling, and Tailwind CSS for polished and responsive UI.
                </p>              
              </div>
              <a className="w-[48rem] max-w-full" href={`${ghUrl}/cryptomatics`} target='_blank'>
                <img className='rounded-lg w-full' src={cryptomatics}/>
              </a>
            </div>
            <div className='project'>
              <a className="w-[48rem] max-w-full" href={`${ghUrl}/weatherboy`} target='_blank'>
                <img className='rounded-lg w-full' src={weatherboy}/>
              </a>
              <div className='desc'>
                <h1>Weatherboy</h1>
                <p>
                  Weather application that provides real-time weather data and 5-day forecasts for any city worldwide, as well as an interactive map to view global atmospheric conditions.
                  Built with React.js frontend for a seamless user experience, Axios for efficient API handling, and Tailwind CSS for polished and responsive UI.
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
            <Tooltip title='LinkedIn' placement='bottom' arrow> 
              <a href='https://www.linkedin.com/in/michael-medina-928828207/' target='_blank'>
                <img src={linkedin} className='w-12 h-12'/>
              </a>
            </Tooltip>
            <h1>mikematics22800@gmail.com</h1>
            <h1>+1 561-715-9065</h1>
          </section>
        </div>
      </div>
    </AppContext.Provider> 
  )
}

export default App