import { Chord } from 'chord-name';
import { useTabStore } from '../stores';
import { getFretName } from '../utils';
export default function useChordName(lineId: string, chordId: string) {
  const getChord = useTabStore((store) => store.getChord);
  const chordObj = getChord(lineId, chordId);
  const names: string[] = [];
  for (let i = 0; i < chordObj.position.length; i++) {
    names.push(getFretName(chordObj.start, i, chordObj.position[i]));
  }
  return new Chord(names).getNames();
}
