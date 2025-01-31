import { useSelector } from "react-redux";
import MovieList from "./MovieList";

//This will be below MainConatiner and it will contain n* Movie Lists recommendations with different MovieCards
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-72 relative z-20 pl-6">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          ></MovieList>
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          ></MovieList>
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          ></MovieList>
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          ></MovieList>
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
