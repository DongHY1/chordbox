import React, { useState } from 'react';
import cross from '../../public/cross.svg';
import Image from 'next/image';
import { useTabStore } from '../../stores';
interface ChordFretProps {
  lineId: string;
  chordId: string;
  bar: number;
  string: number;
  open: boolean;
}
export default function ChordFret({
  lineId,
  chordId,
  bar,
  string,
  open,
}: ChordFretProps) {
  const updateChordPosition = useTabStore((state) => state.updateChordPosition);
  return (
    <button
      className="border-b border-indigo-600 "
      onClick={() => updateChordPosition(lineId, chordId, string, bar)}
    >
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
