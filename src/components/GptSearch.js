import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BG_IMG } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMG} alt="Bckground Img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
