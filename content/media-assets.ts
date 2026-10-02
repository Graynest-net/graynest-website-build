export interface MediaAsset {
  src: string
  width: number
  height: number
  /** CSS object-position when the slot crops the asset. */
  position?: string
}

/**
 * Slot id → delivered asset. A slot with no entry renders the branded placeholder.
 */
export const MEDIA_ASSETS: Record<string, MediaAsset> = {
  // Square sources in a door panel: tall crop on desktop, wide crop on mobile, so both axes are set.
  "home.hero.agents": { src: "/media/home.hero.agents.webp", width: 1024, height: 1024, position: "50% 38%" },
  "home.hero.software": { src: "/media/home.hero.software.webp", width: 1024, height: 1024, position: "56% 36%" },
  // The delivered files are swapped: home.service.agents.card.webp holds the engineer scene
  // and home.service.software.card.webp holds the shop-owner scene, so the sources are crossed here.
  "home.service.agents.card": { src: "/media/home.service.software.card.webp", width: 896, height: 1120 },
  "home.service.software.card": { src: "/media/home.service.agents.card.webp", width: 896, height: 1120 },
  "home.principle.puzzle": { src: "/media/home.principle.puzzle.webp", width: 1024, height: 1024 },
  "home.principle.hourglass": { src: "/media/home.principle.hourglass.webp", width: 1024, height: 1024 },
  "home.principle.roadmap": { src: "/media/home.principle.roadmap.webp", width: 1024, height: 1024 },
  "home.cta.welcome": { src: "/media/home.cta.welcome.webp", width: 1344, height: 752, position: "70% 4%" },
  "method.plan.workflow": { src: "/media/method.plan.workflow.webp", width: 1600, height: 1200 },
  "method.ship.web": { src: "/media/method.ship.web.webp", width: 1600, height: 1117 },
  "work.nutrifit.web": { src: "/media/work.nutrifit.web.webp", width: 1600, height: 1200 },
  "work.nutrifit.mobile": { src: "/media/work.nutrifit.mobile.webp", width: 1600, height: 1200 },
  "agents.hero.bg": { src: "/media/agents.hero.bg.webp", width: 1344, height: 752, position: "62% 50%" },
  "agents.meet.persona": { src: "/media/agents.meet.persona.webp", width: 1024, height: 1024 },
  "agents.cta.welcome": { src: "/media/agents.cta.welcome.webp", width: 1344, height: 752, position: "72% 50%" },
  "agents.process.kanban": { src: "/media/agents.process.kanban.webp", width: 1344, height: 576 },
  "agents.handoff.scene": { src: "/media/agents.handoff.scene.webp", width: 896, height: 1120 },
  "software.hero.bg": { src: "/media/software.hero.bg.webp", width: 1344, height: 752, position: "68% 50%" },
  "agents.uc.retail.scene": { src: "/media/agents.uc.retail.scene.webp", width: 1024, height: 688 },
  "agents.uc.clinic.scene": { src: "/media/agents.uc.clinic.scene.webp", width: 1024, height: 688 },
  "agents.uc.bakery.scene": { src: "/media/agents.uc.bakery.scene.webp", width: 2048, height: 1360 },
  "agents.uc.support.scene": { src: "/media/agents.uc.support.scene.webp", width: 1024, height: 688 },
  "agents.uc.leads.scene": { src: "/media/agents.uc.leads.scene.webp", width: 1024, height: 688 },
  "software.uc.mvp.scene": { src: "/media/software.uc.mvp.scene.webp", width: 1530, height: 1028 },
  "software.uc.ai.scene": { src: "/media/software.uc.ai.scene.webp", width: 1530, height: 1028 },
  "software.uc.legacy.scene": { src: "/media/software.uc.legacy.scene.webp", width: 2048, height: 1360 },
  "global.404": { src: "/media/global.404.webp", width: 1344, height: 752 },
}
