import React from "react";
import PropTypes from "prop-types";

import "./banner.css";
import "./styleguide.css";

export const Banner = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  ...props
}) => (
  <div className="bg-gradient">
    <div className={`banner--${props.align}`}>
      <div className="banner-title">{title}</div>
      <div className="banner-description">{description}</div>
    </div>
    <div className="banner-close">
      <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </div>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

Banner.defaultProps = {
  title: "Title",
  description: "Description",
  buttonLabel: "Button",
  buttonLink: "#",
  align: "center",
};
