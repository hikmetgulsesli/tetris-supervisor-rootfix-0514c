// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home, Settings } from "lucide-react";


export type GameOptionsActionId = "arrow-back-1" | "reset-to-defaults-2";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* Desktop Side Navigation */}
      <aside className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary docked left-0 h-full w-64 border-r border-outline-variant flat hidden lg:flex flex-col h-full py-6 gap-stack-gap z-10 shrink-0">
      <div className="px-6 mb-8">
      <h1 className="font-display-lg text-display-lg text-primary-fixed-dim tracking-widest uppercase">NEON_TETRIS</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-2">V2.0.4-STABLE</p>
      </div>
      <nav className="flex flex-col gap-2 w-full mt-4">
      <a className="flex items-center gap-4 px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors active:translate-x-1 duration-150 rounded-r-full mr-4" href="#">
      <Home aria-hidden={true} focusable="false" />
                      Home
                  </a>
      <a className="flex items-center gap-4 px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors active:translate-x-1 duration-150 rounded-r-full mr-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Classic
                  </a>
      <a className="flex items-center gap-4 px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors active:translate-x-1 duration-150 rounded-r-full mr-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Marathon
                  </a>
      <a className="flex items-center gap-4 px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors active:translate-x-1 duration-150 rounded-r-full mr-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Sprint
                  </a>
      <a className="flex items-center gap-4 px-6 py-3 font-label-md text-label-md bg-primary-container text-on-primary-container font-bold rounded-r-full mr-4 active:translate-x-1 duration-150 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)]" href="#">
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </nav>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      {/* Mobile Top App Bar (Settings Context - Replaces primary nav cluster on mobile) */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-container-padding-sm h-touch-target lg:hidden z-20 shrink-0">
      <div className="flex items-center gap-2">
      <button className="material-symbols-outlined text-on-surface hover:bg-surface-variant transition-colors active:scale-95 duration-100 p-2 rounded-full cursor-pointer" type="button" data-action-id="arrow-back-1" onClick={actions?.["arrow-back-1"]}>arrow_back</button>
      <div className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary dark:text-primary uppercase">ARCADE_TETRIS</div>
      </div>
      <div className="flex gap-2">
      <Circle className="text-on-surface-variant hover:bg-surface-variant transition-colors active:scale-95 duration-100 p-2 rounded-full cursor-pointer" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Scrollable Settings Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding-sm lg:p-container-padding-lg w-full">
      <div className="max-w-3xl mx-auto pb-safe lg:pb-12">
      {/* Page Header */}
      <div className="mb-stack-gap flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b border-outline-variant pb-4 mt-4 lg:mt-0">
      <div>
      <h2 className="font-headline-md text-headline-md text-primary tracking-tight">System Configuration</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Adjust game parameters to your preference.</p>
      </div>
      <button className="font-label-md text-label-md text-error hover:bg-error/10 border border-error/30 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 h-touch-target active:scale-95 duration-150" type="button" data-action-id="reset-to-defaults-2" onClick={actions?.["reset-to-defaults-2"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                              Reset to Defaults
                          </button>
      </div>
      <div className="space-y-stack-gap mt-8">
      {/* Gameplay Section */}
      <section className="bg-surface-container rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-outline-variant/50 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-tertiary-container group-hover:shadow-[0_0_15px_rgba(241,160,43,0.5)] transition-shadow"></div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
      <Circle className="text-tertiary-container" aria-hidden={true} focusable="false" />
                                  Gameplay
                              </h3>
      <div className="space-y-8">
      {/* Starting Level */}
      <div>
      <div className="flex justify-between items-center mb-4">
      <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Starting Level</label>
      <span className="font-label-md text-label-md text-tertiary-container bg-surface-variant px-3 py-1 rounded border border-outline-variant/50">Level 1</span>
      </div>
      <input className="w-full accent-tertiary-container" max="15" min="1" type="range" value="1" />
      <div className="flex justify-between text-on-surface-variant text-xs mt-2 font-label-sm">
      <span>1</span>
      <span>5</span>
      <span>10</span>
      <span>15</span>
      </div>
      </div>
      {/* Ghost Piece Toggle */}
      <div className="flex justify-between items-center py-2">
      <div className="pr-4">
      <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-1">Ghost Piece Toggle</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Display a wireframe projection of where the active tetrimino will land.</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-14 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-surface-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-tertiary-container peer-checked:after:bg-on-tertiary-container shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Audio Section */}
      <section className="bg-surface-container rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-outline-variant/50 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container group-hover:shadow-[0_0_15px_rgba(111,0,190,0.5)] transition-shadow"></div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
      <Circle className="text-secondary-fixed" aria-hidden={true} focusable="false" />
                                  Audio
                              </h3>
      <div className="space-y-8">
      {/* Music Volume */}
      <div>
      <div className="flex justify-between items-center mb-4">
      <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider flex items-center gap-2">
      <Circle className="text-[18px] text-secondary-fixed" aria-hidden={true} focusable="false" /> 
                                              Music Volume
                                          </label>
      <span className="font-label-md text-label-md text-secondary-fixed bg-surface-variant px-3 py-1 rounded border border-outline-variant/50">80%</span>
      </div>
      <input className="w-full accent-secondary-fixed" max="100" min="0" type="range" value="80" />
      </div>
      {/* SFX Volume */}
      <div>
      <div className="flex justify-between items-center mb-4">
      <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider flex items-center gap-2">
      <Circle className="text-[18px] text-secondary-fixed" aria-hidden={true} focusable="false" /> 
                                              SFX Volume
                                          </label>
      <span className="font-label-md text-label-md text-secondary-fixed bg-surface-variant px-3 py-1 rounded border border-outline-variant/50">100%</span>
      </div>
      <input className="w-full accent-secondary-fixed" max="100" min="0" type="range" value="100" />
      </div>
      </div>
      </section>
      {/* Graphics Section */}
      <section className="bg-surface-container rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-outline-variant/50 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-container group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-shadow"></div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
      <Circle className="text-primary-fixed" aria-hidden={true} focusable="false" />
                                  Graphics
                              </h3>
      <div className="space-y-6">
      {/* Grid Visibility */}
      <div className="flex justify-between items-center py-2 border-b border-outline-variant/30 pb-4">
      <div className="pr-4">
      <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-1">Grid Visibility</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Render 1px structural guidelines within the play matrix.</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-14 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-surface-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary-container shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"></div>
      </label>
      </div>
      {/* Particle Effects */}
      <div className="flex justify-between items-center py-2">
      <div className="pr-4">
      <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-1">Particle Effects</div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm">Enable high-performance line clear explosions and active piece glow.</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-14 h-7 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-surface-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-on-primary-container shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"></div>
      </label>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
