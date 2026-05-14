// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Play } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "controls-help-2" | "options-3" | "high-scores-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Ambient Background Layer */}
      <div className="fixed inset-0 z-0">
      {/* Blurred Gameplay Image */}
      <div className="absolute inset-0 bg-cover bg-center scale-105" data-alt="A static, heavily blurred background showing an intense arcade puzzle game session. Bright neon blue, orange, and purple geometric shapes are faintly visible falling against a pitch-black, deep obsidian void. The lighting mimics a retro-futuristic darkroom environment, creating a high-contrast, moody atmosphere that sets an urgent, competitive tone while remaining out of focus." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0P_7qR7VoSWuCcapNRrPHvN53NgvNh4NpfcrgOg7b5FMVJbz5So-W6MGPOU5cjcik9L-CdhG2WEH92Fj5-jrSd3mgD_JpPRu5BL2E_30Y1eyy9ytynsUk5YwVGk1CY1JIRAeZW9ZYLiulEYI3o1-XEA7-wayxvd8R706w8xQd20ByBNIv-gywQyblP_AzZD_TropG6d_ENdU9RhJNEMZStLuU6kh6pBi2CPQ7V3rkDHNZdFpBR9c2caY9U5I3JgWIeIIt2lTunQQ')"}}>
      </div>
      {/* Heavy Obsidian Overlay & Blur */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[12px]"></div>
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: "0.15"}}>
      </div>
      </div>
      {/* Main Content Canvas */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-container-padding-sm py-container-padding-lg">
      {/* Center Console Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-12">
      {/* Branding Header */}
      <div className="flex flex-col items-center text-center gap-2">
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter drop-shadow-[0_0_24px_rgba(142,213,255,0.7)] select-none">
                          TETRIS
                      </h1>
      <div className="flex items-center gap-3 opacity-80">
      <div className="h-[1px] w-8 bg-outline-variant"></div>
      <span className="font-label-md text-label-md text-on-surface-variant tracking-[0.2em] select-none">SUPERVISOR</span>
      <div className="h-[1px] w-8 bg-outline-variant"></div>
      </div>
      </div>
      {/* Action Menu */}
      <nav aria-label="Main Menu" className="flex flex-col w-full gap-stack-gap">
      {/* Primary Action */}
      <button className="group relative flex items-center justify-center w-full min-h-[56px] bg-primary/10 border border-primary text-primary font-headline-sm text-headline-sm transition-colors duration-200 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(142,213,255,0.4)] active:scale-[0.98] active:bg-primary active:text-on-primary rounded-DEFAULT overflow-hidden" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
      <Play className="absolute left-container-padding-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-colors duration-300" aria-hidden={true} focusable="false" />
                          Start Game
                          <Play className="absolute right-container-padding-sm opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-colors duration-300" aria-hidden={true} focusable="false" />
      </button>
      {/* Secondary Actions List */}
      <div className="flex flex-col w-full gap-base mt-2">
      <button className="flex items-center justify-center w-full min-h-[touch-target] bg-surface-container-low/50 border border-outline-variant text-on-surface font-label-md text-label-md transition-colors duration-150 hover:bg-surface-variant hover:border-primary/50 hover:text-primary active:scale-[0.98] rounded-DEFAULT" type="button" data-action-id="controls-help-2" onClick={actions?.["controls-help-2"]}>
                              Controls Help
                          </button>
      <button className="flex items-center justify-center w-full min-h-[touch-target] bg-surface-container-low/50 border border-outline-variant text-on-surface font-label-md text-label-md transition-colors duration-150 hover:bg-surface-variant hover:border-primary/50 hover:text-primary active:scale-[0.98] rounded-DEFAULT" type="button" data-action-id="options-3" onClick={actions?.["options-3"]}>
                              Options
                          </button>
      <button className="flex items-center justify-center w-full min-h-[touch-target] bg-surface-container-low/50 border border-outline-variant text-on-surface font-label-md text-label-md transition-colors duration-150 hover:bg-surface-variant hover:border-primary/50 hover:text-primary active:scale-[0.98] rounded-DEFAULT" type="button" data-action-id="high-scores-4" onClick={actions?.["high-scores-4"]}>
                              High Scores
                          </button>
      </div>
      </nav>
      {/* Bottom Status indicator (Optional decorative element to ground the UI) */}
      <div className="absolute bottom-container-padding-lg flex items-center gap-2 opacity-50">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(142,213,255,0.8)]"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">System Online</span>
      </div>
      </div>
      </main>
    </>
  );
}
