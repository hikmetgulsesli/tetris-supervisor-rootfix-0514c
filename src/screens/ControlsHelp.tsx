// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, MousePointerClick, RotateCw, Settings } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "button-2-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar (Brand Anchor) */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant flat flex justify-between items-center w-full px-container-padding-sm h-touch-target docked full-width top-0 z-50 sticky">
      <div className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary dark:text-primary">
                  ARCADE_TETRIS
              </div>
      <div className="flex items-center gap-2">
      {/* Inactive Trail Icon */}
      <button aria-label="Settings" className="text-on-surface-variant hover:bg-surface-variant transition-colors active:scale-95 duration-100 p-2 rounded-full flex items-center justify-center w-touch-target h-touch-target" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      {/* Active Trail Icon (Help Screen Context) */}
      <button aria-label="Help" className="text-primary font-bold bg-primary-container/10 hover:bg-surface-variant transition-colors active:scale-95 duration-100 p-2 rounded-full flex items-center justify-center w-touch-target h-touch-target" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-container-padding-sm py-8 md:py-12 flex flex-col gap-8 md:gap-12">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">System Manual</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Master the controls to achieve optimal flow state and dominate the leaderboards.</p>
      </div>
      {/* Bento Grid: Controls Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-gap md:gap-6">
      {/* Column 1: Keyboard Controls */}
      <div className="glass-panel rounded-xl border border-outline-variant p-6 md:p-8 flex flex-col gap-8 relative overflow-hidden group">
      {/* Ambient Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-center gap-3 border-b border-outline-variant pb-4 relative z-10">
      <Circle className="text-primary text-3xl" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-wide uppercase">Keyboard Interface</h2>
      </div>
      <div className="flex flex-col gap-6 relative z-10">
      {/* Control Row: Move */}
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Move Left / Right</span>
      <div className="flex gap-2">
      <div className="keycap font-label-md text-label-md text-on-surface">
      <ArrowLeft className="text-lg" aria-hidden={true} focusable="false" />
      </div>
      <div className="keycap font-label-md text-label-md text-on-surface">
      <ArrowRight className="text-lg" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <div className="h-px w-full bg-outline-variant/30"></div>
      {/* Control Row: Rotate */}
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Rotate Piece</span>
      <div className="keycap font-label-md text-label-md text-on-surface">
      <ArrowUp className="text-lg" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="h-px w-full bg-outline-variant/30"></div>
      {/* Control Row: Soft Drop */}
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Soft Drop</span>
      <div className="keycap font-label-md text-label-md text-on-surface">
      <ArrowDown className="text-lg" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="h-px w-full bg-outline-variant/30"></div>
      {/* Control Row: Hold */}
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Hold Piece</span>
      <div className="keycap keycap-tertiary font-label-md text-label-md">C</div>
      </div>
      <div className="h-px w-full bg-outline-variant/30"></div>
      {/* Control Row: Hard Drop (Highlighted) */}
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-primary tracking-wider uppercase flex items-center gap-2">
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
                                  Hard Drop
                              </span>
      <div className="keycap keycap-primary font-label-md text-label-md w-32 tracking-widest">SPACE</div>
      </div>
      </div>
      </div>
      {/* Column 2: Touch Controls */}
      <div className="glass-panel rounded-xl border border-outline-variant p-6 md:p-8 flex flex-col gap-8 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex items-center gap-3 border-b border-outline-variant pb-4 relative z-10">
      <MousePointerClick className="text-tertiary text-3xl" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-wide uppercase">Touch Interface</h2>
      </div>
      <div className="flex-1 flex items-center justify-center relative z-10">
      {/* Abstract Phone Screen Mockup */}
      <div className="w-full max-w-[280px] aspect-[9/16] bg-surface-container-lowest border-2 border-outline-variant rounded-[2.5rem] p-2 shadow-2xl relative">
      <div className="w-full h-full bg-surface border border-outline-variant/50 rounded-[2rem] overflow-hidden flex flex-col relative">
      {/* Internal Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none"></div>
      {/* Screen Top Section (Hold Area) */}
      <div className="h-1/4 border-b border-outline-variant/30 flex p-4">
      {/* Hold Box */}
      <div className="w-16 h-16 border-2 border-dashed border-tertiary/50 rounded-lg bg-tertiary/5 flex flex-col items-center justify-center gap-1">
      <Circle className="text-tertiary text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px] text-tertiary">TAP</span>
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full h-8 bg-surface-container-highest/50 rounded flex items-center justify-center">
      <span className="font-label-sm text-[10px] text-on-surface-variant tracking-widest">NEXT</span>
      </div>
      </div>
      </div>
      {/* Screen Middle Section (Drop Area) */}
      <div className="flex-1 relative border-b border-outline-variant/30 flex items-center justify-center bg-gradient-to-b from-transparent to-primary/5">
      <div className="flex flex-col items-center gap-2 opacity-60">
      <Circle className="text-on-surface text-4xl" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface tracking-widest bg-surface/80 px-2 py-1 rounded">SWIPE DOWN</span>
      </div>
      </div>
      {/* Screen Bottom Section (Move/Rotate Area) */}
      <div className="h-1/3 flex">
      {/* Left Half: Move D-Pad */}
      <div className="flex-1 border-r border-outline-variant/30 bg-surface-container flex flex-col items-center justify-center gap-3 p-2 relative">
      <span className="font-label-sm text-[10px] text-on-surface-variant absolute top-2">MOVE</span>
      <div className="flex gap-1 w-full justify-center">
      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
      <ArrowLeft className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
      <ArrowRight className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Right Half: Rotate */}
      <div className="flex-1 bg-surface-container-high flex flex-col items-center justify-center gap-3 p-2 relative">
      <span className="font-label-sm text-[10px] text-on-surface-variant absolute top-2">ROTATE</span>
      <div className="w-16 h-16 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,193,118,0.1)]">
      <RotateCw className="text-tertiary text-2xl" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Section: How to Play */}
      <div className="flex flex-col gap-6 mt-4">
      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight pl-2 border-l-4 border-primary">Core Mechanics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap md:gap-6">
      {/* Rule 1 */}
      <div className="bg-surface-container-low rounded-xl border border-outline-variant p-6 flex flex-col gap-4 hover:bg-surface-container transition-colors duration-300">
      <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center mb-2 border border-secondary-container/30">
      <Circle className="text-secondary text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Line Clears</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Fill a complete horizontal row with blocks to clear it from the well. Clearing multiple lines simultaneously yields exponentially higher score multipliers.</p>
      </div>
      {/* Rule 2 */}
      <div className="bg-surface-container-low rounded-xl border border-outline-variant p-6 flex flex-col gap-4 hover:bg-surface-container transition-colors duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-2 border border-primary-container/30">
      <Circle className="text-primary text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Leveling Up</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Clear ten lines to advance to the next level. Gravity increases with each tier, requiring faster reflexes and predictive placement strategies.</p>
      </div>
      {/* Rule 3 */}
      <div className="bg-surface-container-low rounded-xl border border-outline-variant p-6 flex flex-col gap-4 hover:bg-surface-container transition-colors duration-300">
      <div className="w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center mb-2 border border-outline-variant">
      <Circle className="text-on-surface text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Ghost Piece</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Utilize the high-transparency outline at the bottom of the grid. It precisely indicates where your active piece will land, enabling rapid hard drops without hesitation.</p>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
