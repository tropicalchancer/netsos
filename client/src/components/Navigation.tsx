import React from 'react';
import { Link, useRoute } from 'wouter';

export function Navigation() {
  const [isHome] = useRoute('/');
  const [isAbout] = useRoute('/about');
  const [isExperiments] = useRoute('/experiments');
  const [isBenefits] = useRoute('/benefits');
  const [isVenues] = useRoute('/venues');

  const linkClass = (active: boolean) =>
    `px-4 py-2 text-sm transition-colors ${
      active
        ? 'text-white'
        : 'text-zinc-400 hover:text-white'
    }`;

  return (
    <nav className="bg-zinc-800/50 border-b border-zinc-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-16">
          <Link href="/">
            <a className="text-white font-medium mr-8">Popup Cities</a>
          </Link>
          <div className="flex space-x-2">
            <Link href="/">
              <a className={linkClass(isHome)}>Cities</a>
            </Link>
            <Link href="/venues">
              <a className={linkClass(isVenues)}>Venues</a>
            </Link>
            <Link href="/about">
              <a className={linkClass(isAbout)}>About</a>
            </Link>
            <Link href="/experiments">
              <a className={linkClass(isExperiments)}>Experiments</a>
            </Link>
            <Link href="/benefits">
              <a className={linkClass(isBenefits)}>ZuBenefits</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}