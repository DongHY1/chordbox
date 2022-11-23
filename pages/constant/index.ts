export interface Tab {
  title: String;
  author: String;
  tone: String;
  description: String;
  chords: Array<Chord>;
}
export interface Chord {
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
// const tab: Tab = {
//   title: 'david',
//   author: 'haoyu',
//   tone: 'test',
//   description: 'test',
//   chords: [
//     {
//       name: 'test',
//       position: { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 },
//     },
//   ],
// };
