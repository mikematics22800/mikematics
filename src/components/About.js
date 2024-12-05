import me from "../assets/me.jpg"
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  return (
    <section id="about">
      <div>
        <h1 className='text-white mb-4 text-3xl font-bold'>About Me</h1>
        <p className="sm:text-xl text-white max-w-[48rem]">
          Greetings! I am a full stack web developer with a passion for delivering quality software and a seamless user experience. 
          I have extensive experience in front-end development using HTML, CSS, and JavaScript, where I focus on crafting responsive and user-friendly interfaces. 
          My expertise extends to back-end development with Node.js and Express, allowing me to build robust and scalable server-side applications.
          I regularly keep myself updated with the latest trends and advancements in the tech industry, experimenting with new tools and frameworks to enhance my development workflow.
          I am currently looking for new opportunities to work on exciting projects where myself and other developers can learn from one another.
          My goal is to maximize my skillset through experience and collaboration, and build my client or employer the app of their dreams.
          Over the years, I have worked on a variety of projects ranging from small business websites to large-scale web applications. 
          My journey in web development started with a curiosity for how websites are built and a desire to create something meaningful. 
          This curiosity quickly turned into a passion as I delved deeper into the world of coding and discovered the endless possibilities it offers.
          I take pride in writing clean, efficient, and maintainable code, and I am always eager to learn new technologies and improve my skills.
          When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or contributing to open-source projects.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-96">
        <a href="https://github.com/mikematics22800">
          <img className="rounded-xl w-full" src={me} alt="Profile Picture"/>
        </a>
        <a href="/resume.pdf" download className="resume">
          <h1>Resume</h1>
          <DownloadIcon/>
        </a>
      </div>
    </section>
  )
}

export default About