import {Chord} from 'chord-name'
import { useTabStore } from '../stores';
import { getFretName, getIndexToString } from '../utils';
export default function useChordName(lineId:string,chordId:string):Array<any> {
  const getChord = useTabStore((store)=>store.getChord)
  const chordObj = getChord(lineId,chordId)
  const names: string[] = []
  for(let i =1;i<=6;i++){
    //@ts-ignore
    names.push(getFretName(chordObj.start,i,chordObj.position[getIndexToString(i)]))
  }
  const res = new Chord(names).getNames()
  return res
}

