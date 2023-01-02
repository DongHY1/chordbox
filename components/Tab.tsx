import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useTabStore } from '../stores';
import ChordBox from './Chord/ChordBox';
import TabHeader from './TabHeader';
import { useReactToPrint } from 'react-to-print';
const Tab = (props: {}, ref: React.Ref<{ handleTabPrintClick(): void }>) => {
  const tabRef = useRef(null);
  const lines = useTabStore((state) => state.lines);
  const handleTabPrint = useReactToPrint({
    content: () => tabRef.current,
  });
  useImperativeHandle(ref, () => ({
    handleTabPrintClick(): any {
      handleTabPrint();
    },
  }));
  return (
    <div className="flex flex-col h-full" ref={tabRef}>
      <TabHeader />
      <div className="flex flex-col bg-slate-100 basis-5/6">
        {lines.map((item) => (
          <div
            className="flex flex-col border-t-4 border-b-4 bg-slate-100 basis-1/3"
            key={item.id}
          >
            <div className="basis-1/12 text-center text-xl">{item.title}</div>
            <div className="flex flex-row  justify-start basis-11/12">
              {item.chords.map((chord) => (
                <ChordBox key={chord.id} chord={chord} lineId={item.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default forwardRef(Tab);
