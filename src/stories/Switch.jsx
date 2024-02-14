import React from "react";
import PropTypes from "prop-types";
import "./switch.css";
import "./styleguide.css";

/**
 * Primary UI component for user interaction
 */
export const Switch = ({ size, isActive, toggleSwitch, ...props }) => {
  // const [isActive, setIsActive] = useState(false);

  // const toggleSwitch = (e) => {
  //   setIsActive((prev) => !prev);
  // };
  return (
    <div
      className={[
        "switch-container",
        `switch-container--${size}`,
        isActive ? "switch-container--active" : "switch-container--before",
      ].join(" ")}
      onClick={toggleSwitch}
    >
      <div
        className={[
          "switch-indicator",
          `switch-indicator--${size}`,
          isActive
            ? `switch-indicator--active--${size}`
            : "switch-indicator--before",
        ].join(" ")}
      />
    </div>
  );
};

Switch.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isActive: PropTypes.bool,
  toggleSwitch: PropTypes.func,
};

Switch.defaultProps = {
  size: "medium",
  isActive: true,
};
