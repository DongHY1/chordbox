export interface Tab {
  title: string;
  author: string;
  tone: string;
  description: string;
  chords: Array<Chord>;
}
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
