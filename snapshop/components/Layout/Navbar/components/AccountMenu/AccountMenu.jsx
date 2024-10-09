'use client';

import { AiOutlineUser } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { authActions } from '@/lib/features/auth/authSlice';
import AccountMenuOptions from './AccountMenuOptions';
import { logout } from '@/actions';

const AccountMenu = ({ locale }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    dispatch(authActions.logout());
    closeDropdown();
    router.push(`/${locale}/`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleDropdown}
        className="text-gray-800 text-2xl md:text-3xl"
      >
        <AiOutlineUser />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gradient-to-r from-zinc-500 via-gray-500 to-zinc-600 rounded-md shadow-lg overflow-hidden z-20">
          <AccountMenuOptions
            closeDropdown={closeDropdown}
            logout={handleLogout}
            locale={locale}
          />
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
