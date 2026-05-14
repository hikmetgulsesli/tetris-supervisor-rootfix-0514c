// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home, Pause, Play, RotateCw, Settings, User } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "button-6-6" | "button-7-7" | "button-8-8" | "button-9-9";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full py-6 gap-stack-gap bg-surface-container-low border-r border-outline-variant docked left-0 h-full w-64 z-20 shadow-2xl">
      <div className="px-6 mb-8">
      <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary-fixed-dim tracking-widest font-black uppercase">NEON_TETRIS</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 opacity-70">V2.0.4-STABLE</p>
      </div>
      <ul className="flex-1 flex flex-col gap-2">
      <li>
      <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 active:translate-x-1" href="#">
      <Home  data-icon="home" data-weight="fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Home</span>
      </a>
      </li>
      {/* Active State */}
      <li>
      <a className="flex items-center gap-4 px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded-r-full mr-4 transition-colors duration-150 active:translate-x-1 shadow-[0_0_15px_rgba(56,189,248,0.15)]" href="#">
      <Circle  data-icon="grid_view" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md uppercase">Classic</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 active:translate-x-1" href="#">
      <Circle  data-icon="timer" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Marathon</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 active:translate-x-1" href="#">
      <Circle  data-icon="speed" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Sprint</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto">
      <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-150 active:translate-x-1" href="#">
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-dim to-background">
      {/* TopAppBar (Mobile Header / Desktop Minimal Header) */}
      <header className="flex justify-between items-center w-full px-container-padding-sm h-touch-target bg-surface border-b border-outline-variant docked full-width top-0 z-20 md:bg-transparent md:border-none md:mt-4">
      <div className="md:hidden">
      <h1 className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary uppercase">ARCADE_TETRIS</h1>
      </div>
      <div className="hidden md:block">
      {/* Empty space on desktop to push actions right */}
      </div>
      <div className="flex items-center gap-4">
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors rounded-full active:scale-95 duration-100" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle  data-icon="help_outline" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors rounded-full active:scale-95 duration-100" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Game Canvas */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 gap-6 md:gap-12 pb-24 md:pb-8 h-full z-10">
      {/* Left HUD: Hold & Stats (Desktop) / Top (Mobile) */}
      <div className="flex flex-row md:flex-col gap-4 md:gap-8 w-full max-w-md md:w-auto justify-between md:justify-start order-1 md:order-1">
      {/* Hold Widget */}
      <div className="bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-4 flex flex-col items-center min-w-[100px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-4 tracking-widest">HOLD</h2>
      <div className="w-16 h-16 relative flex items-center justify-center">
      {/* O-Piece in Hold */}
      <div className="w-12 h-12 grid grid-cols-2 grid-rows-2 gap-[1px]">
      <div className="bg-tertiary-fixed block-inner-glow"></div>
      <div className="bg-tertiary-fixed block-inner-glow"></div>
      <div className="bg-tertiary-fixed block-inner-glow"></div>
      <div className="bg-tertiary-fixed block-inner-glow"></div>
      </div>
      </div>
      </div>
      {/* Stats Widget (Hidden on mobile top, moved to side) */}
      <div className="hidden md:flex flex-col gap-4 w-full">
      <div className="bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-4 text-right shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-1 tracking-widest">SCORE</h3>
      <p className="font-headline-md text-headline-md text-primary font-mono tabular-nums">042,590</p>
      </div>
      <div className="bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-4 text-right shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-1 tracking-widest">LEVEL</h3>
      <p className="font-headline-md text-headline-md text-on-surface font-mono tabular-nums">12</p>
      </div>
      <div className="bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-4 text-right shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-1 tracking-widest">LINES</h3>
      <p className="font-headline-md text-headline-md text-on-surface font-mono tabular-nums">84</p>
      </div>
      </div>
      </div>
      {/* Center: Game Board */}
      <div className="relative order-2 md:order-2 shrink-0 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden border-2 border-outline-variant bg-surface-container-lowest">
      {/* Small internal pause button overlay */}
      <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-surface-variant/80 backdrop-blur text-on-surface rounded hover:bg-primary/20 hover:text-primary z-50 transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause  data-icon="pause" className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      {/* Board Dimensions: 10x20 logic. 30px per cell = 300x600 px */}
      <div className="w-[280px] h-[560px] md:w-[320px] md:h-[640px] relative tetris-grid">
      {/* Falling T-Piece (Active Glow) */}
      {/* Positioned near top center */}
      <div className="absolute top-[15%] left-[40%] w-[30%] h-[10%] grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="col-start-2 bg-secondary block-inner-glow shadow-[0_0_12px_rgba(221,183,255,0.6)]"></div>
      <div className="col-start-1 row-start-2 bg-secondary block-inner-glow shadow-[0_0_12px_rgba(221,183,255,0.6)]"></div>
      <div className="col-start-2 row-start-2 bg-secondary block-inner-glow shadow-[0_0_12px_rgba(221,183,255,0.6)] z-10"></div>
      <div className="col-start-3 row-start-2 bg-secondary block-inner-glow shadow-[0_0_12px_rgba(221,183,255,0.6)]"></div>
      </div>
      {/* Ghost Piece (T-Piece Outline at bottom) */}
      <div className="absolute bottom-[10%] left-[40%] w-[30%] h-[10%] grid grid-cols-3 grid-rows-2 gap-[1px] opacity-40">
      <div className="col-start-2 border border-secondary bg-transparent"></div>
      <div className="col-start-1 row-start-2 border border-secondary bg-transparent"></div>
      <div className="col-start-2 row-start-2 border border-secondary bg-transparent"></div>
      <div className="col-start-3 row-start-2 border border-secondary bg-transparent"></div>
      </div>
      {/* Existing Block (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[10%] grid grid-cols-4 grid-rows-2 gap-[1px]">
      <div className="col-span-4 row-start-2 bg-primary-fixed-variant block-inner-glow opacity-80"></div>
      <div className="col-start-1 row-start-1 bg-primary-fixed-variant block-inner-glow opacity-80"></div>
      </div>
      </div>
      </div>
      {/* Right HUD: Next Queue (Desktop) / Top Right (Mobile) */}
      <div className="flex flex-col gap-6 w-full max-w-md md:w-auto order-3 md:order-3">
      <div className="bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-4 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-4 tracking-widest">NEXT</h2>
      <div className="flex flex-col gap-6 items-center w-16">
      {/* Next 1: I-Piece */}
      <div className="w-16 h-4 grid grid-cols-4 gap-[1px]">
      <div className="bg-primary-container block-inner-glow"></div>
      <div className="bg-primary-container block-inner-glow"></div>
      <div className="bg-primary-container block-inner-glow"></div>
      <div className="bg-primary-container block-inner-glow"></div>
      </div>
      {/* Next 2: Z-Piece */}
      <div className="w-12 h-8 grid grid-cols-3 grid-rows-2 gap-[1px] opacity-70 scale-90">
      <div className="col-start-1 bg-error block-inner-glow"></div>
      <div className="col-start-2 bg-error block-inner-glow"></div>
      <div className="col-start-2 row-start-2 bg-error block-inner-glow"></div>
      <div className="col-start-3 row-start-2 bg-error block-inner-glow"></div>
      </div>
      {/* Next 3: L-Piece */}
      <div className="w-12 h-8 grid grid-cols-3 grid-rows-2 gap-[1px] opacity-40 scale-75">
      <div className="col-start-3 bg-tertiary-container block-inner-glow"></div>
      <div className="col-start-1 row-start-2 bg-tertiary-container block-inner-glow"></div>
      <div className="col-start-2 row-start-2 bg-tertiary-container block-inner-glow"></div>
      <div className="col-start-3 row-start-2 bg-tertiary-container block-inner-glow"></div>
      </div>
      </div>
      </div>
      {/* Mobile specific stats row (visible only on mobile) */}
      <div className="flex md:hidden justify-between gap-4 mt-2">
      <div className="bg-surface/80 border border-outline-variant rounded flex-1 p-2 text-center">
      <p className="font-label-sm text-[10px] text-on-surface-variant tracking-widest">SCORE</p>
      <p className="font-label-md text-primary">042,590</p>
      </div>
      <div className="bg-surface/80 border border-outline-variant rounded flex-1 p-2 text-center">
      <p className="font-label-sm text-[10px] text-on-surface-variant tracking-widest">LVL</p>
      <p className="font-label-md text-on-surface">12</p>
      </div>
      </div>
      </div>
      {/* Mobile Controls (Bottom Absolute on Mobile, Hidden on Desktop) */}
      <div className="md:hidden absolute bottom-24 left-0 w-full flex justify-between px-6 z-20 pointer-events-none">
      {/* D-Pad area */}
      <div className="flex flex-col gap-2 pointer-events-auto">
      <div className="flex justify-center">
      <button className="w-12 h-12 bg-surface-variant/80 border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-primary active:text-on-primary transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle  data-icon="keyboard_arrow_up" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex gap-10">
      <button className="w-12 h-12 bg-surface-variant/80 border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-primary active:text-on-primary transition-colors" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Circle  data-icon="keyboard_arrow_left" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-12 h-12 bg-surface-variant/80 border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-primary active:text-on-primary transition-colors" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <Circle  data-icon="keyboard_arrow_right" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex justify-center">
      <button className="w-12 h-12 bg-surface-variant/80 border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-primary active:text-on-primary transition-colors" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <Circle  data-icon="keyboard_arrow_down" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-6 justify-end pb-4 pointer-events-auto">
      <button className="w-16 h-16 bg-surface-variant/80 border border-outline-variant rounded-full flex items-center justify-center text-on-surface active:bg-error active:text-on-error transition-colors shadow-lg self-end" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <RotateCw  data-icon="rotate_right" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-20 h-20 bg-primary-container/80 border border-primary border-opacity-50 rounded-full flex items-center justify-center text-on-primary-container active:bg-primary active:scale-95 transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)]" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <Circle  data-icon="keyboard_double_arrow_down" className="text-3xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center h-[72px] px-4 pb-safe bg-surface-container border-t border-outline-variant shadow-[0_-4px_20px_rgba(123,208,255,0.15)] rounded-t-xl">
      {/* Active */}
      <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full w-12 h-12 active:scale-90 duration-200 transition-colors" href="#">
      <Play  data-icon="play_arrow" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px] mt-1 font-bold absolute -bottom-4">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 duration-200" href="#">
      <Circle  data-icon="bar_chart" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px] mt-1">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 duration-200" href="#">
      <Circle  data-icon="emoji_events" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px] mt-1">Leaderboard</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-90 duration-200" href="#">
      <User  data-icon="person" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px] mt-1">Profile</span>
      </a>
      </nav>
    </>
  );
}
