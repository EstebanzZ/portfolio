import { useState, useEffect } from "react"

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Sobre mí", "Proyectos", "Contacto"]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#hero" className="text-2xl font-bold text-titles">
          Esteban<span className="text-primary">.</span>
        </a>

        {/* Links escritorio */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
              
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-titles hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-titles"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-titles hover:text-blue-600 text-sm font-medium"
                  onClick={() => setMenuAbierto(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar