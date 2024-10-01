'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SideBar from '@/components/Profile/SideBar';
import ProfileForm from '@/components/Profile/ProfileForm';
import Breadcrumb from '@/components/UI/Breadcrumb';
import ProfileSkeleton from '@/components/Profile/ProfileSkeleton';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

const ProfilePage = () => {
  const current = useSelector((state) => state.auth.userId);
  const [userId, setUserId] = useState();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (current) {
      setUserId(current);
    }
  }, [current]);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/users/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const result = await response.json();
          setData(result);
          console.log('data: ', result);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchData();
    }
  }, [userId]);

  const onSubmit = (data) => {
    console.log(data);
  };

  if (!data) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <p className="max-h-screen flex justify-center py-80">
        Something went wrong!
      </p>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="container mx-auto mb-32 px-5">
        <div className="flex justify-between">
          <Breadcrumb parts={['Home', 'My Account']} className="ml-2" />
          <div className="text-sm text-gray-500  py-6">
            <span className="mr-1">Welcome!</span>
            <span className="text-red-500">
              {capitalizeFirstLetter(data.name.firstname)}{' '}
              {capitalizeFirstLetter(data.name.lastname)}
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <SideBar />
          <div className="w-full md:w-3/4 pl-2 md:pl-5">
            <ProfileForm
              userData={data}
              onSubmit={onSubmit}
              capitalizeFirstLetter={capitalizeFirstLetter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
