import React from 'react';
import ChordBox from './ChordBox';

export default function ChordRow() {
  return (
    <div className="flex flex-col  bg-slate-300 basis-1/3 ">
      <div className="basis-1/12 text-center text-xl">Intro</div>
      <div className="flex flex-row basis-11/12">
        <ChordBox />
        <ChordBox />
        <ChordBox />
        <ChordBox />
        <ChordBox />
        <ChordBox />
      </div>
    </div>
  );
}
