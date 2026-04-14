function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-2">
            Hablemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contacto
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Texto izquierda */}
          <div className="flex-1">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Estoy buscando oportunidades de prácticas profesionales. 
              Si tienes un proyecto interesante o quieres hablar, 
              no dudes en escribirme.
            </p>

            {/* Links de contacto */}
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Email",
                  value: "estebanmrojas13@gmail.com",
                  href: "mailto:estebanmrojas13@gmail.com",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/estebanmarta",
                  href: "https://linkedin.com/in/estebanmarta",
                },
                {
                  label: "GitHub",
                  value: "github.com/estebanzz",
                  href: "https://github.com/estebanzz",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-gray-400 text-sm w-20 font-medium">
                    {item.label}
                  </span>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-200">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Card derecha */}
          <div className="md:w-80 bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6 h-fit">
            <div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-1">
                Estado actual
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-gray-700 font-semibold text-sm">
                  Disponible para prácticas
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-1">
                Ubicación
              </p>
              <p className="text-gray-700 font-semibold text-sm">
                Cali, Colombia
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-1">
                Modalidad
              </p>
              <p className="text-gray-700 font-semibold text-sm">
                Presencial o remoto
              </p>
            </div>

            <a
              href="mailto:estebanmrojas13@gmail.com"
              className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-sm"
            >
              Enviar mensaje
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact