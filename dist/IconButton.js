function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import "./styleguide.css";

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ size, icon, onClick, ...props }) => {
  return /*#__PURE__*/ React.createElement(
    "button",
    _extends(
      {
        type: "button",
        className: ["storybook-button", `circle--${size}`].join(" "),
      },
      props,
      {
        onClick: onClick,
      }
    ),
    /*#__PURE__*/ React.createElement("img", {
      src: icon,
      width: "100%",
      height: "auto",
    })
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
