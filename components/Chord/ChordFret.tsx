import React, { useState } from 'react';
import cross from '../../public/cross.svg';
import Image from 'next/image';
export default function ChordFret() {
  const [isClick, setIsClick] = useState(false);
  return (
    <button
      className="border-b border-indigo-600 "
      onClick={() => setIsClick(!isClick)}
    >
      <div className="flex justify-center ">
        {isClick ? (
          <div className="w-3 h-3 border rounded-full border-gray-900"></div>
        ) : (
          <Image src={cross} className="w-3 h-3 " alt="cross svg" />
        )}
      </div>
    </button>
  );
}
