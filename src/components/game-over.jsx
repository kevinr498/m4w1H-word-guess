import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import api from "../api";

export default function GameOver({ status }) {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    api.show(status === " Won" ? "Winner" : "Loser").then((response) => {
      setGif(response.data[0].images.original.url);
      console.log(response);
    });
  });

  return (
    <section className="flex flex-col justify-center">
      <h2
        className={`${
          status === "won" ? "text-green-400" : "text-red-400"
        } my-2 text-center text-2xl font-black capitalize`}
      >
        {status}!
      </h2>
      <img className="flex justify-center" src={gif} alt={status} />

      <button
        className="button w-25 mt-3 justify-center rounded bg-blue-200 p-2 hover:bg-violet-600 active:bg-violet-700"
        onClick={() => window.location.reload()}
      >
        Shall we play again?
      </button>
    </section>
  );
}

GameOver.propTypes = {
  status: PropTypes.oneOf(["won", "lost"]).isRequired,
};
