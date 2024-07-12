'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export function Navbar() {
  return (
    <div className="bg-zinc-800 text-white px-6 py-4 flex flex-col justify-center border-solid border-b-1 border-zinc-950">
      <div>
        <Link href="/">
          <p className="text-lg font-bold">Landlord Onboard</p>
        </Link>
      </div>
    </div>
  );
};

interface BottombarProps {
  formId: string | null,
  buttonAction: (formData: FormData | null) => void,
  buttonTitle: string
}

export function Bottombar(props: BottombarProps) {
  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formId = props.formId;

    if (formId) {
      const form = document.getElementById(formId) as HTMLFormElement;
      if (form.reportValidity()) {
        const formData = new FormData(form);
        await props.buttonAction(formData);
      }
    }
  };

  const handleSubmit = async () => {
    await props.buttonAction(null);
  };

  return (
    <div className="w-full bg-zinc-950  px-6 py-4 flex flex-col justify-center mt-6">
      <div className="flex ml-auto">
        <Link href="/">
          {
            props.formId ? (
              <button className="primary-button" form={props.formId} onClick={handleFormSubmit}>
                {props.buttonTitle}
              </button>
            ) : (
              <button className="primary-button" onClick={handleSubmit}>
                {props.buttonTitle}
              </button>
            )
          }
        </Link>
      </div>
    </div>
  )
};