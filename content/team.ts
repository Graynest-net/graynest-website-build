/**
 * The people behind GrayNest, shown on /team.
 *
 * MOCK DATA: roles, bios, photos and social links below are placeholders so the
 * layout can be reviewed. PRODUCT.md forbids inventing titles or bios, so replace
 * every placeholder with owner-supplied content before launch. Links set to "#"
 * are dead on purpose; the page hides any link that is left undefined.
 */
export type TeamLink = { label: string; href: string }

export type TeamMember = {
  name: string
  role?: string
  about?: string
  /** Path under /public. Rendered in grayscale. */
  image?: string
  links?: TeamLink[]
}

const PLACEHOLDER_ABOUT =
  "Placeholder bio. A short paragraph about background, what they own at GrayNest, and what they care about building."

const PLACEHOLDER_LINKS: TeamLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
]

export const TEAM: TeamMember[] = [
  {
    name: "Jihad Badran",
    role: "Role placeholder",
    about: PLACEHOLDER_ABOUT,
    image: "/placeholder-user.jpg",
    links: PLACEHOLDER_LINKS,
  },
  {
    name: "Firas Nassar",
    role: "Role placeholder",
    about: PLACEHOLDER_ABOUT,
    image: "/placeholder-user.jpg",
    links: PLACEHOLDER_LINKS,
  },
  {
    name: "Ahmad Alkhatib",
    role: "Role placeholder",
    about: PLACEHOLDER_ABOUT,
    image: "/placeholder-user.jpg",
    links: PLACEHOLDER_LINKS,
  },
]
