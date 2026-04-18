import emailIcon from "../assets/email.svg"
import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.svg"

function Footer() {
	return (
		<footer className="bg-white px-4 pb-10 pt-2 sm:px-6">
			<div className="mx-auto max-w-6xl">
				<div className="h-0.5 w-full bg-linear-to-r from-transparent via-divisor to-transparent" />

				<div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
					<p className="text-xs text-text-secondary sm:text-sm">
						© 2026 Esteban Marta. Todos los derechos reservados.
					</p>

					<div className="flex items-center gap-3">
						<a
							href="mailto:estebanmrojas13@gmail.com"
							aria-label="Email"
							className="rounded-md p-1 transition hover:bg-soft/45"
						>
							<img src={emailIcon} alt="Email" className="h-4 w-4" />
						</a>
						<a
							href="https://linkedin.com/in/estebanmarta"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							className="rounded-md p-1 transition hover:bg-soft/45"
						>
							<img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
						</a>
						<a
							href="https://github.com/estebanzz"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							className="rounded-md p-1 transition hover:bg-soft/45"
						>
							<img src={githubIcon} alt="GitHub" className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
