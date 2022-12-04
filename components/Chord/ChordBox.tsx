import React, { useState } from 'react';
import { Chord } from '../../stores/useTabStore';
import { useTabStore } from '../../stores';
import ChordGrid from './ChordGrid';
import { useChordName } from '../../hooks';
import { getIndexToString } from '../../utils';
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
  const updateChordName = useTabStore((state) => state.updateChordName);
  const addChordStart = useTabStore((state) => state.addChordStart);
  const decreaseChordStart = useTabStore((state) => state.decreaseChordStart);
  const chords = useChordName(lineId,chordId)
  const [isChordStartClick, setIsChordStartClick] = useState(false);
  return (
    <div className="flex flex-col basis-1/6 bg-red-100 m-2 h-36 ">
      {chords.map((chord)=>(
        <div key={chord.name} className='text-xl'>{chord.name}</div>
      ))}
      <div className="flex justify-center  basis-1/6 text-center bg-teal-100">
        <input
          className="text-center bg-transparent mr-3  -px-1 focus:outline-none"
          value={chordName}
          onChange={(event) =>
            updateChordName(lineId, chordId, event.target.value)
          }
        />
        <div
          className="h-full m-auto cursor-pointer"
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
            {[1,2,3,4,5,6].map((string)=>(
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
