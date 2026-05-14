// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu } from "lucide-react";


export type GameOverActionId = "replay-now-1" | "share-2" | "main-menu-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Main Canvas Content - Navigation Shell Suppressed due to Destination Rule (Game Over / Transactional) */}
      <main className="w-full max-w-[600px] flex flex-col gap-8 animate-fade-in">
      {/* Header Section */}
      <header className="text-center flex flex-col gap-2 relative">
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-error tracking-widest uppercase relative z-10" style={{textShadow: "0 0 20px rgba(255, 180, 171, 0.4)"}}>
                      GAME OVER
                  </h1>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                      Block Out Reached
                  </p>
      </header>
      {/* Bento Grid Summary */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-stack-gap">
      {/* Final Score (Spans 2 columns on all sizes for emphasis, or we make it bigger) */}
      <div className="col-span-2 md:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary opacity-50"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Final Score</span>
      <span className="font-display-lg-mobile text-display-lg-mobile text-primary font-black tracking-tight" style={{textShadow: "0 0 15px rgba(142, 213, 255, 0.3)"}}>
                          1,248,900
                      </span>
      </div>
      {/* Level Reached */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center h-24">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Level</span>
      <span className="font-headline-md text-headline-md text-on-surface">18</span>
      </div>
      {/* Lines Cleared */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center h-24">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Lines</span>
      <span className="font-headline-md text-headline-md text-on-surface">142</span>
      </div>
      {/* Play Time */}
      <div className="col-span-2 md:col-span-2 bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center h-24">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Play Time</span>
      <span className="font-headline-md text-headline-md text-on-surface">14:23.05</span>
      </div>
      </section>
      {/* Actions */}
      <section className="flex flex-col sm:flex-row gap-stack-gap w-full mt-2">
      {/* Primary Action */}
      <button className="flex-1 bg-primary text-on-primary h-touch-target rounded-full flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors active:scale-95 duration-100 group" type="button" data-action-id="replay-now-1" onClick={actions?.["replay-now-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Replay Now</span>
      </button>
      {/* Secondary Actions */}
      <div className="flex gap-stack-gap flex-1">
      <button className="flex-1 border border-outline-variant text-primary h-touch-target rounded-full flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors active:scale-95 duration-100" type="button" data-action-id="share-2" onClick={actions?.["share-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md hidden sm:inline">Share</span>
      </button>
      <button className="flex-1 border border-outline-variant text-primary h-touch-target rounded-full flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors active:scale-95 duration-100" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Menu aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md hidden sm:inline">Main Menu</span>
      </button>
      </div>
      </section>
      {/* High Scores Table */}
      <section className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden mt-4">
      <div className="p-4 border-b border-outline-variant bg-surface-container-high flex justify-between items-center">
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Leaderboard</h2>
      <Circle className="text-tertiary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      {/* Highlighted Current Run */}
      <div className="flex justify-between items-center py-3 px-4 border-b border-outline-variant bg-surface-variant bg-opacity-50 relative">
      <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
      <div className="flex items-center gap-4">
      <span className="font-label-md text-label-md text-primary w-6 text-center">#3</span>
      <span className="font-body-md text-body-md text-on-surface">YOU</span>
      </div>
      <span className="font-label-md text-label-md text-primary">1,248,900</span>
      </div>
      {/* Regular Rows */}
      <div className="flex justify-between items-center py-3 px-4 border-b border-outline-variant">
      <div className="flex items-center gap-4">
      <span className="font-label-md text-label-md text-on-surface-variant w-6 text-center">1</span>
      <span className="font-body-md text-body-md text-on-surface-variant">TETRIS_GOD</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">2,500,000</span>
      </div>
      <div className="flex justify-between items-center py-3 px-4 border-b border-outline-variant">
      <div className="flex items-center gap-4">
      <span className="font-label-md text-label-md text-on-surface-variant w-6 text-center">2</span>
      <span className="font-body-md text-body-md text-on-surface-variant">JONAS</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">1,890,200</span>
      </div>
      <div className="flex justify-between items-center py-3 px-4">
      <div className="flex items-center gap-4">
      <span className="font-label-md text-label-md text-on-surface-variant w-6 text-center">4</span>
      <span className="font-body-md text-body-md text-on-surface-variant">PLAYER_ONE</span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">950,000</span>
      </div>
      </div>
      </section>
      </main>
    </>
  );
}
