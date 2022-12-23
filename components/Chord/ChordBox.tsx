import React, { useState } from 'react';
import { Chord } from '../../stores/useTabStore';
import { useTabStore } from '../../stores';
import ChordGrid from './ChordGrid';
import { useChordName } from '../../hooks';
import { getIndexToString } from '../../utils';
import { event } from 'cypress/types/jquery';
interface ChordBoxProps {
  chord: Chord;
  lineId: string;
}
export default function ChordBox({
  chord: {
    id: chordId,
    name: chordName,
    start: chordStart,
    position: chordPosition,
  },
  lineId,
}: ChordBoxProps) {
  const deleteChord = useTabStore((state) => state.deleteChord);
  const addChordStart = useTabStore((state) => state.addChordStart);
  const decreaseChordStart = useTabStore((state) => state.decreaseChordStart);
  const chords = useChordName(lineId, chordId);
  const [chordIndex, setChordIndex] = useState(0);
  const [isChordStartClick, setIsChordStartClick] = useState(false);
  return (
    <div className="flex flex-col basis-1/6 bg-red-100 m-2 h-36 ">
      <div className="flex justify-evenly">
        <div className="text-center basis-1/2">{chords[chordIndex].name}</div>
        <div
          className="h-full m-auto cursor-pointer basis-1/4"
          onClick={() => {
            setChordIndex((chordIndex + 1) % chords.length);
          }}
        >
          🔄
        </div>
        <div
          className="h-full m-auto cursor-pointer basis-1/4"
          onClick={() => deleteChord(lineId, chordId)}
        >
          🚮
        </div>
      </div>
      <div className="basis-5/6 bg-teal-200 ">
        <div className="flex flex-row bg-fuchsia-100 h-full">
          <aside className="relative flex flex-col bg-fuchsia-200 basis-1/6 text-center cursor-pointer">
            {isChordStartClick && (
              <div className="absolute -top-6 w-full flex justify-between bg-fuchisia-300">
                <div
                  className=" hover:bg-fuchsia-400 w-1/2"
                  onClick={() => addChordStart(lineId, chordId)}
                >
                  +
                </div>
                <div
                  className="hover:bg-fuchsia-400 w-1/2"
                  onClick={() => decreaseChordStart(lineId, chordId)}
                >
                  -
                </div>
              </div>
            )}
            <div
              className="h-1/4 hover:bg-fuchsia-400"
              onClick={() => setIsChordStartClick(!isChordStartClick)}
            >
              {chordStart}
            </div>
          </aside>
          <main className="grid grid-flow-col auto-cols-fr bg-fuchsia-300  basis-5/6">
            {[6, 5, 4, 3, 2, 1].map((string) => (
              <ChordGrid
                key={string}
                string={string}
                start={chordStart}
                // @ts-ignore
                position={chordPosition[getIndexToString(string)]}
                lineId={lineId}
                chordId={chordId}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
