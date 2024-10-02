'use client';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SideBar from '@/app/profile/_components/SideBar';
import ProfileForm from '@/app/profile/_components/ProfileForm';
import Breadcrumb from '@/components/UI/Breadcrumb';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import ProfileSkeleton from '@/app/profile/_components/ProfileSkeleton';

export default function ProfilePage() {
  const userId = useSelector((state) => state.auth.userId);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!userId) {
    return (
      <p className="max-h-screen flex justify-center py-80">User not found!</p>
    );
  }

  if (error) {
    return (
      <p className="max-h-screen flex justify-center py-80">
        Something went wrong!
      </p>
    );
  }

  if (!userData) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="container mx-auto mb-32 px-5">
        <div className="flex justify-between">
          <Breadcrumb parts={['Home', 'My Account']} className="ml-2" />
          <div className="text-sm text-gray-500 py-6">
            <span className="mr-1">Welcome!</span>
            <span className="text-red-500">
              {capitalizeFirstLetter(userData.name.firstname)}{' '}
              {capitalizeFirstLetter(userData.name.lastname)}
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <SideBar />
          <div className="w-full md:w-3/4 pl-2 md:pl-5">
            <ProfileForm
              userData={userData}
              onSubmit={(formData) => console.log(formData)}
              capitalizeFirstLetter={capitalizeFirstLetter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
