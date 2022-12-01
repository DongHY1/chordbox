import Image from 'next/image';
import React, { useEffect } from 'react';
import ChordButton from './ChordButton';
import ChordFret from './ChordFret';

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
  if (position === -1) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret
          string={string}
          bar={0}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 1品 */}
        <ChordButton
          string={string}
          bar={1}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 2品 */}
        <ChordButton
          string={string}
          bar={2}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 3品 */}
        <ChordButton
          string={string}
          bar={3}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 4品 */}
        <ChordButton
          string={string}
          bar={4}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
      </section>
    );
  } else if (position === start || position === 0) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret
          string={string}
          bar={0}
          open={true}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 1品 */}
        <ChordButton
          string={string}
          bar={1}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 2品 */}
        <ChordButton
          string={string}
          bar={2}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 3品 */}
        <ChordButton
          string={string}
          bar={3}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 4品 */}
        <ChordButton
          string={string}
          bar={4}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
      </section>
    );
  } else if (position === 1) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret
          string={string}
          bar={0}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 1品 */}
        <ChordButton
          string={string}
          bar={1}
          open={true}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 2品 */}
        <ChordButton
          string={string}
          bar={2}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 3品 */}
        <ChordButton
          string={string}
          bar={3}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 4品 */}
        <ChordButton
          string={string}
          bar={4}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
      </section>
    );
  } else if (position === 2) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret
          string={string}
          bar={0}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 1品 */}
        <ChordButton
          string={string}
          bar={1}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 2品 */}
        <ChordButton
          string={string}
          bar={2}
          open={true}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 3品 */}
        <ChordButton
          string={string}
          bar={3}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 4品 */}
        <ChordButton
          string={string}
          bar={4}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
      </section>
    );
  } else if (position === 3) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret
          string={string}
          bar={0}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 1品 */}
        <ChordButton
          string={string}
          bar={1}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 2品 */}
        <ChordButton
          string={string}
          bar={2}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 3品 */}
        <ChordButton
          string={string}
          bar={3}
          open={true}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 4品 */}
        <ChordButton
          string={string}
          bar={4}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
      </section>
    );
  } else {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {/* 0品 */}
        <ChordFret
          string={string}
          bar={0}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 1品 */}
        <ChordButton
          string={string}
          bar={1}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 2品 */}
        <ChordButton
          string={string}
          bar={2}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 3品 */}
        <ChordButton
          string={string}
          bar={3}
          open={false}
          lineId={lineId}
          chordId={chordId}
        />
        {/* 4品 */}
        <ChordButton
          string={string}
          bar={4}
          open={true}
          lineId={lineId}
          chordId={chordId}
        />
      </section>
    );
  }
}
