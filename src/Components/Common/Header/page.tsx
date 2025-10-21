'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

function Header() {
  const [now, setNow] = useState<Date | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update time every second
  useEffect(() => {
    // Initialize on client to avoid SSR/client time mismatch
    setNow(new Date());
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isMobileMenuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
    }
    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const formattedTime = useMemo(() => {
    if (!now) return '';
    try {
      return new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
    } catch {
      return now.toLocaleTimeString();
    }
  }, [now]);

  // Left vertical menu items
  const sideMenu = [
    { title: 'Contact', link: '/footer' },
    { title: 'About Us', link: '/about' },
    { title: 'Project', link: '/project' },
  ];

  return (
    <header className="absolute inset-0 h-screen pointer-events-none z-30">

      {/* Mobile top bar (only < sm) */}
      <div className="sm:hidden absolute top-0 inset-x-0 h-16 border-b border-black bg-transparent pointer-events-auto z-50">
        <div className="h-full px-3 flex items-center justify-between">
          {/* Left: DB over Full Stack Dev */}
          <div className="flex items-center gap-2">
            <div className="leading-none">
              <div className="font-caudex text-base">Darshan B.</div>
              <div className="text-[8px] uppercase tracking-[0.2em] opacity-70">Full Stack Dev</div>
            </div>
          </div>
          {/* Right: Menu toggle button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-haspopup="menu"
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="pointer-events-auto inline-flex items-center justify-center h-7 w-9 rounded active:scale-[0.98]"
          >
            <RiMenu3Fill size={22} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden fixed inset-0 bg-[#f5f5f5] text-black pointer-events-auto z-[99]"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute top-0 inset-x-0 h-10 border-b border-black/10" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute left-3 top-2 inline-flex items-center justify-center h-7 w-9 z-50"
          >
            <RiCloseLine size={22} />
          </button>
          <nav className="h-full w-full flex items-center justify-center">
            <ul className="flex flex-col gap-6 text-center">
              {sideMenu.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    className="block text-lg font-semibold tracking-widest"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Left vertical category menu (desktop only) */}
      <nav className="hidden sm:block absolute left-4 top-[40%] -translate-y-1/2 pointer-events-auto">
        <div className="origin-left -rotate-90">
          <ul className="flex items-center gap-6 text-[9px] uppercase tracking-[0.35em]">
            {sideMenu.map((item) => (
              <React.Fragment key={item.title}>
                <li>
                  <a
                    className="hover:opacity-70 transition"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
                {/* Uncomment if you want separators */}
                {/* {idx < sideMenu.length - 1 && (
                  <li>|</li>
                )} */}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>

      {/* Left bottom name and subtitle (desktop only) */}
      <div className="hidden sm:block absolute left-4 bottom-[30%] -translate-y-1/2 pointer-events-none">
        <h1 className="font-caudex text-lg leading-none">Darshan B.</h1>
        <p className="mt-1 text-[10px] tracking-[0.25em] uppercase opacity-70">
          Full Stack Developer
        </p>

        {/* SVG Sign */}
        <div
          className="sidebar-sign absolute -left-15 top-[calc(100%+var(--spacing)*30)] w-40 hidden l:block"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 251 200"
            fill="none"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="sign-main"
              d="M171 0.0605469H37.8725L0 18.4652V199.061L37.8725 27.6675L171 0.0605469Z"
              fill="var(--color-main)"
              stroke="none"
            />
            <path
              className="sign-secondary"
              d="M251 68.0605L169.525 0.0605469L41 26.8572L251 68.0605Z"
              fill="var(--color-dark-main)"
              stroke="none"
            />
          </svg>
        </div>
      </div>

      {/* Right bottom vertical time display */}
      <div className="fixed sm:right-2 right-0 sm:bottom-[10%] bottom-[5%] pointer-events-none">
        <div className="origin-top-right rotate-90">
          <span className="inline sm:text-[9px] text-[8px] uppercase sm:tracking-[0.35em] opacity-40 align-middle">
            Local Time
          </span>
          <span className="inline mx-2 text-xs opacity-40">|</span>
          <span className="sm:text-[9px] text-[8px] uppercase tracking-[0.35em] opacity-70 align-middle" suppressHydrationWarning>
            {formattedTime}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
