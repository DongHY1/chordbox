import create from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';
import { v4 } from 'uuid';
export interface Chord {
  id: string;
  name: string;
  start: number;
  position: {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
    six: number;
  };
}
interface Line {
  id: string;
  title: string;
  chords: Array<Chord>;
}
interface TabState {
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
    (set,get) => ({
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
      getChord:(lineId,chordId) => {
          const lines:Array<Line> = get().lines
          // 通过lineId 找到 line
          const lineIndex = lines.findIndex((line) => line.id === lineId);
          const target = lines[lineIndex];
          const chord = target.chords.find((chord)=>chord.id === chordId)
          return chord!
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
      getChordStart:(lineId,chordId) => {
        const lines:Array<Line> = get().lines
        // 通过lineId 找到 line
        const lineIndex = lines.findIndex((line) => line.id === lineId);
        const target = lines[lineIndex];
        const chord = target.chords.find((chord)=>chord.id === chordId)
        return chord!.start
      }
      
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
    position: { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 },
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
  console.log(targetChord)
  const newLines = lines.map((line) => {
    return line.id === targetLine.id ? targetLine : line;
  });
  return newLines;
}
export function getUpdateChordPosition(
  lineId: string,
  chordId: string,
  chordString: number,
  chordPosition: number,
  lines: Array<Line>
): Array<Line> {
  const lineIndex = lines.findIndex((line) => line.id === lineId);
  const targetLine = lines[lineIndex];
  const chordIndex = targetLine.chords.findIndex(
    (chord) => chord.id === chordId
  );
  const targetChord = targetLine.chords[chordIndex];
  switch (chordString) {
    case 6:
      if (targetChord.position.six === chordPosition) {
        targetChord.position.six = -1;
        break;
      } else {
        targetChord.position.six = chordPosition;
        break;
      }
    case 5:
      if (targetChord.position.five === chordPosition) {
        targetChord.position.five = -1;
        break;
      } else {
        targetChord.position.five = chordPosition;
        break;
      }
    case 4:
      if (targetChord.position.four === chordPosition) {
        targetChord.position.four = -1;
        break;
      } else {
        targetChord.position.four = chordPosition;
        break;
      }
    case 3:
      if (targetChord.position.three === chordPosition) {
        targetChord.position.three = -1;
        break;
      } else {
        targetChord.position.three = chordPosition;
        break;
      }
    case 2:
      if (targetChord.position.two === chordPosition) {
        targetChord.position.two = -1;
        break;
      } else {
        targetChord.position.two = chordPosition;
        break;
      }
    case 1:
      if (targetChord.position.one === chordPosition) {
        targetChord.position.one = -1;
        break;
      } else {
        targetChord.position.one = chordPosition;
        break;
      }
  }

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
