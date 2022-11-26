import React from 'react';
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
          <aside className="basis-1/4 bg-sky-500"></aside>
        </div>
      </div>
    </>
  );
}
