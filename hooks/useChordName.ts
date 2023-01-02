import { Chord } from 'chord-name';
import { useTabStore } from '../stores';
import { getFretName } from '../utils';
export default function useChordName(lineId: string, chordId: string) {
  const getChord = useTabStore((store) => store.getChord);
  const chordObj = getChord(lineId, chordId);
  const names: string[] = [];
  for (let i = 1; i <= chordObj.position.length; i++) {
    names.push(getFretName(chordObj.start, i, chordObj.position[i - 1]));
  }
  return new Chord(names).getNames();
}
