import projects from "../data/projects";

import ProjectCard from "./ProjectCard";

function Projects() {

  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="section-title">

        <h2>
          Featured Projects
        </h2>

        <p>
          Here are some of the projects that best showcase my technical skills and problem-solving abilities.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

    </section>

  );

}

export default Projects;
