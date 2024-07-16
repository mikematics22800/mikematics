import { useState } from "react"
import { IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

const Nav = ({setSection}) => {
  const [dropDown, setDropDown] = useState(false)

  const toggleDropDown = () => {
    if (dropDown === false) {
      setDropDown(true)
    } else {
      setDropDown(false)
    }
  }

  const links = (
    <>
      <li className="title about-title" onClick={() => {setSection(0)}}>ABOUT ME</li>
      <li className="title certs-title" onClick={() => {setSection(1)}}>CERTIFICATIONS</li>
      <li className="title works-title" onClick={() => {setSection(2)}}>WORKS</li>
      <li className="title refs-title" onClick={() => {setSection(3)}}>REFERENCES</li>
      <li className="title contacts-title" onClick={() => {setSection(4)}}>CONTACTS</li>
    </>
  )

  
  return (
    <nav>
      <h1>Michael Medina</h1>
      <ul id='links'>
        {links}
      </ul>
      <IconButton id="menu-button" onClick={toggleDropDown}>
        <Menu id='menu-icon'/>
      </IconButton>
      {dropDown == true && 
        <ul id='menu-links'>
          {links}
        </ul>
      }
    </nav>
  )
}

export default Nav