import * as React from 'react';

import { Footer } from './footer';
import { Nav } from './nav';
import { SEO } from './seo';

interface LayoutProps {
  children: React.ReactNode;
  hero?: React.ReactNode;
}

function Layout({ children, hero }: LayoutProps): React.ReactElement {
  return (
    <>
      <SEO />
      <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white fill-available">
        {hero || null}
        <Nav />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export { Layout };
