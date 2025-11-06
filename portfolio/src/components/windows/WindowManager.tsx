import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from "react";
import FloatingWindow from "@/components/windows/FloatingWindow";

export type WindowSpec = { title: string; contentHtml: string; width?: number; height?: number };
export type WindowManagerHandle = { createWindow: (spec: WindowSpec) => void };

type Item = {
  id: string; title: string; contentHtml: string; width: number; height: number;
  x: number; y: number; z: number; minimized: boolean;
};

const makeId = () => `w_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`;

export const WindowManager = forwardRef<WindowManagerHandle, {}>((_props, ref) => {
  const [items, setItems] = useState<Item[]>([]);
  const [nextZ, setNextZ] = useState(1000);

  const bringFront = useCallback((id: string) => {
    setItems((ws) => {
      const z = nextZ + 1; setNextZ(z);
      return ws.map(w => w.id === id ? { ...w, z } : w);
    });
  }, [nextZ]);

  const createWindow = useCallback((spec: WindowSpec) => {
    const id = makeId(); const width = spec.width ?? 480; const height = spec.height ?? 320;
    const offset = items.filter(i=>!i.minimized).length * 20;
    const x = 80 + (offset % 200); const y = 80 + (offset % 160);
    const z = nextZ + 1; setNextZ(z);
    setItems(ws => [...ws, { id, title: spec.title, contentHtml: spec.contentHtml, width, height, x, y, z, minimized: false }]);
  }, [items, nextZ]);

  useImperativeHandle(ref, () => ({ createWindow }), [createWindow]);

  const docked = useMemo(() => items.filter(w=>w.minimized), [items]);

  return (
    <>
      {docked.length > 0 && (
        <div className="fixed top-20 right-4 z-[10000] flex flex-col gap-2.5 p-3 rounded-xl bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-primary/20 shadow-2xl ring-1 ring-white/10">
          <div className="text-[10px] uppercase tracking-wider font-semibold text-foreground/50 mb-1 px-1">
            Fenêtres réduites
          </div>
          {docked.map(w => (
            <button 
              key={w.id} 
              onClick={() => {
                setItems(ws=>ws.map(i=>i.id===w.id?{...i,minimized:false}:i));
                bringFront(w.id);
              }}
              className="px-3.5 py-2.5 text-xs font-medium rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 hover:from-primary/25 hover:to-primary/15 border border-primary/30 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm flex items-center gap-2.5 group max-w-[220px] hover:scale-105 active:scale-95"
              title={w.title}
            >
              <svg className="w-4 h-4 text-primary/70 group-hover:text-primary flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="truncate text-foreground/80 group-hover:text-foreground font-semibold">{w.title}</span>
            </button>
          ))}
        </div>
      )}
      {items.filter(w=>!w.minimized).map(w => (
        <FloatingWindow key={w.id} id={w.id} title={w.title} zIndex={w.z}
          initialPos={{ x: w.x, y: w.y }} width={w.width} height={w.height} contentHtml={w.contentHtml}
          onClose={(id)=>setItems(ws=>ws.filter(i=>i.id!==id))}
          onMinimize={(id)=>setItems(ws=>ws.map(i=>i.id===id?{...i,minimized:true}:i))}
          onFocus={bringFront}
          onMove={(id,pos)=>setItems(ws=>ws.map(i=>i.id===id?{...i,x:pos.x,y:pos.y}:i))}
        />
      ))}
    </>
  );
});

export default WindowManager;

