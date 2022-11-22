import React from 'react';

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-3">
      <div>
        <span className="text-3xl text-slate-50">ChordBox</span>
      </div>
      <div className="flex justify-around w-52">
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Import
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Export
        </button>
      </div>
    </nav>
  );
}
