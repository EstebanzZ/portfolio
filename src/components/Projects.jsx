import luPic from "../assets/LU-Pic.png"
import aquaPic from "../assets/aqua-PIC.png"
import react from "../assets/tech/react.svg"
import node from "../assets/tech/node-js.png"
import tailwind from "../assets/tech/tailwind.png"
import Reveal from "./Reveal"
import githubWhite from "../assets/github.svg"

const codeButtonClassName =
  "group inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(180deg,rgba(204,238,238,0.9)_0%,rgba(255,255,255,0.95)_100%)] px-2 py-2 border-2 border-divisor shadow-xs transition-all duration-300 ease-out hover:-translate-y-0.01 hover:scale-[1.01] hover:border-soft hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"


function Projects() {
  return (
    <Reveal as="section" id="proyectos" className="bg-white px-4 py-18 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-titles">
            Proyectos
          </h2>
        </Reveal>

        {/* Card*/}
        <div className="space-y-16">
          <Reveal className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-1" delay={0.05}>
            <div className="mb-1 text-left lg:hidden">
              <h2 className="text-xl font-semibold text-titles">Learn UP</h2>
              <p className="text-sm text-text-secondary">2025</p>
            </div>
            <div className="relative mx-auto h-56 w-full max-w-136 overflow-hidden rounded-tl-2xl rounded-r-2xl bg-[linear-gradient(180deg,rgba(204,238,238,0.9)_0%,rgba(255,255,255,0.95)_100%)] sm:h-64 md:h-72 lg:mx-0 lg:h-90 lg:max-w-none lg:w-220"> 
              <img src={luPic} alt="Foto de Learn UP" className="absolute bottom-0 left-0 h-[90%] w-[94%] object-cover object-bottom-left" />

            </div>
            <div className="relative flex flex-col gap-3 lg:h-90 lg:min-h-72 lg:justify-center lg:gap-0">
                <div className="mb-3 hidden text-right lg:absolute lg:top-0 lg:right-0 lg:mb-0 lg:block">
                <h2 className="text-xl font-semibold text-titles">Learn UP</h2>
                <p className="text-sm text-text-secondary">2025</p>
              </div>
              <div
                className="relative mr-auto w-full max-w-125 rounded-2xl border border-divisor bg-[linear-gradient(135deg,rgba(14,158,158,0.3)_0%,rgba(204,238,238,0.8)_52%,rgba(255,255,255,0.96)_100%)] p-4 text-white shadow-[0_12px_30px_rgba(17,24,39,0.08)] sm:p-6 lg:mr-0 lg:h-25 lg:w-125 lg:-ml-15" 

              >
              <p className="text-sm text-text-body">
                  Plataforma de aprendizaje interactivo con comunicación en tiempo real entre usuarios.
              </p>
              </div>
            <div className="mt-4 flex w-full max-w-110 items-center justify-start gap-6 lg:w-110 lg:justify-between lg:gap-0">
              <a
                href="https://github.com/estebanzz"
                target="_blank"
                rel="noreferrer"
                className={codeButtonClassName}
              >
                <img src={githubWhite} alt="GitHub" className="h-8 w-8 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6" />
                <p className="text-primary transition-transform duration-300 ease-out group-hover:translate-x-0.5">Code</p>
              </a>

              <div className="flex items-center gap-3">
                <img src={react} alt="React" className="h-5 w-5" />
                <img src={node} alt="Node.js" className="h-5 w-5" />
                <img src={tailwind} alt="Tailwind CSS" className="h-5 w-5" />
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-3 pt-6 sm:pt-8 lg:flex-row-reverse lg:items-end lg:gap-1 lg:pt-15" delay={0.12}>
            <div className="mb-1 text-right lg:hidden">
              <h2 className="text-xl font-semibold text-titles">Aqua</h2>
              <p className="text-sm text-text-secondary">2024</p>
            </div>
            <div className="relative mx-auto h-56 w-full max-w-136 overflow-hidden rounded-tr-2xl rounded-l-2xl bg-[linear-gradient(180deg,rgba(204,238,238,0.9)_0%,rgba(255,255,255,0.95)_100%)] sm:h-64 md:h-72 lg:mx-0 lg:h-90 lg:max-w-none lg:w-220"> 
              <img src={aquaPic} alt="Foto de Aqua" className="absolute bottom-0 right-0 h-[90%] w-[94%] object-cover object-bottom-right" />

            </div>
            <div className="relative flex flex-col gap-3 lg:h-90 lg:min-h-72 lg:justify-center lg:gap-0">
              <div className="mb-3 hidden text-right lg:absolute lg:top-0 lg:left-0 lg:mb-0 lg:block lg:text-left">
                <h2 className="text-xl font-semibold text-titles">Aqua</h2>
                <p className="text-sm text-text-secondary">2024</p>
              </div>
              <div
                className="relative ml-auto w-full max-w-125 rounded-2xl border border-divisor bg-[linear-gradient(225deg,rgba(14,158,158,0.3)_0%,rgba(204,238,238,0.8)_52%,rgba(255,255,255,0.96)_100%)] p-4 text-white shadow-[0_12px_30px_rgba(17,24,39,0.08)] sm:p-6 lg:ml-0 lg:h-25 lg:w-125 lg:-mr-15"
              >
                <p className="text-right text-sm text-text-body lg:text-left">
                  Sistema POS (Point of Sale) moderno para un restaurante de comida marina. 
                </p>
              </div>
              <div className="mt-4 ml-auto flex w-full max-w-110 items-center justify-end gap-6 lg:ml-0 lg:w-110 lg:justify-between lg:gap-0">
                <div className="flex items-center gap-3">
                  <img src={react} alt="React" className="h-5 w-5" />
                  <img src={node} alt="Node.js" className="h-5 w-5" />
                  <img src={tailwind} alt="Tailwind CSS" className="h-5 w-5" />
                </div>
                <a
                  href="https://github.com/estebanzz"
                  target="_blank"
                  rel="noreferrer"
                  className={codeButtonClassName}
                >
                  <img src={githubWhite} alt="GitHub" className="h-8 w-8 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6" />
                  <p className="text-primary transition-transform duration-300 ease-out group-hover:translate-x-0.5">Code</p>
                </a>

              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </Reveal>
  )
}

export default Projects