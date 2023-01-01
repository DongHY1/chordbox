import React, { useEffect } from 'react';
import ChordButton from './ChordButton';

interface ChordGridProps {
  chordId: string;
  lineId: string;
  string: number;
  start: number;
  position: number[];
}
export default function ChordGrid({
  chordId,
  lineId,
  string,
  start,
  position,
}: ChordGridProps) {
  const stringValue = position[string - 1];

  return (
    <section className="grid grid-flow-row auto-rows-fr">
      {[0, 1, 2, 3, 4].map((bar) => {
        const open = bar === 0 ? false : true;
        return (
          <ChordButton
            key={bar + start}
            string={string}
            bar={bar + start}
            open={open}
            lineId={lineId}
            chordId={chordId}
          />
        );
      })}
    </section>
  );
}
