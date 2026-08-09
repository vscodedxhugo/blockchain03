import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import MaskedText from '../../components/MaskedText';

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section 
      ref={revealRef}
      className="w-full max-w-7xl min-h-[90vh] relative flex items-center border-b border-white/[0.05] overflow-hidden"
    >
      {/* Corner Brackets */}
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 z-20"></div>

      <div className="absolute inset-0 grid grid-cols-12 gap-6 px-6 h-full items-center">
        
        {/* Left Visual Area */}
        <div className="col-span-12 md:col-span-7 flex h-full relative items-center justify-center clip-slide delay-200">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-rose-500 opacity-5 blur-3xl animate-pulse"></div>
            
            {/* Layer 1: Outer metallic ring */}
            <div 
              className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent" 
              style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.5)" }}
            ></div>
            
            {/* Layer 2: Inner detailed ring */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/10 skeuo-card flex items-center justify-center relative overflow-hidden group">
              {/* Glowing Earth overlay */}
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fd82586-459e-48f9-a2bd-7afe624f242d_800w.webp" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" 
                alt="Glowing Earth with Global Cryptocurrency Network" 
              />
              
            </div>

            {/* Floating elements & Arrows to match composition */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center space-x-4">
              <div className="w-10 h-10 border border-pink-500/50 bg-pink-500/10 flex items-center justify-center rounded-sm hover:bg-pink-500/30 transition-colors cursor-pointer">
                <iconify-icon icon="solar:alt-arrow-left-linear" class="text-white/50 text-xl"></iconify-icon>
              </div>
            </div>
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex -space-x-2 z-10 animate-bounce">
              <iconify-icon icon="solar:double-alt-arrow-right-linear" class="text-6xl text-rose-500 opacity-80"></iconify-icon>
              <iconify-icon icon="solar:double-alt-arrow-right-linear" class="text-6xl text-white"></iconify-icon>
            </div>

            {/* Small labels */}
            <div className="absolute bottom-10 left-10 flex items-center space-x-3 text-xs tracking-wider uppercase cursor-pointer group">
              <div className="w-6 h-6 rounded-full border border-rose-500 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              </div>
              <span className="text-white/60 group-hover:text-white transition-colors">View platform<br/>audit</span>
            </div>
          </div>
        </div>

        {/* Right Text Area */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center relative z-10">
          <div className="flex items-center space-x-4 mb-4 clip-slide delay-100">
            <span className="text-2xl font-light text-rose-500">01</span>
            <div className="w-8 h-px bg-white/20"></div>
            <iconify-icon icon="solar:arrow-right-linear" class="text-white/50"></iconify-icon>
          </div>
          
          <h1 className="leading-[1.1] md:text-6xl text-5xl font-medium text-white tracking-tight mb-6">
            <MaskedText text="Nova Chain crypto\ntrading" delayStart={300} stagger={100} />
          </h1>
          
          <div className="flex items-center clip-slide delay-700">
            <Link to="/trade" className="text-xs font-semibold tracking-widest uppercase text-white hover:text-rose-500 transition-colors border-b border-rose-500 pb-1 flex items-center gap-2 group">
              Launch
              <iconify-icon icon="solar:arrow-right-linear" class="transform group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 flex clip-slide delay-800">
        <div className="w-1/3 h-full bg-pink-500"></div>
        <div className="w-1/4 h-full bg-rose-500"></div>
      </div>
    </section>
  );
}