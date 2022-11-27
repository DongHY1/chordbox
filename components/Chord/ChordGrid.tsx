import React from 'react';
import ChordButton from './ChordButton';
import ChordFret from './ChordFret';
export default function ChordGrid() {
  return (
    <section className="grid grid-flow-row auto-rows-fr">
      <ChordFret />
      <ChordButton />
      <ChordButton />
      <ChordButton />
      <ChordButton />
    </section>
  );
}
