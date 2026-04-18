import { useState } from "react"
import Reveal from "./Reveal"
import { techStack } from "../data/techStack"

function TechStack() {
  const [isPaused, setIsPaused] = useState(false)
  const carouselItems = [...techStack, ...techStack, ...techStack]

  return (
    <Reveal as="section" id="tecnologias" className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <h2 className="mt-3 text-3xl font-bold text-titles md:text-4xl">
            Tech Stack
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="relative overflow-hidden rounded-4xl border border-divisor bg-[linear-gradient(180deg,rgba(204,238,238,0.6)_0%,rgba(255,255,255,0.96)_100%)] px-4 py-8 shadow-[0_30px_80px_rgba(17,24,39,0.08)] sm:px-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <style>{`
              @keyframes techStackMarquee {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-33.333333%);
                }
              }
            `}</style>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
            <div className="pointer-events-none absolute -left-24 top-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-44 w-44 rounded-full bg-secondary/10 blur-3xl" />

            <div
              className="flex w-max gap-5 pb-4 select-none will-change-transform"
              style={{
                animation: "techStackMarquee 28s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {carouselItems.map((tech, index) => {
                const isDuplicate = index >= techStack.length * 2
                const iconSizeClass = tech.id === "react" ? "h-16 w-16" : "h-12 w-12"

                return (
                  <article
                    key={`${tech.id}-${index}`}
                    aria-hidden={isDuplicate}
                    className="group relative flex w-56 shrink-0 flex-col items-center pt-3"
                  >
                    <div className="relative flex h-40 w-full items-end justify-center">
                      <div className="absolute bottom-0 h-18 w-36 rounded-3xl border border-divisor bg-[linear-gradient(180deg,#E5E7EB_0%,#CCEEEE_100%)] shadow-[0_18px_30px_rgba(17,24,39,0.12)]" />
                      <div className="absolute bottom-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-divisor bg-white shadow-[0_18px_30px_rgba(17,24,39,0.12)]">
                        <span
                          className="absolute -inset-4 rounded-full opacity-70 blur-2xl"
                          style={{ background: tech.glow }}
                        />
                        <img
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                          className={`relative z-10 ${iconSizeClass} object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transform-none`}
                        />
                      </div>
                      <div className="absolute bottom-2 h-3 w-28 rounded-full bg-primary/10 blur-sm" />
                    </div>

                    <div className="mt-1 text-center">
                      <h3 className="mt-1 text-xl font-semibold text-titles">{tech.name}</h3>
                      <p className="mt-2 text-sm text-text-body">{tech.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default TechStack