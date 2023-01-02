import React from 'react';
import ChordButton from './ChordButton';

interface ChordGridProps {
  chordId: string;
  lineId: string;
  string: number;
  start: number;
  position: number;
}

export default function ChordGrid({
  chordId,
  lineId,
  string,
  start,
  position,
}: ChordGridProps) {
  return (
    <section className="grid grid-flow-row auto-rows-fr">
      {[0, 1, 2, 3, 4].map((bar) => (
        <ChordButton
          key={bar}
          string={string}
          start={start}
          bar={bar}
          open={position === bar + start}
          lineId={lineId}
          chordId={chordId}
        />
      ))}
    </section>
  );
}
