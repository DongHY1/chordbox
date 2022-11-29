import create from 'zustand';
import { Chord } from '../constant';
interface Line {
  id: number;
  title: string;
  chords: Array<Chord>;
}
interface TabState {
  lines: Array<Line>;
  addLines: (line: Line) => void;
  deleteLines: (id: number) => void;
  duplicateLines: (id: number) => void;
  addChord: (id: number) => void;
  deleteChord: (lineId: number, chordId: number) => void;
  updateChordName: (lineId: number, chordId: number, chordName: string) => void;
  updateRowTitle: (id: number, title: string) => void;
}

export const useTabStore = create<TabState>()((set) => ({
  lines: [getNewLine()],
  addLines: (line: Line) => set((state) => ({ lines: [...state.lines, line] })),
  addChord: (id) =>
    set((state) => ({ lines: getNewChordLine(id, state.lines) })),
  deleteChord: (lineId, chordId) =>
    set((state) => ({
      lines: getDeleteChord(lineId, chordId, state.lines),
    })),
  updateChordName: (lineId, chordId, chordName) =>
    set((state) => ({
      lines: getUpdateChordName(lineId, chordId, chordName, state.lines),
    })),
  deleteLines: (id) =>
    set((state) => ({
      lines: state.lines.filter((line) => line.id !== id),
    })),
  duplicateLines: (id) =>
    set((state) => ({ lines: getDuplicateLines(id, state.lines) })),
  updateRowTitle: (id, title) =>
    set((state) => ({ lines: getNewTitleLines(id, title, state.lines) })),
}));
export function getNewTitleLines(
  id: number,
  title: string,
  lines: Array<Line>
): Array<Line> {
  const res: Array<Line> = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].id !== id) {
      res.push(lines[i]);
    } else {
      lines[i].title = title;
      res.push(lines[i]);
    }
  }
  return res;
}
export function getDuplicateLines(id: number, lines: Array<Line>): Array<Line> {
  let temp = getNewLine();
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].id === id) {
      temp.title = lines[i].title;
      temp.chords = lines[i].chords;
    }
  }
  return [...lines, temp];
}
export function getNewChordLine(id: number, lines: Array<Line>): Array<Line> {
  const lineId = lines.findIndex((line) => line.id === id);
  const target = lines[lineId];
  if (target.chords.length < 6) {
    target.chords.push(getNewChord());
  }
  const newLines = lines.map((line) => {
    return line.id === target.id ? target : line;
  });
  return newLines;
}
export function getNewLine(): Line {
  const emptyLine: Line = {
    id: Date.now(),
    title: 'Intro',
    chords: [getNewChord()],
  };
  return emptyLine;
}
export function getNewChord(): Chord {
  const emptyChord: Chord = {
    id: Date.now(),
    name: 'Input',
    start: 0,
    position: { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 },
  };
  return emptyChord;
}
export function getDeleteChord(
  lineId: number,
  chordId: number,
  lines: Array<Line>
): Array<Line> {
  // 通过lineId 找到 line
  const lineIndex = lines.findIndex((line) => line.id === lineId);
  const target = lines[lineIndex];
  // 通过该chordId 找到 line中对应的chord
  const chords = target.chords.filter((chord) => chord.id !== chordId);
  console.log('改变前和弦是', target.chords);
  target.chords = chords;
  console.log('改变后和弦是', target.chords);
  const newLines = lines.map((line) => {
    return line.id === target.id ? target : line;
  });
  return newLines;
}
function getUpdateChordName(
  lineId: number,
  chordId: number,
  chordName: string,
  lines: Array<Line>
): Array<Line> {
  // 通过lineId 找到 line
  const lineIndex = lines.findIndex((line) => line.id === lineId);
  const targetLine = lines[lineIndex];
  // 通过该chordId 找到 line中对应的chord
  const chordIndex = targetLine.chords.findIndex(
    (chord) => chord.id === chordId
  );
  const targetChord = targetLine.chords[chordIndex];
  targetChord.name = chordName;
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}
