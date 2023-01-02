import create from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';
import { v4 } from 'uuid';
import { Line, TabState } from '../utils/interface';
import { getLineAndChord, getNewChord, getNewLine } from '../utils';
const hashStorage: StateStorage = {
  getItem: (key): string => {
    const hash = window && window.location.hash.slice(1);
    const searchParams = new URLSearchParams(hash);
    const storedValue = searchParams.get(key);
    if (!storedValue) {
      throw new Error('no value');
    }
    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const hash = window && window.location.hash.slice(1);
    const searchParams = new URLSearchParams(hash);
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const hash = window && window.location.hash.slice(1);
    const searchParams = new URLSearchParams(hash);
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

export const useTabStore = create<TabState>()(
  persist(
    (set, get) => ({
      songName: '普通朋友',
      author: 'David Tao',
      description: '这是一个示范',
      lines: [getNewLine()],
      updateSongName: (song) => set(() => ({ songName: song })),
      updateAuthor: (author) => set(() => ({ author })),
      updateDescription: (desc) => set(() => ({ description: desc })),
      addLines: (line: Line) =>
        set((state) => ({ lines: [...state.lines, line] })),
      addChord: (id) =>
        set((state) => ({ lines: getNewChordLine(id, state.lines) })),
      getChord: (lineId, chordId) => {
        const lines: Array<Line> = get().lines;
        const lineIndex = lines.findIndex((line) => line.id === lineId);
        const target = lines[lineIndex];
        const chord = target.chords.find((chord) => chord.id === chordId);
        return chord!;
      },
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
      updateChordPosition: (lineId, chordId, string, position) =>
        set((state) => ({
          lines: getUpdateChordPosition(
            lineId,
            chordId,
            string,
            position,
            state.lines
          ),
        })),
      deleteLines: (id) =>
        set((state) => ({
          lines: state.lines.filter((line) => line.id !== id),
        })),
      duplicateLines: (id) =>
        set((state) => ({ lines: getDuplicateLines(id, state.lines) })),
      updateRowTitle: (id, title) =>
        set((state) => ({ lines: getNewTitleLines(id, title, state.lines) })),
      getChordStart: (lineId, chordId) => {
        const { targetLine } = getLineAndChord(get().lines, lineId, chordId);
        const chord = targetLine.chords.find((chord) => chord.id === chordId);
        return chord!.start;
      },
    }),
    {
      name: 'tabstorage',
      getStorage: () => hashStorage,
    }
  )
);
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
      temp.id = v4();
      temp.title = lines[i].title;
      temp.chords = JSON.parse(JSON.stringify(lines[i].chords));
    }
  }
  for (let i = 0; i < temp.chords.length; i++) {
    temp.chords[i].id = v4();
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

export function getDeleteChord(
  lineId: string,
  chordId: string,
  lines: Array<Line>
): Array<Line> {
  const { targetLine } = getLineAndChord(lines, lineId, chordId);
  targetLine.chords = targetLine.chords.filter((chord) => chord.id !== chordId);
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}

export function getUpdateChordName(
  lineId: string,
  chordId: string,
  chordName: string,
  lines: Array<Line>
): Array<Line> {
  const { targetLine, targetChord } = getLineAndChord(lines, lineId, chordId);
  targetChord.name = chordName;
  console.log(targetChord);
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}
export function getUpdateChordPosition(
  lineId: string,
  chordId: string,
  string: number,
  chordPosition: number,
  lines: Array<Line>
): Array<Line> {
  const { targetLine, targetChord } = getLineAndChord(lines, lineId, chordId);
  targetChord.position[string - 1] = chordPosition;
  return lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
}
export function getAddChordStart(
  lineId: string,
  chordId: string,
  lines: Array<Line>
): Array<Line> {
  const { targetLine, targetChord } = getLineAndChord(lines, lineId, chordId);
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
  const { targetLine, targetChord } = getLineAndChord(lines, lineId, chordId);
  targetChord.start > 0 ? targetChord.start-- : targetChord;
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}
