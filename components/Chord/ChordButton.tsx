import Image from 'next/image';
import { useFretName } from '../../hooks';
import { useTabStore } from '../../stores';
import cross from '../../public/cross.svg';
interface ChordButtonProps {
  lineId: string;
  chordId: string;
  bar: number;
  string: number;
  open: boolean;
  start: number;
}
export default function ChordButton({
  lineId,
  chordId,
  bar,
  string,
  open,
  start,
}: ChordButtonProps) {
  const updateChordPosition = useTabStore((state) => state.updateChordPosition);
  const getChordStart = useTabStore((state) => state.getChordStart);
  const fretName = useFretName(getChordStart(lineId, chordId), string, bar);
  return (
    <button
      className="flex justify-center border-t border-b border-indigo-600"
      onClick={() => {
        console.log(`${string}弦${bar + start}品`);
        updateChordPosition(lineId, chordId, string, bar);
      }}
    >
      {bar !== 0 ? (
        open ? (
          <div className={'w-5 h-5 bg-black rounded-full'}>
            <div className="text-xs text-slate-50 pt-1">{fretName}</div>
          </div>
        ) : (
          <div className="relative w-5">
            <div className=" hover:text-xs opacity-0 hover:opacity-100 pt-0.5 hover:rounded-full hover:border-gray-900 hover:border hover:w-5 hover:h-5">
              {fretName}
            </div>
          </div>
        )
      ) : open ? (
        <div className="w-4 h-4 border rounded-full border-gray-900">
          <div className="text-xs opacity-0 hover:opacity-100">{fretName}</div>
        </div>
      ) : (
        <Image src={cross} className="w-3 h-3" alt="cross svg" />
      )}
    </button>
  );
}
