import cross from '../../public/cross.svg';
import Image from 'next/image';
import { useTabStore } from '../../stores';
import { useFretName } from '../../hooks';
interface ChordFretProps {
  lineId: string;
  chordId: string;
  bar: number;
  string: number;
  open: boolean;
}
export default function ChordFret({
  lineId,
  chordId,
  bar,
  string,
  open,
}: ChordFretProps) {
  const updateChordPosition = useTabStore((state) => state.updateChordPosition);
  const fretName = useFretName(string,bar)
  return (
    <button
      className="border-b border-indigo-600 "
      onClick={() => updateChordPosition(lineId, chordId, string, bar)}
    >
      <div className="flex justify-center ">
        {open ? (
          <div className="w-4 h-4 border rounded-full border-gray-900">
            <div className='text-xs opacity-0 hover:opacity-100'>{fretName}</div>
          </div>
        ) : (
          <Image src={cross} className="w-3 h-3 " alt="cross svg" />
        )}
      </div>
    </button>
  );
}
