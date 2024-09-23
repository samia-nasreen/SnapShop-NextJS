import Image from 'next/image';

const AuthImage = () => {
  return (
    <Image
      src="/assets/signup.png"
      alt="Auth-Image"
      width={800}
      height={800}
      className="object-cover rounded-r"
    />
  );
};

export default AuthImage;
