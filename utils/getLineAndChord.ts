import { Line } from './interface';

export function getLineAndChord(
  lines: Array<Line>,
  lineId: string,
  chordId: string
) {
  const lineIndex = lines.findIndex((line) => line.id === lineId);
  const targetLine = lines[lineIndex];
  const chordIndex = targetLine.chords.findIndex(
    (chord) => chord.id === chordId
  );
  const targetChord = targetLine.chords[chordIndex];
  return {
    targetLine,
    targetChord,
  };
}
