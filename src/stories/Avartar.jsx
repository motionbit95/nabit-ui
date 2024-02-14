import React from "react";
import PropTypes from "prop-types";
import "./avartar.css";
import "./styleguide.css";

/**
 * Primary UI component for user interaction
 */
export const Avartar = ({ size, src, ...props }) => {
  return (
    <div
      className={["storybook-avartar", `storybook-avartar--${size}`].join(" ")}
      style={src && { backgroundColor: `white` }}
      {...props}
    >
      <div className="storybook-avartar__image-container">
        {!src ? (
          <div className="storybook-avartar__image">
            <svg
              fill="#8c8c8c"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
        ) : (
          <img src={src} width={"100%"} height={"auto"} />
        )}
      </div>
    </div>
  );
};

Avartar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  src: PropTypes.string,
};

Avartar.defaultProps = {
  size: "medium",
};
