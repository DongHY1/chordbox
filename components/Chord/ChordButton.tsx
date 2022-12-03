import { useFretName } from '../../hooks';
import { useTabStore } from '../../stores';
interface ChordButtonProps {
  lineId: string;
  chordId: string;
  bar: number;
  string: number;
  open: boolean;
}
export default function ChordButton({
  lineId,
  chordId,
  bar,
  string,
  open,
}: ChordButtonProps) {
  const updateChordPosition = useTabStore((state) => state.updateChordPosition);
  const fretName = useFretName(string,bar)
  return (
    <button
      className="flex justify-center  border-t border-b border-indigo-600"
      onClick={() => updateChordPosition(lineId, chordId, string, bar)}
    > 
      {open?(
      <div className={'w-5 h-5 bg-black rounded-full'}>
          <div className='text-xs text-slate-50 pt-1'>{fretName}</div>
      </div>
      ):(
      <div className='border-l border-indigo-900 h-full hover:w-5 hover:h-5 hover:border hover:rounded-full hover:border-gray-900'>
              <div className='hover:text-xs opacity-0 hover:opacity-100 hover:pt-0.5'>{fretName}</div>
      </div>
      )}

    </button>
  );
}
