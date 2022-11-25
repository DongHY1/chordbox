import React from 'react';
import Header from './Header';

export default function Main() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-row basis-11/12">
          <aside className="basis-3/4 bg-indigo-500"></aside>
          <main className="basis-1/4 bg-sky-500"></main>
        </div>
      </div>
    </>
  );
}
