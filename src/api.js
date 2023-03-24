import ky from "ky";

export default {
  show(query) {
    return ky
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=MK8EdXLrSH68S06apxjhmquuijg4j41j&q=${query}`
      )
      .json();
  },
};
