import create from 'zustand';
interface SongState {
  songName: string;
  author: string;
  description: string;
  updateSongName: (song: string) => void;
  updateAuthor: (author: string) => void;
  updateDescription: (desc: string) => void;
}
export const useSongStore = create<SongState>()((set) => ({
  songName: '普通朋友',
  author: 'David Tao',
  description: '这是一个示范',
  updateSongName: (song) => set(() => ({ songName: song })),
  updateAuthor: (author) => set(() => ({ author })),
  updateDescription: (desc) => set(() => ({ description: desc })),
}));
