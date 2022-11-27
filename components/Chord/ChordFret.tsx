import React from 'react';
import cross from '../../public/cross.svg';
import Image from 'next/image';
export default function ChordFret() {
  return (
    <button className="border-b border-indigo-600">
      <div className="flex justify-center">
        <Image src={cross} className="w-3 h-3 " alt="cross svg" />
      </div>
    </button>
  );
}
