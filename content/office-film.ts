/**
 * Shared camera bible for the day/night office scroll film.
 * Generate both clips with this path locked so scrub timing matches.
 */
export const OFFICE_FILM_CAMERA = {
  durationSeconds: 8,
  aspect: "16:9" as const,
  path: "Entrance → aisle between desks → glass meeting room at the far wall",
  move: "Slow forward tracking / dolly, gimbal-stable, no cuts",
  safeArea: "Keep the left ~35% relatively clear for live HTML typography",
}

export const OFFICE_FILM_SLOTS = {
  day: {
    id: "home.office.day",
    src: "/media/home.office.day.mp4",
    poster: "/media/home.office.day.poster.webp",
    label: "DAY · PEOPLE",
  },
  night: {
    id: "home.office.night",
    src: "/media/home.office.night.mp4",
    poster: "/media/home.office.night.poster.webp",
    label: "NIGHT · PERSONA",
  },
} as const

export interface OfficeFilmBeat {
  progress: number
  eyebrow: string
  line1: string
  line2: string
  accent: string
}

/**
 * Copy beats that reveal as the scroll-scrubbed film advances.
 */
export const OFFICE_FILM_BEATS: OfficeFilmBeat[] = [
  {
    progress: 0,
    eyebrow: "THE ROOM",
    line1: "SAME OFFICE.",
    line2: "Different shift.",
    accent: "Different shift.",
  },
  {
    progress: 0.45,
    eyebrow: "DAY / NIGHT",
    line1: "PEOPLE BUILD.",
    line2: "The agent holds.",
    accent: "holds.",
  },
  {
    progress: 0.78,
    eyebrow: "GRAYNEST",
    line1: "ONE TEAM.",
    line2: "Two shifts.",
    accent: "Two shifts.",
  },
]
