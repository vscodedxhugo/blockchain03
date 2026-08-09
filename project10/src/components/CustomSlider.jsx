import React, { useRef, useState, useEffect } from 'react';

export default function CustomSlider({ value, onChange, colors }) {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleUpdate = (clientX) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    onChange(percent);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleUpdate(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) handleUpdate(e.clientX);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full h-8 flex items-center cursor-pointer group"
      ref={trackRef}
      onMouseDown={handleMouseDown}
    >
      {/* Background Track */}
      <div className="absolute inset-x-0 h-3 bg-[#06050a] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.02)] transition-all group-hover:shadow-[inset_0_2px_6px_rgba(0,0,0,1)]"></div>
      
      {/* Fill */}
      <div 
        className={`absolute left-0 h-3 ${colors.fill} rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-75`}
        style={{ width: `${value}%` }}
      ></div>
      
      {/* Thumb */}
      <div 
        className="absolute w-4 h-6 -ml-2 bg-gradient-to-b from-white to-gray-300 rounded shadow-[0_2px_8px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,1)] transition-transform duration-75 group-hover:scale-110"
        style={{ left: `${value}%` }}
      ></div>
    </div>
  );
}