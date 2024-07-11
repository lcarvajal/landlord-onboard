'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export function Navbar() {
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

interface BottombarProps {
  formId: string,
  buttonAction: (formData: FormData) => void,
  buttonTitle: string
}

export function Bottombar(props: BottombarProps) {
  return (
    <div className="w-full bg-white px-6 py-4 flex flex-col justify-center absolute bottom-0">
      <div className="flex ml-auto">
        <Link href="/">
          <button className="primary-button" form={props.formId} formAction={props.buttonAction}>
            {props.buttonTitle}
          </button>
        </Link>
      </div>
    </div>
  )
};