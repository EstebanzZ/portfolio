import { projects } from "../data/projects"

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-gray-800 font-bold text-xl">{project.title}</h3>
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
          project.status === "completado"
            ? "bg-green-50 text-green-700"
            : "bg-amber-50 text-amber-700"
        }`}>
          {project.status}
        </span>
      </div>

      {/* Rol */}
      <p className="text-blue-600 text-sm font-medium">{project.role}</p>

      {/* Descripción */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Techs */}
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-3 mt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="flex-1 text-center border border-gray-200 text-gray-600 text-sm py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="flex-1 text-center bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Ver demo
          </a>
        )}
      </div>

    </div>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-2">
            Lo que he construido
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Proyectos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects