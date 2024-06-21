import { createContext, useState } from 'react'
import Computers from './components/Computers'
import About from './components/About'
import Certs from './components/Certs'
import Works from './components/Works'
import Refs from './components/Refs'
import Contacts from './components/Contacts'
import Nav from './components/Nav'
import Arrow from './components/Arrow'

export const SectionContext = createContext()

const App = () => {
  const [section, setSection] = useState(0)
  const sections = [<About/>, <Certs/>, <Works/>, <Refs/>, <Contacts/>]
  
  const scrollDown = () => {
    document.getElementById('section-container').scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <SectionContext.Provider value={section}>
      <div className='app'>
        <Nav setSection={setSection}/>
        <div id='hero'>
          <Arrow scroll={scrollDown} rotation={0}/>
        </div>
        <Computers/>
        <div id='section-container'>
          {sections[section]}
        </div>
      </div>
    </SectionContext.Provider>
  )
}

export default App