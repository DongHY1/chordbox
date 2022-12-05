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
        {[0, 1, 2, 3, 4].map((bar) =>{
          if(bar === 0 ){
            return (
              <ChordFret
              key={bar}
              string={string}
              bar={bar}
              open={false}
              lineId={lineId}
              chordId={chordId}
        />
            )
          }else{
            return (
              <ChordButton
              key={bar}
              string={string}
              bar={bar}
              open={position===bar}
              lineId={lineId}
              chordId={chordId}
        />
            )
          }
        })}
      </section>
    )
  } else if (position === start || position === 0) {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {[0, 1, 2, 3, 4].map((bar) =>{
          if(bar === 0 ){
            return (
              <ChordFret
              key={bar}
              string={string}
              bar={bar}
              open={true}
              lineId={lineId}
              chordId={chordId}
        />
            )
          }else{
            return (
              <ChordButton
              key={bar}
              string={string}
              bar={bar}
              open={false}
              lineId={lineId}
              chordId={chordId}
        />
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <section className="grid grid-flow-row auto-rows-fr">
        {[0, 1, 2, 3, 4].map((bar) =>{
          if(bar === 0 ){
            return (
              <ChordFret
              key={bar}
              string={string}
              bar={bar}
              open={position===bar}
              lineId={lineId}
              chordId={chordId}
        />
            )
          }else{
            return (
              <ChordButton
              key={bar}
              string={string}
              bar={bar}
              open={position===bar}
              lineId={lineId}
              chordId={chordId}
        />
            )
          }
        })}
      </section>
    )
  }

  }

