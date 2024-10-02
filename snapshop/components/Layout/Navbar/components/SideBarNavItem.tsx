import React from 'react';
import Link from 'next/link';

interface SideBarNavItemProps {
  to: string;
  closeSidebar: () => void;
  item: React.ReactNode;
}

const SideBarNavItem: React.FC<SideBarNavItemProps> = ({
  to,
  closeSidebar,
  item,
}) => {
  return (
    <li className="my-2">
      <Link
        href={to}
        onClick={closeSidebar}
        className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
      >
        {item}
      </Link>
    </li>
  );
};

export default SideBarNavItem;
