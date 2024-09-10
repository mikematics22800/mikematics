import me from "../images/me.jpg"

const About = () => {
  return (
    <section id="about">
      <div id="content">
        <h1 className="title about-title text-5xl">GREETINGS!</h1>
        <p>
          I am a full stack web developer with a passion for delivering quality software and a seamless user experience. 
          I have extensive experience in front-end development using HTML, CSS, and JavaScript, where I focus on crafting responsive and user-friendly interfaces. 
          My expertise extends to back-end development with Node.js and Express, allowing me to build robust and scalable server-side applications.
          I regularly keep myself updated with the latest trends and advancements in the tech industry, experimenting with new tools and frameworks to enhance my development workflow.
          I am currently looking for new opportunities to work on exciting projects where myself and other developers can learn from one another.
          My goal is to maximize my skillset through experience and collaboration, and build my clients the app of their dreams.
        </p>
      </div>
      <img src={me}/>
    </section>
  )
}

export default About