# How we work — Remotion source

Source for the homepage film (`public/media/how-we-work*.mp4`). It's a separate
project: Next.js ignores this folder (`tsconfig.json` excludes `video`).

```bash
cd video
pnpm install
pnpm exec remotion studio          # live preview
pnpm exec remotion render HowWeWork out/how-we-work.mp4 --codec=h264 --crf=16
```

Then encode the web copies and poster into the site:

```bash
ffmpeg -i out/how-we-work.mp4 -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart -an ../public/media/how-we-work.mp4
ffmpeg -i out/how-we-work.mp4 -vf scale=1280:-2 -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart -an ../public/media/how-we-work-720.mp4
ffmpeg -ss 10.9 -i out/how-we-work.mp4 -frames:v 1 poster.png && cwebp -q 82 -resize 1600 900 poster.png -o ../public/media/how-we-work-poster.webp
```

- Camera keyframes: `src/flow/Camera.tsx`
- Big words and their timing: `src/HowWeWork.tsx`
- Liquid glass style: `liquid()` in `src/brand.ts`
