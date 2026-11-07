import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => setCurrentImage((previous) => (previous + 1) % project.image.length), 4000);
    return () => clearInterval(timer);
  }, [project.image.length]);

  return (
    <article className="project-card">
      <div className="project-media"><img src={project.image[currentImage]} alt={`${project.title} project screenshot ${currentImage + 1}`} loading="lazy" /><span className="image-count">{currentImage + 1} / {project.image.length}</span></div>
      <div className="project-content">
        <div className="project-meta">{project.featured && <span className="featured-badge">Featured project</span>}<span className="project-year">{project.year}</span></div>
        <h3>{project.title}</h3><p className="project-description">{project.description}</p>
        <div className="achievement-box"><h4>{project.award}</h4><p>{project.competition}</p></div>
        <p className="project-role"><strong>Role:</strong> {project.role}</p>
        <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        {(project.github || project.demo) && <div className="project-buttons">{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo</a>}</div>}
      </div>
    </article>
  );
}

export default ProjectCard;
