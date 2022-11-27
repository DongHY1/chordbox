import React from 'react';
import { useTabStore } from '../stores';
import ChordBox from './Chord/ChordBox';
import TabHeader from './TabHeader';
export default function Tab() {
  const lines = useTabStore((state) => state.lines);
  return (
    <div className="flex flex-col h-full">
      <TabHeader />
      <div className="flex flex-col bg-slate-400 basis-5/6 ">
        {lines.map((item) => (
          <div className="flex flex-col  bg-slate-300 basis-1/3" key={item.id}>
            <div className="basis-1/12 text-center text-xl">{item.title}</div>
            <div className="flex flex-row justify-start basis-11/12">
              {item.chords.map((chord, index) => (
                <ChordBox key={index} chordName={chord.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
