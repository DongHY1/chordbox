import React, { useRef } from 'react';
import ChordForm from './Form/ChordForm';
import SongForm from './Form/SongForm';
import Header from './Header';
import Tab from './Tab';
export default function Main() {
  const printRef = useRef<{ handleTabPrintClick(): void }>(null);
  const handleTabPrint = () => {
    printRef.current && printRef.current.handleTabPrintClick();
  };
  const handleShareClick = () => {
    navigator.clipboard.writeText(location.href);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row basis-11/12">
        <main className="basis-3/4 bg-indigo-500">
          <Tab ref={printRef} />
        </main>
        <aside className="flex flex-col basis-1/4 bg-sky-500">
          <SongForm />
          <ChordForm />
          <button
            type="button"
            onClick={handleShareClick}
            className="border border-cyan-800 rounded-lg"
          >
            分享
          </button>
          <button
            type="button"
            onClick={handleTabPrint}
            className="border border-cyan-800 rounded-lg"
          >
            打印
          </button>
        </aside>
      </div>
    </div>
  );
}
