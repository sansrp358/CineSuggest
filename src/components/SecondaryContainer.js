import { useSelector } from "react-redux";
import MovieList from "./MovieList";

//This will be below MainConatiner and it will contain n* Movie Lists recommendations with different MovieCards
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList
        title={"Now Playing"}
        movies={movies.nowPlayingMovies}
      ></MovieList>
    </div>
  );
};
export default SecondaryContainer;
