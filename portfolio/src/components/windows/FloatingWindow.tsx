import React, { useEffect, useRef, useState } from "react";
import { renderHtmlWithScripts } from "@/components/windows/htmlInjection";

type Pos = { x: number; y: number };
type Props = {
  id: string;
  title: string;
  zIndex: number;
  initialPos: Pos;
  width?: number;
  height?: number;
  contentHtml: string;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onFocus: (id: string) => void;
  onMove?: (id: string, pos: Pos) => void;
};

export function FloatingWindow({ id, title, zIndex, initialPos, width = 480, height = 320, contentHtml, onClose, onMinimize, onFocus, onMove }: Props) {
  const [pos, setPos] = useState<Pos>(initialPos);
  const [dragOffset, setDragOffset] = useState<Pos | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<Pos>(pos);
  useEffect(() => { posRef.current = pos; }, [pos]);

  useEffect(() => { if (contentRef.current) renderHtmlWithScripts(contentRef.current, contentHtml); }, [contentHtml]);

  useEffect(() => {
    if (!dragOffset) return;
    const onMoveDoc = (e: PointerEvent) => setPos({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    const onUp = () => { setDragOffset(null); onMove?.(id, posRef.current); };
    window.addEventListener("pointermove", onMoveDoc);
    window.addEventListener("pointerup", onUp, { once: true });
    return () => { window.removeEventListener("pointermove", onMoveDoc); };
  }, [dragOffset, id, onMove]);

  const startDrag = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  return (
    <div
      onMouseDown={() => onFocus(id)}
      style={{ position: "fixed", left: pos.x, top: pos.y, width, height, zIndex }}
      className="rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-gradient-to-br from-card via-card to-card/95 text-card-foreground overflow-hidden border border-primary/20 backdrop-blur-xl ring-1 ring-white/10"
    >
      <div
        className={`flex items-center justify-between bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-5 py-3 select-none border-b border-primary/20 backdrop-blur-sm ${dragOffset ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={startDrag}
      >
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors shadow-sm" />
          </div>
          <span className="text-sm font-semibold truncate text-foreground/90 tracking-tight">{title}</span>
        </div>
        <div className="flex gap-1 ml-3" onPointerDown={(e) => e.stopPropagation()}>
          <button 
            aria-label="Minimize" 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onMinimize(id); }}
            onPointerDown={(e) => e.stopPropagation()}
            className="h-8 w-8 rounded-lg hover:bg-primary/25 active:bg-primary/30 transition-all flex items-center justify-center group relative overflow-hidden"
            title="Réduire"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg className="w-4 h-4 text-foreground/70 group-hover:text-primary relative z-10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button 
            aria-label="Close" 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(id); }}
            onPointerDown={(e) => e.stopPropagation()}
            className="h-8 w-8 rounded-lg hover:bg-red-500/90 active:bg-red-600 transition-all flex items-center justify-center group relative overflow-hidden"
            title="Fermer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/0 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg className="w-4 h-4 text-foreground/70 group-hover:text-white relative z-10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={contentRef} style={{ height: "calc(100% - 56px)" }} className="overflow-auto p-5 bg-gradient-to-br from-background/30 to-background/10" />
    </div>
  );
}

export default FloatingWindow;

