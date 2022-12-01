import React from 'react';
import { useTabStore } from '../../stores';
export default function SongForm() {
  const updateSongName = useTabStore((state) => state.updateSongName);
  const updateAuthor = useTabStore((state) => state.updateAuthor);
  const updateDescription = useTabStore((state) => state.updateDescription);
  const handleSongNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateSongName(event.target.value);
  };
  const handleAuthorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateAuthor(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateDescription(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center basis-1/4 bg-red-100">
      <div className="flex flex-row">
        <div className="text-xl ml-2 mr-2 ">歌曲名:</div>
        <input
          className="bg-transparent mr-3  -px-1 focus:outline-none"
          type="text"
          onChange={handleSongNameChange}
          aria-label="song name"
        />
      </div>
      <div className="flex flex-row">
        <div className="text-xl ml-2 mt-4 ">歌手名:</div>
        <input
          className="mt-4 appearance-none bg-transparent border-none  mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          onChange={handleAuthorChange}
          aria-label="author"
        />
      </div>
      <div className="flex flex-row">
        <div className="text-xl ml-2 mt-4 ">描述:</div>
        <input
          className="mt-4 appearance-none bg-transparent border-none  mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          onChange={handleDescriptionChange}
          aria-label="Description"
        />
      </div>
    </div>
  );
}
