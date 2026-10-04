import { cn } from '@/lib/utils';
import { BALL_COLORS } from '@/types/game';

interface BallProps {
  n: number;
  size?: number;
  pocketed?: boolean;
  isTarget?: boolean;
  dimmed?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Ball({ n, size = 44, pocketed, isTarget, dimmed, onClick, className }: BallProps) {
  const c = BALL_COLORS[n];
  const striped = n === 9;
  const fontSize = size * 0.34;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        'relative rounded-full select-none transition-all duration-300 shrink-0',
        onClick && 'cursor-pointer active:scale-90',
        pocketed && 'opacity-25 saturate-0 scale-90',
        dimmed && 'opacity-40',
        isTarget && 'ring-2 ring-offset-2 ring-offset-background',
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={`Ball ${n}${pocketed ? ' (pocketed)' : ''}${isTarget ? ' (next target)' : ''}`}
    >
      <span
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: striped
            ? `linear-gradient(to bottom, #f4f1e6 0%, #f4f1e6 22%, ${c.base} 22%, ${c.base} 78%, #f4f1e6 78%, #f4f1e6 100%)`
            : c.base,
          boxShadow: 'inset -3px -4px 8px rgba(0,0,0,0.45), inset 2px 3px 6px rgba(255,255,255,0.25), 0 4px 10px rgba(0,0,0,0.5)',
        }}
      >
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold"
          style={{ width: size * 0.52, height: size * 0.52, background: '#f4f1e6', color: '#16171b', fontSize, fontFamily: "'JetBrains Mono', monospace" }}
        >{n}</span>
        <span className="absolute rounded-full" style={{ width: size * 0.28, height: size * 0.16, left: size * 0.16, top: size * 0.1, background: 'rgba(255,255,255,0.55)', filter: 'blur(2px)', transform: 'rotate(-25deg)' }} />
      </span>
    </button>
  );
}