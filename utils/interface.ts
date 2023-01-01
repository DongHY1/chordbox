export interface Chord {
  id: string;
  name: string;
  start: number;
  position: Array<number>;
}
export interface Line {
  id: string;
  title: string;
  chords: Array<Chord>;
}
export interface TabState {
  songName: string;
  author: string;
  description: string;
  lines: Array<Line>;
  updateSongName: (song: string) => void;
  updateAuthor: (author: string) => void;
  updateDescription: (desc: string) => void;
  addLines: (line: Line) => void;
  deleteLines: (id: string) => void;
  duplicateLines: (id: string) => void;
  addChord: (id: string) => void;
  deleteChord: (lineId: string, chordId: string) => void;
  addChordStart: (lineId: string, chordId: string) => void;
  decreaseChordStart: (lineId: string, chordId: string) => void;
  updateChordName: (lineId: string, chordId: string, chordName: string) => void;
  updateChordPosition: (
    lineId: string,
    chordId: string,
    string: number,
    position: number
  ) => void;
  updateRowTitle: (id: string, title: string) => void;
  getChordStart: (lineId: string, chordId: string) => number;
  getChord: (lineId: string, chordId: string) => Chord;
}
export interface ChordBoxProps {
  chord: Chord;
  lineId: string;
}
