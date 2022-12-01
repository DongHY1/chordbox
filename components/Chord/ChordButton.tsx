import React, { useState } from 'react';
interface ChordButtonProps {
  bar: number;
  string: number;
  open: boolean;
}
export default function ChordButton({ bar, string, open }: ChordButtonProps) {
  const [isClick, setIsClick] = useState(false);
  // 需要知道是第几根线 第几个位置
  const handleButtonClick = () => {
    console.log(`第${string}根弦的第${bar}品被点了`);
  };
  return (
    <button
      className="flex justify-center  border-t border-b border-indigo-600"
      onClick={handleButtonClick}
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
