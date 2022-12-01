import Image from 'next/image';
import React from 'react';
import ChordButton from './ChordButton';
import ChordFret from './ChordFret';

interface ChordGridProps {
  string: number;
  start: number;
  position: number;
}
export default function ChordGrid({ string, start, position }: ChordGridProps) {
  return (
    <section className="grid grid-flow-row auto-rows-fr">
      {/* 0品 */}
      <ChordFret string={string} bar={0} open={start === position} />
      {/* 1品 */}
      <ChordButton string={string} bar={1} open={start === position} />
      {/* 2品 */}
      <ChordButton string={string} bar={2} open={start === position} />
      {/* 3品 */}
      <ChordButton string={string} bar={3} open={start === position} />
      {/* 4品 */}
      <ChordButton string={string} bar={4} open={start === position} />
    </section>
  );
}
