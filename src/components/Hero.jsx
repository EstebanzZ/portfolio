function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-600 font-medium mb-2 text-sm tracking-widest uppercase">

          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Hola, soy <br />
            <span className="text-blue-600">Esteban Marta</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Desarrollador Fullstack · Tecnología en Sistemas · USC Cali
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#proyectos"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Ver proyectos
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Descargar CV
            </a>
          </div>

          {/* Links sociales */}
          <div className="flex gap-6 mt-10 justify-center md:justify-start">
            <a
              href="https://github.com/estebanzz"
              target="_blank"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/estebanmarta"
              target="_blank"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:estebanmrojas13@gmail.com"
              className="text-gray-400 hover:text-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              Email
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-100 flex items-center justify-center text-6xl md:text-8xl font-bold text-blue-600">
            EM
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero