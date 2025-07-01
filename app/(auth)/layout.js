import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-start min-h-screen pt-32">
      {children}
    </div>
  );
};
export default AuthLayout;
