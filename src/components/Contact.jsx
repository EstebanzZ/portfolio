import Reveal from "./Reveal"

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString().trim() || ""
    const email = formData.get("email")?.toString().trim() || ""
    const message = formData.get("message")?.toString().trim() || ""

    const subject = encodeURIComponent(`Contacto portfolio - ${name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nDescripción:\n${message}`,
    )

    window.location.href = `mailto:estebanmrojas13@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Reveal as="section" id="contacto" className="bg-white px-4 py-18 sm:px-6">
      <div className="mx-auto max-w-6xl">

        <Reveal className="mb-12">
          <h2 className="mt-3 text-3xl font-bold text-titles md:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 max-w-2xl text-text-body">
            Estoy en búsqueda de prácticas profesionales. Si tienes una oportunidad o
            quieres conversar sobre un proyecto, me encantará leerte.
          </p>
        </Reveal>

        <Reveal
          className="mx-auto max-w-3xl rounded-4xl border border-divisor bg-[linear-gradient(180deg,rgba(204,238,238,0.52)_0%,rgba(255,255,255,1)_100%)] p-6 shadow-[0_18px_40px_rgba(17,24,39,0.08)] sm:p-8"
          delay={0.05}
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-titles">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-divisor bg-white px-4 py-3 text-sm text-titles outline-none transition focus:border-primary"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-titles">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-divisor bg-white px-4 py-3 text-sm text-titles outline-none transition focus:border-primary"
                  placeholder="tuemail@dominio.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-titles">
                Descripción
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full resize-none rounded-xl border border-divisor bg-white px-4 py-3 text-sm text-titles outline-none transition focus:border-primary"
                placeholder="Cuéntame sobre tu proyecto u oportunidad"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl border border-divisor bg-primary px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              Enviar correo
            </button>
          </form>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default Contact