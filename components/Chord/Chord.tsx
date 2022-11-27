import React from 'react';
import ChordGrid from './ChordGrid';
export default function Chord() {
  return (
    <div className="flex flex-row bg-fuchsia-100 h-full">
      <aside className="bg-fuchsia-200 basis-1/6 text-center">1</aside>
      <main className="grid grid-flow-col auto-cols-fr bg-fuchsia-300 basis-5/6">
        <ChordGrid />
        <ChordGrid />
        <ChordGrid />
        <ChordGrid />
        <ChordGrid />
        <ChordGrid />
      </main>
    </div>
  );
}
