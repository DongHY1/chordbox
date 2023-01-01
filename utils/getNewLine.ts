import { Line } from './interface';
import { v4 } from 'uuid';
import { getNewChord } from './getNewChord';
export function getNewLine(): Line {
  return {
    id: v4(),
    title: 'Intro',
    chords: [getNewChord()],
  };
}
