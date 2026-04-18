
import Reveal from "./Reveal"

function About() {
  return (
    <Reveal as="section" id="sobre-mí" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-titles">
            Sobre mí
          </h2>
        </Reveal>

        <Reveal className="flex flex-col md:flex-row gap-12 items-start" delay={0.08}>

          {/* Texto */}
          <div className="flex-1">
            <p className="text-text-body text-lg leading-relaxed mb-6">
              Soy estudiante de Tecnología en Desarrollo de Sistemas en la USC Cali, próximo a iniciar prácticas. 
              Además de construir  aplicaciones fullstack, me apasiona el tema de las redes, la infraestructura 
              y estar en constante aprendizaje, lo que me ha llevado a certificarme en ciberseguridad y cloud mientras 
              curso mi carrera.
            </p>
          </div >
        </Reveal>
      </div>
    </Reveal>
  )
}

export default About