import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { icon: "simple-icons:git", name: "git", size: "text-2xl" },
    { icon: "simple-icons:npm", name: "", size: "text-3xl" },
    { icon: "simple-icons:lucid", name: "Lucidchart", size: "text-xl" },
    { icon: "simple-icons:wrike", name: "wrike", size: "text-xl" },
    { icon: "simple-icons:jquery", name: "jQuery", size: "text-xl" },
    { icon: "simple-icons:openstack", name: "openstack", size: "text-xl" },
    { icon: "simple-icons:servicenow", name: "servicenow", size: "text-xl" },
    { icon: "", name: "paysafe:", size: "text-xl", isBold: true },
  ];

  const renderLogos = () => (
    <>
      {logos.map((logo, index) => (
        <div key={index} className="group flex items-center gap-2">
          {logo.icon && <iconify-icon icon={logo.icon} class={`${logo.size} text-white`}></iconify-icon>}
          {logo.name && (
            <span className={`${logo.isBold ? 'font-bold tracking-tight' : 'font-medium'} text-lg text-white font-sans`}>
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll relative z-20 w-full max-w-6xl mx-auto px-6 pb-12 md:pb-20">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group">
        <div className="flex items-center justify-center md:justify-start [&>div]:mx-8 w-max animate-infinite-scroll">
          {renderLogos()}
          {renderLogos()}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;