// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw, Settings } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-game-2" | "options-3" | "exit-to-menu-4";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Dimmed Background Context (Active Game Board) */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-container-padding-lg p-container-padding-sm opacity-20 pointer-events-none filter blur-[2px]">
      {/* Left HUD (Desktop) / Top HUD (Mobile) */}
      <div className="flex md:flex-col gap-stack-gap order-2 md:order-1 items-end w-full md:w-32 justify-center">
      <div className="bg-surface-container rounded p-3 w-24 h-24 flex flex-col items-center justify-between border border-outline-variant">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Hold</span>
      <div className="w-10 h-10 border border-outline-variant/30 grid grid-cols-4 grid-rows-4 gap-grid-gutter p-[2px]">
      {/* Simulated T-Piece */}
      <div className="col-start-2 col-span-3 row-start-2 h-full flex items-center justify-center gap-grid-gutter">
      <div className="w-full h-full bg-secondary"></div>
      <div className="w-full h-full bg-secondary"></div>
      <div className="w-full h-full bg-secondary"></div>
      </div>
      <div className="col-start-3 row-start-1 w-full h-full bg-secondary"></div>
      </div>
      </div>
      <div className="bg-surface-container rounded p-3 w-24 flex flex-col items-center border border-outline-variant hidden md:flex">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Score</span>
      <span className="font-headline-md text-headline-md text-primary font-label-md">124k</span>
      </div>
      </div>
      {/* Central Game Matrix */}
      <div className="bg-surface-container-low border-2 border-outline-variant rounded p-1 order-1 md:order-2">
      <div className="w-[200px] h-[400px] bg-surface grid grid-cols-10 grid-rows-20 gap-grid-gutter p-grid-gutter border border-outline-variant/50 relative">
      {/* Grid Lines (CSS implementation) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3341551a_1px,transparent_1px),linear-gradient(to_bottom,#3341551a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      {/* Simulated Game State Blocks */}
      <div className="col-start-4 row-start-19 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-5 row-start-19 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-6 row-start-19 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-7 row-start-19 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-2 row-start-20 w-full h-full bg-tertiary-container relative z-10"></div>
      <div className="col-start-3 row-start-20 w-full h-full bg-tertiary-container relative z-10"></div>
      <div className="col-start-4 row-start-20 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-5 row-start-20 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-6 row-start-20 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-7 row-start-20 w-full h-full bg-primary-container relative z-10"></div>
      <div className="col-start-8 row-start-20 w-full h-full bg-error relative z-10"></div>
      <div className="col-start-9 row-start-20 w-full h-full bg-error relative z-10"></div>
      </div>
      </div>
      {/* Right HUD */}
      <div className="flex md:flex-col gap-stack-gap order-3 items-start w-full md:w-32 justify-center">
      <div className="bg-surface-container rounded p-3 w-24 h-32 flex flex-col items-center justify-start border border-outline-variant gap-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Next</span>
      <div className="w-8 h-8 grid grid-cols-2 gap-grid-gutter">
      <div className="bg-tertiary w-full h-full"></div>
      <div className="bg-tertiary w-full h-full"></div>
      <div className="bg-tertiary w-full h-full"></div>
      <div className="bg-tertiary w-full h-full"></div>
      </div>
      </div>
      <div className="bg-surface-container rounded p-3 w-24 flex flex-col items-center border border-outline-variant hidden md:flex">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Level</span>
      <span className="font-headline-md text-headline-md text-tertiary font-label-md">14</span>
      </div>
      </div>
      </div>
      {/* Pause Overlay (Active Layer) */}
      <div className="absolute inset-0 z-50 bg-background/70 backdrop-blur-xl flex flex-col items-center justify-center p-container-padding-sm">
      {/* Header */}
      <div className="mb-container-padding-lg text-center flex flex-col items-center gap-2">
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-widest uppercase drop-shadow-[0_0_15px_rgba(142,213,255,0.4)]">Paused</h1>
      <div className="flex gap-4 items-center bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant">
      <div className="flex items-center gap-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Score</span>
      <span className="font-label-md text-label-md text-on-surface">124,500</span>
      </div>
      <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
      <div className="flex items-center gap-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Level</span>
      <span className="font-label-md text-label-md text-tertiary">14</span>
      </div>
      </div>
      </div>
      {/* Menu Options */}
      <div className="w-full max-w-[320px] flex flex-col gap-stack-gap">
      <button className="w-full h-touch-target min-h-[56px] flex items-center justify-center gap-2 bg-primary text-on-primary rounded font-headline-sm text-headline-sm uppercase tracking-wide hover:bg-primary-fixed hover:shadow-[0_0_20px_rgba(142,213,255,0.3)] transition-colors active:scale-95 duration-100 group" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Resume
                  </button>
      <button className="w-full h-touch-target min-h-[56px] flex items-center justify-center gap-2 bg-surface-container border border-outline text-on-surface rounded font-label-md text-label-md uppercase tracking-wide hover:border-primary hover:text-primary hover:bg-surface-variant transition-colors active:scale-95 duration-100" type="button" data-action-id="restart-game-2" onClick={actions?.["restart-game-2"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                      Restart Game
                  </button>
      <button className="w-full h-touch-target min-h-[56px] flex items-center justify-center gap-2 bg-surface-container border border-outline text-on-surface rounded font-label-md text-label-md uppercase tracking-wide hover:border-primary hover:text-primary hover:bg-surface-variant transition-colors active:scale-95 duration-100" type="button" data-action-id="options-3" onClick={actions?.["options-3"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Options
                  </button>
      <button className="w-full h-touch-target min-h-[56px] flex items-center justify-center gap-2 bg-surface-container border border-outline-variant text-on-surface-variant rounded font-label-md text-label-md uppercase tracking-wide mt-4 hover:border-error hover:text-error hover:bg-surface-variant transition-colors active:scale-95 duration-100" type="button" data-action-id="exit-to-menu-4" onClick={actions?.["exit-to-menu-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Exit to Menu
                  </button>
      </div>
      </div>
    </>
  );
}
