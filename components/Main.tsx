import React from 'react';
import ChordForm from './Form/ChordForm';
import SongForm from './Form/SongForm';
import Header from './Header';
import Tab from './Tab';

export default function Main() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-row basis-11/12">
          <main className="basis-3/4 bg-indigo-500">
            <Tab />
          </main>
          <aside className="flex flex-col basis-1/4 bg-sky-500">
            <SongForm />
            <ChordForm />
          </aside>
        </div>
      </div>
    </>
  );
}
