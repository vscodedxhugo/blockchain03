import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize state on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Learn', path: '/learn' },
    { name: 'Trade', path: '/trade' },
    { name: 'Markets', path: '/markets' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <nav className={clsx(
      "sticky top-0 w-full max-w-7xl px-6 flex items-center justify-between z-50 transition-all duration-300",
      scrolled 
        ? "py-4 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.1] shadow-lg" 
        : "py-6 bg-transparent border-b border-white/[0.05]"
    )}>
      {/* Corner Brackets */}
      <div className={clsx(
        "absolute top-0 left-0 w-2 h-2 border-l border-t transition-colors duration-300",
        scrolled ? "border-white/40" : "border-white/20"
      )}></div>
      <div className={clsx(
        "absolute top-0 right-0 w-2 h-2 border-r border-t transition-colors duration-300",
        scrolled ? "border-white/40" : "border-white/20"
      )}></div>

      <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-white/30 transition-colors">
          <iconify-icon icon="solar:round-double-alt-arrow-down-outline" class="text-xl text-white" width="20" height="20" style={{ color: 'rgb(255, 255, 255)' }}></iconify-icon>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium tracking-wide uppercase leading-none group-hover:text-rose-500 transition-colors">NovaChain</span>
          <span className="text-[0.65rem] text-white/40 tracking-widest uppercase mt-0.5">Trading Protocol</span>
        </div>
      </Link>

      <div className="hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase text-white/60">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={clsx(
              "transition-colors hover:text-white",
              location.pathname === link.path ? "text-rose-500" : ""
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex w-24 justify-end">
         <button className="px-4 py-1.5 border border-rose-500/50 text-rose-500 text-[0.65rem] tracking-widest uppercase rounded-sm hover:bg-rose-500 hover:text-white transition-all">
            Connect
         </button>
      </div> 
    </nav>
  );
}