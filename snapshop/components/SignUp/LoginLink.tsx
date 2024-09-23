import Link from "next/link";
import React from "react";

const LoginLink: React.FC = () => (
  <p className="mt-4 flex items-center justify-center">
    Already have an account?{" "}
    <Link
      href="/login"
      className="ml-2 p-1 font-medium border-b-[1.25px] border-gray-500"
    >
      Log in
    </Link>
  </p>
);

export default LoginLink;
