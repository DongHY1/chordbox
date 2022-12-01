import React, { useState } from 'react';
import cross from '../../public/cross.svg';
import Image from 'next/image';
interface ChordFretProps {
  bar: number;
  string: number;
  open: boolean;
}
export default function ChordFret({ bar, string, open }: ChordFretProps) {
  const handleButtonClick = () => {
    console.log(`第${string}根弦的第${bar}品被点了`);
  };
  return (
    <button className="border-b border-indigo-600 " onClick={handleButtonClick}>
      <div className="flex justify-center ">
        {open ? (
          <div className="w-3 h-3 border rounded-full border-gray-900"></div>
        ) : (
          <Image src={cross} className="w-3 h-3 " alt="cross svg" />
        )}
      </div>
    </button>
  );
}
