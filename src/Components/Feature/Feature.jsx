import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { Rating } from "@mui/material";
import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <img
        src="https://media.melty.fr/article-4769579-ajust_768-f6/media.jpg"
        alt="spiderman movie"
        className="img"
        height={700}
      />

      <div className="info">
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            PLAY
          </button>
          <button className="more">
            <InfoOutlined />
            MORE
          </button>
        </div>
        <Rating
          name="size-large"
          defaultValue={5}
          size="large"
          className="rate"
        />
        <span className="desc">
          Avec l'identité de Spiderman désormais révélée, celui-ci est démasqué
          et n'est plus en mesure de séparer sa vie normale en tant que Peter
          Parker des enjeux élevés d'être un superhéros. Lorsque Peter demande
          de l'aide au docteur Strange, les enjeux deviennent encore plus
          dangereux, l'obligeant à découvrir ce que signifie vraiment être
          Spiderman.
        </span>
      </div>
    </div>
  );
};

export default Feature;