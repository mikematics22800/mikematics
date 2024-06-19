import me from "../images/me.jpg"

const About = () => {
  return (
    <section id="about">
      <div id="content">
        <h1 id="about-title" className="title">ABOUT ME</h1>
        <p>
          Hi there! I'm a passionate React Developer with a knack for building dynamic and user-friendly web applications. With a solid foundation in JavaScript and a deep understanding of React principles, I specialize in creating seamless, interactive user experiences. My journey in the tech industry has equipped me with a robust set of skills, including state management with Redux, efficient data fetching with Axios, and crafting responsive designs using CSS and modern frameworks like Tailwind CSS.
          I thrive in environments that challenge me to learn and grow, and I'm always on the lookout for opportunities to apply my skills in new and innovative ways. My approach to development is centered around writing clean, maintainable code and collaborating closely with team members to drive projects to completion. I'm deeply committed to continuous learning and staying abreast of the latest industry trends and technologies.
          Beyond my technical skills, I bring strong problem-solving abilities, a keen eye for detail, and a commitment to delivering high-quality work. Whether working on a team project or developing an individual application, my goal is always to exceed expectations and push the boundaries of what's possible with React and web development.
        </p>
      </div>
      <img src={me}/>
    </section>
  )
}

export default About