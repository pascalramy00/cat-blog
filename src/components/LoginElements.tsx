"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const LoginElements = () => {
  return (
    <div className="flex gap-4 items-center justify-between bg-black text-white rounded-xl px-4 py-2">
      <LoginLink>Sign In</LoginLink>
      <RegisterLink>Register</RegisterLink>
    </div>
  );
};

export default LoginElements;
