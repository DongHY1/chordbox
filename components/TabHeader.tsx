import React from 'react';
import { useSongStore } from '../stores';

export default function TabHeader() {
  const songName = useSongStore((state) => state.songName);
  const author = useSongStore((state) => state.author);
  const description = useSongStore((state) => state.description);
  return (
    <div className="flex flex-col bg-slate-100 basis-1/6 ">
      <span className=" text-center text-5xl pt-12">{songName}</span>
      <span className="text-3xl text-center pt-2">{author}</span>
      <p className="text-center text ">{description}</p>
    </div>
  );
}
