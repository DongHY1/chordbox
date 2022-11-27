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
  deleteLines: (title: number) => void;
}
export const useTabStore = create<TabState>()((set) => ({
  lines: [
    {
      id: 1,
      title: 'Intro',
      chords: [
        {
          name: 'Amaj7',
          position: { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 },
        },
        {
          name: 'Bmaj7',
          position: { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 },
        },
      ],
    },
  ],
  addLines: (line: Line) => set((state) => ({ lines: [...state.lines, line] })),
  deleteLines: (id) =>
    set((state) => ({
      lines: state.lines.filter((line) => line.id !== id),
    })),
}));
