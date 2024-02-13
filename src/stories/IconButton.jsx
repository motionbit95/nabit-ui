import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import "./styleguide.css";

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ size, icon, ...props }) => {
  return (
    <button
      type="button"
      className={["storybook-button", `circle--${size}`].join(" ")}
      {...props}
    >
      <img src={icon} width={"100%"} height={"auto"} />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  size: "medium",
  onClick: undefined,
};
