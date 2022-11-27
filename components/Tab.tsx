import React from 'react';
import ChordRow from './Chord/ChordRow';
import TabHeader from './TabHeader';

export default function Tab() {
  return (
    <div className="flex flex-col h-full">
      <TabHeader />
      <div className="flex flex-col bg-slate-400 basis-5/6 ">
        <ChordRow />
        <ChordRow />
        <ChordRow />
      </div>
    </div>
  );
}
