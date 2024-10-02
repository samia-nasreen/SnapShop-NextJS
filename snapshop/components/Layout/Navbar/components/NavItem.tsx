'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface NavItemProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <li>
      <Link
        href={to}
        onClick={onClick}
        className={
          isActive
            ? 'text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]'
            : 'text-gray-800 hover:border-b-[1px] hover:border-gray-500'
        }
        style={{ transition: 'all 0.3s' }}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
