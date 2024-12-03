import edXCert from '../assets/edXCert.png'

const Certs = () => {
  return (
    <section id="certs">
      <img src={edXCert} alt="edXCert" className='self-start max-w-[36rem] rounded-lg'/>
      <div>
        <h1 className='text-white mb-4 underline text-3xl font-bold'>Core Concepts</h1>
        <ul className='list-disc max-w-[48rem] text-white text-xl'>
          <li>Front-end development using HTML, CSS, JavaScript, and React</li>
          <li>Back-end development using Node.js and Express</li>
          <li>Version control and collaboration using Git and GitHub</li>
          <li>Building and deploying web applications using Netlify and Heroku</li>
          <li>Responsive web design and mobile-first development</li>
          <li>Implementation of RESTful APIs and web services</li>
          <li>Authentication and authorization using JWT and OAuth</li>
          <li>Managing and querying SQL and MongoDB databases</li>
        </ul>
      </div>
    </section>
  )
}

export default Certs