import React from 'react';
import plus from '../../public/plus.svg';
import Image from 'next/image';
import { useTabStore } from '../../stores';
import { getNewLine } from '../../utils';

export default function ChordForm() {
  const lines = useTabStore((state) => state.lines);
  const addLines = useTabStore((state) => state.addLines);
  const addChord = useTabStore((state) => state.addChord);
  const deleteLines = useTabStore((state) => state.deleteLines);
  const updateRowTitle = useTabStore((state) => state.updateRowTitle);
  const duplicateLines = useTabStore((state) => state.duplicateLines);

  return (
    <div className="flex bg-slate-100 border-4 flex-col basis-3/4 ">
      <div className="flex flex-row justify-between  ">
        <div className="text-xl ml-2">Lines</div>
        <Image
          src={plus}
          className="w-4 h-4 mt-1 mr-2 cursor-pointer"
          alt="plus svg"
          onClick={() => {
            addLines(getNewLine());
          }}
        />
      </div>
      {lines.map((item) => (
        <div
          className="flex flex-row justify-between rounded-xl bg-gray-200 m-2"
          key={item.id}
        >
          <input
            className="bg-transparent focus:outline-none text-xl text-center ml-2 pt-1"
            value={item.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              updateRowTitle(item.id, event.target.value)
            }
          />
          <div className="flex flex-row justify-between mr-2">
            <div
              className="m-2 cursor-pointer"
              onClick={() => {
                if (lines.length < 3) {
                  duplicateLines(item.id);
                }
              }}
            >
              复制
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => deleteLines(item.id)}
            >
              删除
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => addChord(item.id)}
            >
              添加和弦
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
