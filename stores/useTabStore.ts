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
  updateRowTitle: (id: number, title: string) => void;
}

export const useTabStore = create<TabState>()((set) => ({
  lines: [getNewLine()],
  addLines: (line: Line) => set((state) => ({ lines: [...state.lines, line] })),
  deleteLines: (id) =>
    set((state) => ({
      lines: state.lines.filter((line) => line.id !== id),
    })),
  duplicateLines: (id) =>
    set((state) => ({ lines: getDuplicateLines(id, state.lines) })),
  updateRowTitle: (id, title) =>
    set((state) => ({ lines: getNewLines(id, title, state.lines) })),
}));
function getNewLines(
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
function getDuplicateLines(id: number, lines: Array<Line>): Array<Line> {
  let temp = getNewLine();
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].id === id) {
      temp.title = lines[i].title;
      temp.chords = lines[i].chords;
    }
  }
  return [...lines, temp];
}
export function getNewLine(): Line {
  const emptyLine: Line = {
    id: Date.now(),
    title: 'Intro',
    chords: [
      {
        name: 'Input',
        position: { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 },
      },
    ],
  };
  return emptyLine;
}
