import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-xl flex items-center rounded-lg hover:bg-opacity-75">
          <FaPlay size={12} />
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl flex items-center  bg-opacity-50 rounded-lg">
          <FaInfoCircle />
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
