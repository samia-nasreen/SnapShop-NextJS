import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LoginLink: React.FC = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <p className="mt-4 flex items-center justify-center">
      Already have an account?{' '}
      <Link
        href={`/${locale}/login`}
        className="ml-2 p-1 font-medium border-b-[1.25px] border-gray-500"
      >
        Log in
      </Link>
    </p>
  );
};

export default LoginLink;
