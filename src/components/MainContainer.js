//This is the mainconatiner of the browse page, it will contain the movie trailer which will
//be playing when you are loggedIN , title and some description
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //This is called as early return
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};
export default MainContainer;
