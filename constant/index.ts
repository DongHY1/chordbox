export interface Tab {
  title: String;
  author: String;
  tone: String;
  description: String;
  chords: Array<Chord>;
}
export interface Chord {
  id: number;
  name: String;
  position: {
    one: Number;
    two: Number;
    three: Number;
    four: Number;
    five: Number;
    six: Number;
  };
}
