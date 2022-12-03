import React from 'react';
import { useChordName } from '../hooks';
import { useTabStore } from '../stores';
export default function TabHeader() {
  const songName = useTabStore((state) => state.songName);
  const author = useTabStore((state) => state.author);
  const description = useTabStore((state) => state.description);
  return (
    <div className="flex flex-col bg-slate-100 basis-1/6 ">
      {/* {chordName.map((chord)=>(
        <span key={chord.name} className=" text-center text-5xl pt-12">{chord.name}</span>
      ))} */}
      <span className=" text-center text-5xl pt-12">{songName}</span>
      <span className="text-3xl text-center pt-2">{author}</span>
      <p className="text-center text ">{description}</p>
    </div>
  );
}
