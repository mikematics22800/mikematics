import React from 'react'

const Nav = ({setSection}) => {
  return (
    <nav>
      <h1 className="about-title" onClick={() => {setSection(0)}}>ABOUT ME</h1>
      <h1 className="certs-title" onClick={() => {setSection(1)}}>CERTIFICATIONS</h1>
      <h1 className="works-title" onClick={() => {setSection(2)}}>WORKS</h1>
      <h1 className="refs-title" onClick={() => {setSection(3)}}>REFERENCES</h1>
      <h1 className="contacts-title" onClick={() => {setSection(4)}}>CONTACTS</h1>
    </nav>
  )
}

export default Nav