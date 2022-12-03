const openNote = new Map()
openNote.set(6,'E')
openNote.set(5,'A')
openNote.set(4,'D')
openNote.set(3,'G')
openNote.set(2,'B')
openNote.set(1,'E')
export function getFretName(start:number,string:number,tab:number):string{
    const baseNote = ['C','#C','D','#D','E','F','#F','G','#G','A','#A','B']
    const noteIndex = (baseNote.indexOf(openNote.get(string)) + start) % baseNote.length
    const stringNote = [...baseNote.slice(noteIndex,baseNote.length),...baseNote.slice(0,noteIndex)]
    if(tab===-1) return stringNote[0]
    return stringNote[tab]
}
