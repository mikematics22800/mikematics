import Computers from './components/Computers'
import About from './components/About'
import Certs from './components/Certs'
import Works from './components/Works'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const App = () => {
  const scrollDown = () => {
    document.getElementById('sections').scrollIntoView({behavior: 'smooth'})
  } 

  return (
    <div className='app'>
      <Computers/>
      <div className="hero">
        <div>
          <span className='text-[red]'>Mike</span>
          <span className='text-[aqua]'>matics</span>
        </div>
        <ArrowCircleDownIcon className="arrow text-white !text-7xl cursor-pointer" onClick={scrollDown}/>
      </div>
      <div id="sections">
        <About/>
        <Certs/>
        <Works/>
      </div>
    </div>
  )
}

export default App