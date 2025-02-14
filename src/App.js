import { useEffect } from 'react'
import Computers from './components/Computers'
import me from "./assets/me.png"
import react from './assets/react.svg'
import node from './assets/node.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.png'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import mongo from './assets/mongo.svg'
import cybersecurity from './assets/cyber-security.png'
import cryptomatics from "./assets/cryptomatics.png"
import weatherboy from "./assets/weatherboy.png"
import cyclopedia from "./assets/cyclopedia.png"
import { Tooltip } from "@mui/material"

const App = () => {
  const scrollDown = () => {
    document.getElementById('content').scrollIntoView({behavior: 'smooth'})
  } 

  const ghUrl = "https://mikematics22800.github.io/"

  useEffect(() => {
    setTimeout(() => {
      scrollDown()
    }, 1500)
  }, [])

  return (
    <div className='w-screen'>
      <div className='computers-container'>
        <Computers/>
      </div>
      <div className="hero animate__fadeInDownBig animate__animated">
        <div>
          <span className='text-[red] roboto'>Mike</span>
          <span className='text-[aqua] roboto'>Matics</span>
        </div>
      </div> 
      <div id='content' className='roboto'>
        <div className='w-full flex xl:flex-row flex-col gap-10 sm:justify-between '>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='sm:text-3xl text-xl font-bold'>Michael Medina</h1>
            <img src={me} className="w-full max-w-96"/>
            <div className='flex items-center gap-6'>
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
            </div>
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
        <p className='sm:text-lg text-center bg-blue-600 sm:p-10 p-5 rounded-lg sm:rounded-3xl text-xs'>
          Greetings! I am a full stack engineer with extensive experience in both front-end and back-end development. 
          I specialize in creating dynamic, responsive web applications using modern technologies. 
          I am passionate about writing clean, efficient code and continuously learning new tools and techniques to improve my skills. 
          I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality software solutions. 
          In my spare time, I contribute to open-source projects and stay updated with the latest industry trends and best practices.
        </p>
        <section id="works">
          <div className='flex justify-center mb-5 sm:mb-10'>
            <h1 className='font-bold sm:text-3xl text-xl'>Projects</h1>
          </div>
          <div className='links'>
            <Tooltip title="Cyclopedia" arrow>
              <a href='https://storm-cyclopedia.com' target='_blank'>
                <img src={cyclopedia}/>
              </a>
            </Tooltip>
            <Tooltip title="Cryptomatics" arrow>
              <a href={`${ghUrl}Cryptomatics`} target='_blank'>
                <img src={cryptomatics}/>
              </a>
            </Tooltip>
            <Tooltip title="Weatherboy" arrow>  
              <a href={`${ghUrl}Weatherboy`} target='_blank'>
                <img src={weatherboy}/>
              </a>
            </Tooltip>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App