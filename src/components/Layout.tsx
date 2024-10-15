import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-zinc-800 min-h-screen'>
      {children}
    </div>
  );
}

export default Layout;