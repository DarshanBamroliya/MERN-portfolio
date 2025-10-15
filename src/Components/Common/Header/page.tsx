'use client';
import React, { useEffect, useMemo, useState } from 'react';

function Header() {
  const [now, setNow] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = useMemo(() => {
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
    <header className="absolute inset-0 pointer-events-none z-30">

      {/* Left vertical category menu */}
      <nav className="absolute left-4 top-[40%] -translate-y-1/2 pointer-events-auto">
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

      {/* Left bottom name and subtitle */}
      <div className="absolute left-4 bottom-[30%] -translate-y-1/2 pointer-events-none">
        <h1 className="font-caudex text-lg leading-none">Darshan B.</h1>
        <p className="mt-1 text-[10px] tracking-[0.25em] uppercase opacity-70">
          Full Stack Developer
        </p>

        {/* SVG Sign */}
        <div
          className="sidebar-sign absolute -left-15 top-[calc(100%+var(--spacing)*30)] w-40 hidden l:block"
          style={{ visibility: 'inherit', opacity: 1 }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 251 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="sign-main"
              d="M171 0.0605469H37.8725L0 18.4652V199.061L37.8725 27.6675L171 0.0605469Z"
              fill="var(--color-main)"
            />
            <path
              className="sign-secondary"
              d="M251 68.0605L169.525 0.0605469L41 26.8572L251 68.0605Z"
              fill="var(--color-dark-main)"
            />
          </svg>
        </div>
      </div>

      {/* Right bottom vertical time display */}
      <div className="fixed sm:right-2 right-0 bottom-[10%] pointer-events-none">
        <div className="origin-top-right rotate-90">
          <span className="sm:text-[9px] text-[8px] uppercase sm:tracking-[0.35em] opacity-40 align-middle">
            Local Time
          </span>
          <span className="mx-2 text-xs opacity-40">|</span>
          <span className="sm:text-[9px] text-[8px] uppercase tracking-[0.35em] opacity-70 align-middle">
            {formattedTime}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
