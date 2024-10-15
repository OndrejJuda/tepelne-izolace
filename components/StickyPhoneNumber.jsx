import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";
const StickyPhoneNumber = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary-200 text-black p-4 text-center z-30">
      <div href="tel:+123456789" className="text-black text-xs md:text-lg  flex items-center justify-center">
        <FaPhoneVolume className="ml-2 mr-1" /> Ozvěte se nám na číslo<strong className='ml-1'>+420 731 513 994</strong>
      </div>
    </div>

  );
};

export default StickyPhoneNumber;
