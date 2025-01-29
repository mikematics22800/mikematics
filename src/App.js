import Computers from './components/Computers'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import me from "./assets/me.png"
import react from './assets/react.svg'
import node from './assets/node.svg'
import github from './assets/github.svg'
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

  const liveUrl = "https://mikematics22800.github.io/"

  return (
    <div className='w-screen'>
      <div className='computers-container'>
        <Computers/>
      </div>
      <div className="hero">
        <div>
          <span className='text-[red]'>Mike</span>
          <span className='text-[aqua]'>Matics</span>
        </div>
        <ArrowCircleDownIcon className="arrow text-white !text-6xl sm:!text-7xl cursor-pointer" onClick={scrollDown}/>
      </div> 
      <div id='content' className='roboto'>
        <div className='w-full flex xl:flex-row flex-col gap-20 items-center'>
          <div className='flex flex-col items-center gap-2'>
            <a className='cursor-pointer' href='https://github.com/mikematics22800' target='_blank'>
              <div className="sm:w-96 sm:h-96 w-64 h-64 rounded-full bg-cover" style={{ backgroundImage: `url(${me})` }}/>
            </a>
            <h1 className='font-bold sm:text-4xl text-2xl text-white'>Hello world :)</h1>
          </div>
          <ul className='skills'>
            <div className='flex justify-center mb-4'>
              <h1 className='sm:text-2xl font-bold'>Skills to pay the bills 💸 💸 💸</h1>
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
        <section id="works">
          <div className='flex justify-center mb-5 sm:mb-10'>
            <h1 className='text-white font-bold sm:text-2xl text-lg'>Some cool stuff I've built</h1>
          </div>
          <div className='links'>
            <Tooltip title="Cyclopedia" arrow>
              <a href='https://storm-cyclopedia.com' target='_blank'>
                <img src={cyclopedia}/>
              </a>
            </Tooltip>
            <Tooltip title="Cryptomatics" arrow>
              <a href={`${liveUrl}Cryptomatics`} target='_blank'>
                <img src={cryptomatics}/>
              </a>
            </Tooltip>
            <Tooltip title="Weatherboy" arrow>  
              <a href={`${liveUrl}Weatherboy`} target='_blank'>
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