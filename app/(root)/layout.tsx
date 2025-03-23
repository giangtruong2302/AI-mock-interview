import Image from "next/image";
import Link from "next/link";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout">
      <nav className="">
        <Link href="/" className="flex flex-row gap-2 items-center">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">DynoPreps</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
