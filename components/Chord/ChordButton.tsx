import React, { useState } from 'react';

export default function ChordButton() {
  const [isClick, setIsClick] = useState(false);
  // 需要知道是第几根线 第几个位置
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
