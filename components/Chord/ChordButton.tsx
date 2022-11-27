import React, { useState } from 'react';

export default function ChordButton() {
  const [isClick, setIsClick] = useState(false);
  return (
    <button
      className="flex justify-center  border-t border-b border-indigo-600"
      onClick={() => setIsClick(!isClick)}
    >
      <div
        className={
          isClick
            ? 'w-5 h-5 bg-black rounded-full'
            : 'border-l border-indigo-900 h-full'
        }
      ></div>
    </button>
  );
}
