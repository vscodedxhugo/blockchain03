import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-20 w-full border-t border-white/5 bg-black/40 backdrop-blur-2xl mt-24 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-[1px]">
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <iconify-icon icon="solar:box-minimalistic-bold-duotone" width="16" height="16" style={{ color: '#f97316' }}></iconify-icon>
                </div>
              </div>
              <span className="text-xl font-medium tracking-tight text-white font-sans">Nebula</span>
            </div>
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm mb-8">
              The essential toolkit for deploying secure dApps. From writing your first smart contract to governing a global DAO, build it all on one unified layer.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <iconify-icon icon="simple-icons:x" width="16" height="16"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <iconify-icon icon="simple-icons:github" width="18" height="18"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <iconify-icon icon="simple-icons:discord" width="18" height="18"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Product</h4>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Features</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Integrations</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Changelog</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Developers</h4>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">API Reference</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Open Source</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">GitHub</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Company</h4>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">About Us</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Careers</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Blog</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Legal</h4>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors font-sans">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-sans">
            © {new Date().getFullYear()} Nebula Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span className="text-xs text-gray-400 font-sans">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;