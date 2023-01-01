import { v4 } from 'uuid';
import { Chord } from './interface';
export function getNewChord(): Chord {
  return {
    id: v4(),
    name: 'Input',
    start: 0,
    position: [0, 0, 0, 0, 0, 0],
  };
}
