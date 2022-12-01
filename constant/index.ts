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
export enum String {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
}
