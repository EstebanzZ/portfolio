function About() {
  return (
    <section id="sobre-mí" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-2">
            Quién soy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sobre mí
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Texto */}
          <div className="flex-1">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Soy estudiante de Tecnología en Desarrollo de Sistemas de Información 
              y de Software en la Universidad Santiago de Cali, próximo a iniciar 
              prácticas profesionales.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Me apasiona construir productos web completos, desde el backend hasta 
              la interfaz. He trabajado con tecnologías como Node.js, React, bases 
              de datos relacionales y no relacionales, y tengo base en redes y 
              administración de sistemas Linux.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aprendo de forma autónoma y constante, lo que me ha llevado a 
              certificarme en áreas como ciberseguridad y cloud mientras curso 
              mi carrera.
            </p>
          </div>

          {/* Datos rápidos */}
          <div className="flex flex-col gap-4 md:w-72">
            {[
              { label: "Universidad", value: "USC Cali" },
              { label: "Carrera", value: "Tec. Sistemas" },
              { label: "Estado", value: "Buscando prácticas" },
              { label: "Ubicación", value: "Cali, Colombia" },
              { label: "Email", value: "estebanmrojas13@gmail.com" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-3 border-b border-gray-100"
              >
                <span className="text-gray-400 text-sm font-medium">
                  {item.label}
                </span>
                <span className="text-gray-700 text-sm font-semibold">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About