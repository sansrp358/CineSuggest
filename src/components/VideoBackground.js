import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  //fetching movie trailer with the help of movie id
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US",
      API_OPTIONS
    );
    const response = 
  };
  return <div>VideoBackground</div>;
};
export default VideoBackground;
