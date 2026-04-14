import { skills } from "../data/skills"

const categorias = [
  { nombre: "Frontend", key: "frontend", color: "bg-blue-50 text-blue-700" },
  { nombre: "Backend", key: "backend", color: "bg-purple-50 text-purple-700" },
  { nombre: "Bases de datos", key: "databases", color: "bg-green-50 text-green-700" },
  { nombre: "Herramientas", key: "tools", color: "bg-amber-50 text-amber-700" },
  { nombre: "Sistemas", key: "systems", color: "bg-gray-100 text-gray-700" },
]

function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-2">
            Qué sé hacer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Habilidades
          </h2>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <div
              key={categoria.key}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-gray-800 font-semibold mb-4">
                {categoria.nombre}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[categoria.key].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${categoria.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills