import React from "react";
import PropTypes from "prop-types";
import "./tag.css";
import "./styleguide.css";
import { IconButton } from "./IconButton";

/**
 * Primary UI component for user interaction
 */
export const Tag = ({ type, color, size, label, ...props }) => {
  return (
    <div
      className={`tag-container tag-container--${size}`}
      style={
        type === "solid"
          ? { backgroundColor: color }
          : { border: `1px solid ${color}`, color: color }
      }
    >
      {label}
      {props.isClose && (
        <div className={`tag-close--${size}`} onClick={props.onClick}>
          <img
            src={require("./assets/close_icon.png")}
            style={{
              width: "100%",
              marginLeft: "4px",
              backgroundColor: "transparent",
            }}
          />
        </div>
      )}
    </div>
  );
};

Tag.propTypes = {
  type: PropTypes.oneOf(["solid", "outline"]),
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  isClose: PropTypes.bool,
};

Tag.defaultProps = {
  type: "solid",
  color: "#6633FF",
  size: "medium",
  label: "Tag",
  isClose: false,
};
