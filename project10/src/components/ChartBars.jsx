import React, { useMemo } from 'react';

export default function ChartBars() {
  const numBars = 45;
  
  // Generate stable random data for the chart
  const bars = useMemo(() => {
    return Array.from({ length: numBars }).map((_, i) => {
      const baseH = Math.random() * 40 + 10;
      const alphaH = Math.random() * 30 + (i > numBars / 2 ? 20 : 5);
      const varH = Math.random() * 10;
      return { baseH, alphaH, varH, id: i };
    });
  }, []);

  return (
    <div className="relative z-10 w-full h-full flex items-end justify-between gap-[2px]">
      {bars.map((bar) => (
        <div key={bar.id} className="w-1.5 flex flex-col justify-end gap-[1px] h-full group">
          <div 
            className="w-full bg-white/20 rounded-[1px] transition-all group-hover:bg-white/40" 
            style={{ height: `${bar.varH}%` }} 
          />
          <div 
            className="w-full bg-yellow-400 rounded-[1px] opacity-80 group-hover:opacity-100 transition-colors group-hover:shadow-[0_0_8px_rgba(250,204,21,0.6)]" 
            style={{ height: `${bar.alphaH}%` }} 
          />
          <div 
            className="w-full bg-[#00ffa8] rounded-[1px] opacity-80 group-hover:opacity-100 group-hover:bg-[#00ffcc] transition-colors group-hover:shadow-[0_0_8px_rgba(0,255,168,0.6)]" 
            style={{ height: `${bar.baseH}%` }} 
          />
        </div>
      ))}
    </div>
  );
}