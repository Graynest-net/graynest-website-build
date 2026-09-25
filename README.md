# graynest-website-build

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_c6bKMmvfGNzMo2Yh7KvSPY95Bx5p)

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### ElevenLabs support agent

The sitewide **Ask GrayNest** widget uses `@elevenlabs/react` for Talk (voice) and Chat (text).

1. Create a public ElevenLabs agent (Advanced → authentication disabled for the embed/SDK public flow).
2. Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_...
# optional
NEXT_PUBLIC_AGENT_PHONE=+970...
NEXT_PUBLIC_AGENT_WHATSAPP=970...
```

3. Restart the dev server. The floating pill and “Talk to our agent” CTAs open the same drawer.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [ElevenLabs Agents React SDK](https://elevenlabs.io/docs/agents-platform/libraries/react)
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
