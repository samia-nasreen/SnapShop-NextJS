import { cookies } from 'next/headers';
import SideBar from '@/app/[locale]/profile/_components/SideBar';
import ProfileForm from '@/app/[locale]/profile/_components/ProfileForm';
import Breadcrumb from '@/components/UI/Breadcrumb';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import { jwtDecode } from 'jwt-decode';

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken')?.value;
  const decodedToken = jwtDecode(token);
  const userId = decodedToken?.sub ? parseInt(decodedToken.sub, 10) : null;
  let userData = null;
  let error = null;

  if (userId) {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      userData = await response.json();
    } catch (err) {
      error = err.message;
    }
  } else {
    error = 'User not found';
  }

  if (error) {
    return <p className="max-h-screen flex justify-center py-80">{error}</p>;
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
            <ProfileForm userData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
}
