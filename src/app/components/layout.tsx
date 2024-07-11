'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-slate-800 text-white px-6 py-4 flex flex-col justify-center">
      <div>
        <Link href="/">
          <p className="text-lg font-bold">Landlord Onboard</p>
        </Link>
      </div>
    </div>
  );
};
