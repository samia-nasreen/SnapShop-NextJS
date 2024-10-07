'use client';

import { useState, useRef, useEffect } from 'react';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from 'react-icons/ai';
import { useAppSelector } from '@/lib/hooks';
import NavItem from './components/NavItem';
import IconWithBadge from './components/IconWithBadge';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const AccountMenu = dynamic(
  () => import('./components/AccountMenu/AccountMenu'),
  { ssr: false }
);

const NavBar = ({ locale }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const cartCount = useAppSelector((state) => state.cart.items.length);
  const t = useTranslations('navbar');

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <div className="bg-white h-20 md:h-24 flex items-baseline pt-6 md:pt-9 pb-2 justify-between px-8 md:px-32 border border-gray-300">
        <div className="md:text-2xl font-bold text-xl">
          <Link href={`/${locale}/`}>{t('brandName')}</Link>
        </div>
        <ul className="hidden md:flex space-x-8 xl:space-x-12 text-sm xl:text-base">
          <NavItem to={`/${locale}/`}>{t('home')}</NavItem>
          <NavItem to={`/${locale}/contact`}>{t('contact')}</NavItem>
          <NavItem to={`/${locale}/about`}>{t('about')}</NavItem>
          {isAuthenticated ? (
            <NavItem to={`/${locale}/orders`}>{t('orders')}</NavItem>
          ) : (
            <NavItem to={`/${locale}/signup`}>{t('signUp')}</NavItem>
          )}
        </ul>
        <div className="flex items-center space-x-4">
          <SearchBar className="hidden lg:block" />
          <IconWithBadge
            Icon={AiOutlineHeart}
            count={wishlistCount}
            to={`/${locale}/wishlist`}
            label="Wishlist"
          />
          <IconWithBadge
            Icon={AiOutlineShoppingCart}
            count={cartCount}
            to={`/${locale}/cart`}
            label="Cart"
          />
          {isAuthenticated && <AccountMenu locale={locale} />}
          <AiOutlineMenu
            className="text-gray-900 text-2xl md:text-3xl md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <SideBar
        locale={locale}
        sidebarRef={sidebarRef}
        closeSidebar={closeSidebar}
        isSidebarOpen={isSidebarOpen}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
};

export default NavBar;
