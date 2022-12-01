import Image from 'next/image';
import React, { useEffect } from 'react';
import ChordButton from './ChordButton';
import ChordFret from './ChordFret';

interface ChordGridProps {
  string: number;
  start: number;
  position: number;
}
export default function ChordGrid({ string, start, position }: ChordGridProps) {
  if (position === start || position === 0) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret string={string} bar={0} open={true} />
        {/* 1品 */}
        <ChordButton string={string} bar={1} open={false} />
        {/* 2品 */}
        <ChordButton string={string} bar={2} open={false} />
        {/* 3品 */}
        <ChordButton string={string} bar={3} open={false} />
        {/* 4品 */}
        <ChordButton string={string} bar={4} open={false} />
      </section>
    );
  } else if (position === 1) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret string={string} bar={0} open={false} />
        {/* 1品 */}
        <ChordButton string={string} bar={1} open={true} />
        {/* 2品 */}
        <ChordButton string={string} bar={2} open={false} />
        {/* 3品 */}
        <ChordButton string={string} bar={3} open={false} />
        {/* 4品 */}
        <ChordButton string={string} bar={4} open={false} />
      </section>
    );
  } else if (position === 2) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret string={string} bar={0} open={false} />
        {/* 1品 */}
        <ChordButton string={string} bar={1} open={false} />
        {/* 2品 */}
        <ChordButton string={string} bar={2} open={true} />
        {/* 3品 */}
        <ChordButton string={string} bar={3} open={false} />
        {/* 4品 */}
        <ChordButton string={string} bar={4} open={false} />
      </section>
    );
  } else if (position === 3) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret string={string} bar={0} open={false} />
        {/* 1品 */}
        <ChordButton string={string} bar={1} open={false} />
        {/* 2品 */}
        <ChordButton string={string} bar={2} open={false} />
        {/* 3品 */}
        <ChordButton string={string} bar={3} open={true} />
        {/* 4品 */}
        <ChordButton string={string} bar={4} open={false} />
      </section>
    );
  } else {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret string={string} bar={0} open={false} />
        {/* 1品 */}
        <ChordButton string={string} bar={1} open={false} />
        {/* 2品 */}
        <ChordButton string={string} bar={2} open={false} />
        {/* 3品 */}
        <ChordButton string={string} bar={3} open={false} />
        {/* 4品 */}
        <ChordButton string={string} bar={4} open={true} />
      </section>
    );
  }
}
