/**
 * The people behind GrayNest, shown on /team.
 *
 * Names only for now: PRODUCT.md forbids inventing titles, bios or numbers.
 * Add `role` (and `bio`) per person once the owner supplies them; the page
 * renders them automatically when present.
 */
export type TeamMember = {
  name: string
  role?: string
  bio?: string
}

export const TEAM: TeamMember[] = [
  { name: "Jihad Badran" },
  { name: "Firas Nassar" },
  { name: "Ahmad Alkhatib" },
]
