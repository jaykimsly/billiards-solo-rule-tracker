export type GameMode = 'solo' | 'versus';
export type SoloLevel = 1 | 2 | 3 | 4;

export interface SoloLevelConfig {
  level: SoloLevel;
  name: string;
  lives: number;
  description: string;
  rules: string[];
}

export const SOLO_LEVELS: SoloLevelConfig[] = [
  { level: 1, name: 'Warm-up', lives: 3, description: 'Slop allowed, ball-in-hand after scratch', rules: ['3 lives', 'Slop allowed', 'Ball-in-hand after scratch'] },
  { level: 2, name: 'Club Player', lives: 3, description: 'Call your pocket, scratch costs a life', rules: ['3 lives', 'Call your pocket', 'Scratch = lose 1 life', 'No ball-in-hand'] },
  { level: 3, name: 'Sharpshooter', lives: 2, description: 'Call every shot, miss = life lost', rules: ['2 lives', 'Call every shot', 'No ball-in-hand', 'Miss = life lost'] },
  { level: 4, name: 'Sudden Death', lives: 1, description: 'One life. Any mistake ends the rack.', rules: ['1 life', 'Call every shot', 'Any foul = rack lost', 'Miss = rack lost'] },
];

export type ShotOutcome = 'pot' | 'miss' | 'foul' | 'scratch' | 'win9';

export interface ShotLogEntry {
  id: number;
  outcome: ShotOutcome;
  ball: number | null;
  player: 0 | 1;
  label: string;
  delta: number | null;
}

export const BALL_COLORS: Record<number, { base: string; text: string }> = {
  1: { base: '#f6c90e', text: '#1a1a1a' },
  2: { base: '#2b5fd9', text: '#ffffff' },
  3: { base: '#e0332b', text: '#ffffff' },
  4: { base: '#7b3fb5', text: '#ffffff' },
  5: { base: '#f07c1e', text: '#1a1a1a' },
  6: { base: '#1d9e57', text: '#ffffff' },
  7: { base: '#8a2f2b', text: '#ffffff' },
  8: { base: '#17181c', text: '#ffffff' },
  9: { base: '#f6c90e', text: '#1a1a1a' },
};

export const SCORING = { BALL: 1, NINE: 5, MISS: -1, FOUL: -2, SCRATCH: -2, PERFECT: 13 } as const;