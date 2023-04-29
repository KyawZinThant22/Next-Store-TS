import React from 'react';

const Header = ({ children }: { children: React.ReactNode }) => {
   return <h1 className="text-2xl font-[600] lg:text-[28px]">{children}</h1>;
};

export default Header;
