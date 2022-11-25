import { FaGithub, FaTwitter } from 'react-icons/fa';
export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-3 basis-1/12 ">
      <div>
        <span className="text-3xl text-slate-50">ChordBox</span>
      </div>
      <div className="flex justify-around w-24">
        <a
          href="https://github.com/DongHY1/chordbox"
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded"
        >
          <FaGithub className="text-white" />
        </a>
        <a
          href="https://twitter.com/SZU_HaoYu"
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded"
        >
          <FaTwitter className="text-white" />
        </a>
      </div>
    </nav>
  );
}
