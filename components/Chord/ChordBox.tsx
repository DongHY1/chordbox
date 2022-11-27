import React from 'react';
import Chord from './Chord';
interface ChordBoxProps {
  chordName: String;
}
export default function ChordBox({ chordName }: ChordBoxProps) {
  return (
    <div className="flex flex-col basis-1/6 bg-red-100 m-2">
      <div className="basis-1/6 text-center bg-teal-100">{chordName}</div>
      <div className="basis-5/6 bg-teal-200">
        <Chord />
      </div>
    </div>
  );
}
