import React from 'react';
import TabHeader from './TabHeader';

export default function Tab() {
  return (
    <div className="flex flex-col h-full">
      <TabHeader />
      <div className="bg-slate-400 basis-5/6 "></div>
    </div>
  );
}
