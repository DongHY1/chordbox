import React from 'react';
import plus from '../../public/plus.svg';
import Image from 'next/image';
import { useTabStore } from '../../stores';
export default function ChordForm() {
  return (
    <div className="flex flex-col basis-3/4 bg-red-200">
      <div className="flex flex-row justify-between bg-red-300 ">
        <div className="text-xl ml-2">Lines</div>
        <Image
          src={plus}
          className="w-4 h-4 mt-1 mr-2 cursor-pointer"
          alt="plus svg"
        />
      </div>
      <div className="flex flex-row rounded-xl bg-red-400 m-2">
        <div className="text-xl ml-4">name</div>
      </div>
    </div>
  );
}
