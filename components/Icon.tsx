import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  House,
  Mail,
  MessageSquare,
  Phone,
  PhoneOff,
  Play,
  Send,
  X,
  type LucideIcon,
} from "lucide-react"

// Lucide ships no brand icons, so WhatsApp stays a hand-drawn stroke path.
const WHATSAPP_PATH =
  "M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"

const ICONS = {
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  "arrow-up-right": ArrowUpRight,
  phone: Phone,
  "phone-off": PhoneOff,
  send: Send,
  calendar: Calendar,
  message: MessageSquare,
  mail: Mail,
  play: Play,
  x: X,
  home: House,
} satisfies Record<string, LucideIcon>

type IconProps = {
  name: keyof typeof ICONS | "whatsapp"
  size?: number
  strokeWidth?: number
  className?: string
}

export function Icon({ name, size = 16, strokeWidth = 2, className = "" }: IconProps) {
  if (name === "whatsapp") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d={WHATSAPP_PATH} />
      </svg>
    )
  }

  const Lucide = ICONS[name]
  return <Lucide size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}
