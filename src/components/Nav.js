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
      <li className="title" id="about-title" onClick={() => {setSection(0)}}>ABOUT ME</li>
      <li className="title" id="certs-title" onClick={() => {setSection(1)}}>CERTIFICATIONS</li>
      <li className="title" id="works-title" onClick={() => {setSection(2)}}>WORKS</li>
      <li className="title" id="refs-title" onClick={() => {setSection(3)}}>REFERENCES</li>
      <li className="title" id="contacts-title" onClick={() => {setSection(4)}}>CONTACTS</li>
    </>
  )

  
  return (
    <nav>
      <ul id='links'>
        {links}
      </ul>
      <IconButton id="drop-down-button" onClick={toggleDropDown}>
        <Menu id='drop-down-icon'/>
      </IconButton>
      {dropDown == true && 
        <ul id='drop-down-links'>
          {links}
        </ul>
      }
    </nav>
  )
}

export default Nav