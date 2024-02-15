import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import "./styleguide.css";
import { Typography } from "./Typography";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ ...props }) => {
  return (
    <div className={`card-container card-container--${props.colorMode}`}>
      <div className="card-content">
        <Typography
          style={"subheadline"}
          weight={"light"}
          content={props.content.caption}
        />
        <Typography
          style={"xlarge-title"}
          weight={"bold"}
          content={props.content.title}
        />
        <Typography
          style={"title3"}
          weight={"regular"}
          content={props.content.subtitle}
        />
        <div style={{ marginTop: "16px" }} />
        <Typography style={"body"} content={props.content.description} />
      </div>
      <div
        className="card-image"
        style={{
          width: "100%",
          minHeight: "300px",
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  content: {
    caption: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  },
  colorMode: PropTypes.oneOf(["light", "dark"]),
};

Card.defaultProps = {
  content: {
    caption:
      "From studio portraits to epic Alpine landscapes, discover the best in photography, retouching and photojournalism.",
    title: "Images",
    subtitle: "Capture the perfect moment in every instant.",
    description:
      "Explore professional photo categories to express your ideas and discover beautiful designs.",
  },
  colorMode: "light",
  image:
    "https://firebasestorage.googleapis.com/v0/b/deez-node-firebase.appspot.com/o/images%2Fultra-detailed-nebula-abstract-wallpaper-4.jpg?alt=media&token=92fd9bea-a074-4f5c-816a-b8754a627279",
};
