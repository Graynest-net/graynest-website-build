import { Reveal } from "@/components/Reveal"
import { TEAM } from "@/content/team"

/**
 * One full-width row card per team member: grayscale photo, role, about, links.
 */
export function TeamCards() {
  return (
    <ul className="col-span-full flex flex-col gap-[clamp(16px,2vw,32px)]">
      {TEAM.map((person, i) => (
        <li key={person.name} className="feature-card p-[clamp(24px,3vw,36px)]">
          <Reveal
            delay={i * 0.08}
            className="grid grid-cols-1 items-center gap-[clamp(20px,3vw,48px)] md:grid-cols-[minmax(0,260px)_1fr]"
          >
            {person.image && (
              <img
                src={person.image}
                alt={`Portrait of ${person.name}`}
                width={260}
                height={260}
                className="aspect-square w-full max-w-[260px] rounded-[24px] object-cover grayscale"
              />
            )}
            <div className="flex flex-col gap-4">
              <span className="micro">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="h3">{person.name}</h3>
              {person.role && <p className="micro">{person.role}</p>}
              {person.about && <p className="body">{person.about}</p>}
              {person.links && person.links.length > 0 && (
                <ul className="flex flex-wrap gap-3 pt-2" aria-label={`${person.name} on the web`}>
                  {person.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="btn-glass"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
