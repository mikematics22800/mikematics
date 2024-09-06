import me from "../images/me.jpg"

const About = () => {
  return (
    <section id="about">
      <div id="content">
        <h1 className="title about-title text-5xl">GREETINGS!</h1>
        <p>
          I am a software engineer with a passion for creating web applications that provide a seamless user experience. 
          I have extensive experience in front-end development using HTML, CSS, and JavaScript, where I focus on crafting responsive and user-friendly interfaces. My expertise extends to back-end development with Node.js and Express, allowing me to build robust and scalable server-side applications.
          In addition to my core skills, I have a strong proficiency in implementing 3D visuals in web applications using React-three-fiber and Three.js. This enables me to create immersive and interactive user experiences that stand out.
          I am always eager to learn new technologies and improve my skills. I regularly keep myself updated with the latest trends and advancements in the tech industry, and I enjoy experimenting with new tools and frameworks to enhance my development workflow.
          I am currently looking for new opportunities to work on exciting projects and collaborate with other developers. I thrive in team environments where I can contribute my knowledge and learn from others. My goal is to be part of innovative projects that challenge me and allow me to grow as a developer.
          If you are looking for a dedicated and skilled software engineer to join your team, I would love to connect and discuss how I can contribute to your projects.
        </p>
      </div>
      <img src={me}/>
    </section>
  )
}

export default About