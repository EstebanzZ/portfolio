
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
              ¡Hola! Soy estudiante de Tecnología en Desarrollo de Software en la USC y estoy listo para iniciar 
              mis prácticas profesionales. Me apasiona construir soluciones tecnológicas completas, combinando el desarrollo de 
              aplicaciones con el manejo de datos e infraestructura Cloud. Disfruto enfrentando retos técnicos, optimizando 
              sistemas y aprendiendo constantemente para adaptarme a las necesidades del entorno y del negocio.
            </p>
          </div >
        </Reveal>
      </div>
    </Reveal>
  )
}

export default About