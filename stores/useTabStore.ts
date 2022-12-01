import create from 'zustand';
import { v4 as uuidv4, v4 } from 'uuid';
import { Chord } from '../constant';
interface Line {
  id: string;
  title: string;
  chords: Array<Chord>;
}
interface TabState {
  lines: Array<Line>;
  addLines: (line: Line) => void;
  deleteLines: (id: string) => void;
  duplicateLines: (id: string) => void;
  addChord: (id: string) => void;
  deleteChord: (lineId: string, chordId: string) => void;
  addChordStart: (lineId: string, chordId: string) => void;
  decreaseChordStart: (lineId: string, chordId: string) => void;
  updateChordName: (lineId: string, chordId: string, chordName: string) => void;
  // updateChordPosition: (
  //   lineId: string,
  //   chordId: string,
  //   string:string,

  // ) => void;
  updateRowTitle: (id: string, title: string) => void;
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
  addChordStart: (lineId, chordId) =>
    set((state) => ({
      lines: getAddChordStart(lineId, chordId, state.lines),
    })),
  decreaseChordStart: (lineId, chordId) =>
    set((state) => ({
      lines: getDeleteChordStart(lineId, chordId, state.lines),
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
  id: string,
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
export function getDuplicateLines(id: string, lines: Array<Line>): Array<Line> {
  let temp = getNewLine();
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].id === id) {
      temp.title = lines[i].title;
      temp.chords = lines[i].chords;
    }
  }
  return [...lines, temp];
}
export function getNewChordLine(id: string, lines: Array<Line>): Array<Line> {
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
    id: v4(),
    title: 'Intro',
    chords: [getNewChord()],
  };
  return emptyLine;
}
export function getNewChord(): Chord {
  const emptyChord: Chord = {
    id: v4(),
    name: 'Input',
    start: 0,
    position: { one: 0, two: 1, three: 2, four: 3, five: 4, six: 3 },
  };
  return emptyChord;
}
export function getDeleteChord(
  lineId: string,
  chordId: string,
  lines: Array<Line>
): Array<Line> {
  // 通过lineId 找到 line
  const lineIndex = lines.findIndex((line) => line.id === lineId);
  const target = lines[lineIndex];
  // 通过该chordId 找到 line中对应的chord
  const chords = target.chords.filter((chord) => chord.id !== chordId);
  target.chords = chords;
  const newLines = lines.map((line) => {
    return line.id === target.id ? target : line;
  });
  return newLines;
}
export function getUpdateChordName(
  lineId: string,
  chordId: string,
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
export function getAddChordStart(
  lineId: string,
  chordId: string,
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
  targetChord.start++;
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}
export function getDeleteChordStart(
  lineId: string,
  chordId: string,
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
  targetChord.start > 0 ? targetChord.start-- : targetChord;
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}
