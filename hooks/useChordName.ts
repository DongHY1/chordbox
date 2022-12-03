import {Chord} from 'chord-name'
import { useTabStore } from '../stores';
export default function useChordName(lineId:string,chordId:string):Array<any> {
  const getChord = useTabStore((store)=>store.getChord)
  const chordObj = getChord(lineId,chordId)
  const name1 = getFretName(chordObj.start,1,chordObj.position.one)
  const name2 = getFretName(chordObj.start,2,chordObj.position.two)
  const name3 = getFretName(chordObj.start,3,chordObj.position.three)
  const name4 = getFretName(chordObj.start,4,chordObj.position.four)
  const name5 = getFretName(chordObj.start,5,chordObj.position.five)
  const name6 = getFretName(chordObj.start,6,chordObj.position.six)
  const res = new Chord([name1,name2,name3,name4,name5,name6]).getNames()
  console.log(res)
  return res
}
const openNote = new Map()
openNote.set(6,'E')
openNote.set(5,'A')
openNote.set(4,'D')
openNote.set(3,'G')
openNote.set(2,'B')
openNote.set(1,'E')

function getFretName (start:number,string:number,tab:number):string{
  const baseNote = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
  const noteIndex = (baseNote.indexOf(openNote.get(string)) + start) % baseNote.length
  const stringNote = [...baseNote.slice(noteIndex,baseNote.length),...baseNote.slice(0,noteIndex)]
  if(tab===-1) return stringNote[0]
  return stringNote[tab]
}

