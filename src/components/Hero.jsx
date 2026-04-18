import meImage from "../assets/me.svg"
import arrow from "../assets/Arrow.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import email from "../assets/email.svg"
import Reveal from "./Reveal"

function Hero() {
  return (
    <Reveal
      as="section"
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
      amount={0.1}
    >

      <div className="max-w-5xl w-full flex flex-col h-full gap-12">
        {/* Avatar + Texto */}
        <Reveal className="flex flex-col md:flex-row items-center  pb-15 pt-15 sm:pb-20 sm:pt-35" delay={0.05}>
          <div>
        
          </div>
          {/* Avatar */}
          <div className="relative shrink-0 pt-14">
            <div className="pointer-events-none absolute -top-10 left-[110%] hidden -translate-x-[50%] items-center gap-2 text-text-secondary md:-top-14 md:flex">
              <img src={arrow} alt="Flecha" className="h-20 w-20 shrink-0  md:h-24 md:w-24 -translate-y-[-70%] " />
              <p className="whitespace-nowrap text-xs font-regular tracking-[0.08em] mt-23 -translate-x-[6%] ">
                en busca de practicas laborales
              </p>
            </div>
              <div className="relative w-68 h-68 md:w-72 md:h-72 rounded-full flex items-center justify-center">
              <div className="absolute -inset-6 rounded-full z-0 pointer-events-none
            bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-secondary)_50%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_0%,transparent)_68%)]">
            </div>
              <img src={meImage} alt="Esteban Marta" className="relative z-10 w-3/4 h-3/4 object-cover rounded-full" />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-titles font-medium mb-2 text-sm tracking-widest uppercase">

            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Hola, soy <br />
              <span className="text-primary">Esteban Marta</span>
            </h1>
            <p className="text-text-secondary text-lg mb-8 max-w-lg">
              Desarrollador Fullstack
            </p>
          </div>
        </Reveal>

        {/* Links sociales */}
        <Reveal className="flex gap-6 justify-end " delay={0.12}>
          <a
            href="https://github.com/estebanzz"
            target="_blank"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200 text-sm font-medium"
          >
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/estebanmarta"
            target="_blank"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200 text-sm font-medium"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="mailto:estebanmrojas13@gmail.com"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200 text-sm font-medium"
          >
            <img src={email} alt="Email" className="w-6 h-6" />
          </a>
        </Reveal>


      </div>
    </Reveal>
  )
}

export default Hero