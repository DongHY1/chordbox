import React, { useState } from 'react';
import { useTabStore } from '../../stores';
import ChordGrid from './ChordGrid';
import { useChordName } from '../../hooks';
import { ChordBoxProps } from '../../utils/interface';
export default function ChordBox({
  chord: { id: chordId, start: chordStart, position },
  lineId,
}: ChordBoxProps) {
  const deleteChord = useTabStore((state) => state.deleteChord);
  const addChordStart = useTabStore((state) => state.addChordStart);
  const decreaseChordStart = useTabStore((state) => state.decreaseChordStart);
  const chords = useChordName(lineId, chordId);
  const [chordIndex, setChordIndex] = useState(0);
  const [isChordStartClick, setIsChordStartClick] = useState(false);
  return (
    <div className="flex flex-col basis-1/6 m-2 h-38 ">
      <div className="flex justify-center">
        <div
          className="ml-4"
          onClick={() => {
            setChordIndex((chordIndex + 1) % chords.length);
          }}
          onDoubleClick={() => deleteChord(lineId, chordId)}
        >
          {chords[chordIndex].name}
        </div>
      </div>
      <div className="basis-5/6 ">
        <div className="flex flex-row  h-full">
          <aside className="relative flex flex-col  basis-1/6 text-center cursor-pointer">
            {isChordStartClick && (
              <div className="absolute -top-6 w-full flex justify-between ">
                <div
                  className="  w-1/2"
                  onClick={() => addChordStart(lineId, chordId)}
                >
                  +
                </div>
                <div
                  className=" w-1/2"
                  onClick={() => decreaseChordStart(lineId, chordId)}
                >
                  -
                </div>
              </div>
            )}
            <div
              className="h-1/4"
              onClick={() => setIsChordStartClick(!isChordStartClick)}
            >
              {chordStart}
            </div>
          </aside>
          <main className="border-2 border-neutral-900 grid grid-flow-col auto-cols-fr basis-5/6">
            {[1, 2, 3, 4, 5, 6].map((string, index) => (
              <ChordGrid
                key={string}
                string={string}
                start={chordStart}
                lineId={lineId}
                chordId={chordId}
                position={position[index]}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
