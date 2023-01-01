import { openNote, baseNote } from '../stores';
export function getFretName(start: number, string: number, tab: number) {
  const getStringFromOpenNote = openNote.get(string);
  if (getStringFromOpenNote === undefined)
    throw new Error('Invalid string number');
  const noteIndex =
    (baseNote.indexOf(getStringFromOpenNote) + start) % baseNote.length;
  const stringNote = [
    ...baseNote.slice(noteIndex, baseNote.length),
    ...baseNote.slice(0, noteIndex),
  ];
  return tab === -1 ? stringNote[0] : stringNote[tab];
}
