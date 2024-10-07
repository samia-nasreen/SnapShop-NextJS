import React, { RefObject } from 'react';
import SideBarNavItem from './SideBarNavItem';
import SearchBar from './SearchBar';
import { useTranslations } from 'next-intl';

interface SideBarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  isAuthenticated: boolean;
  sidebarRef: RefObject<HTMLDivElement>;
  locale: string;
}

const SideBar: React.FC<SideBarProps> = ({
  sidebarRef,
  closeSidebar,
  isSidebarOpen,
  isAuthenticated,
  locale,
}) => {
  const t = useTranslations('navbar');

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
        isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 bg-white h-full w-3/4 sm:w-1/2 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <SearchBar className="mb-4" />
          <ul>
            <SideBarNavItem
              to={`/${locale}/`}
              closeSidebar={closeSidebar}
              item={t('home')}
            />
            <SideBarNavItem
              to={`/${locale}/contact`}
              closeSidebar={closeSidebar}
              item={t('contact')}
            />
            <SideBarNavItem
              to={`/${locale}/about`}
              closeSidebar={closeSidebar}
              item={t('about')}
            />
            {isAuthenticated ? (
              <SideBarNavItem
                to={`/${locale}/orders`}
                closeSidebar={closeSidebar}
                item={t('orders')}
              />
            ) : (
              <SideBarNavItem
                to={`/${locale}/signup`}
                closeSidebar={closeSidebar}
                item={t('signUp')}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
