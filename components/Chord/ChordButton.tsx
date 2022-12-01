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
  return (
    <button
      className="flex justify-center  border-t border-b border-indigo-600"
      onClick={() => updateChordPosition(lineId, chordId, string, bar)}
    >
      <div
        className={
          open
            ? 'w-5 h-5 bg-black rounded-full'
            : 'border-l border-indigo-900 h-full'
        }
      ></div>
    </button>
  );
}
