//This is the mainconatiner of the browse page, it will contain the movie trailer which will
//br playing when you are loggedIN , title and some description
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //This is called as early return
  const mainMovie = movies[0];
  console.log("MainMovie" + mainMovie);
  console.log(typeof mainMovie);
  return (
    <div>
      MainContainer
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};
export default MainContainer;
