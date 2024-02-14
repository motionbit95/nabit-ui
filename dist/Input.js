function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";
import "./styleguide.css";
import "./reset.css";
export const Input = ({
  type,
  label,
  size,
  onChange,
  ...props
}) => {
  const [isPassword, setIsPassword] = useState(type === "password");
  const [err, setErr] = useState({
    code: null,
    message: null
  });
  function checkVariable(value) {
    if (props.isRequired && !value) {
      setErr({
        code: "required",
        message: "This field is required"
      });
    } else if (type === "email" && !value.includes("@")) {
      setErr({
        code: "invalid-email",
        message: "Please enter a valid email address"
      });
    } else if (type === "password") {
      var pw = value;
      var num = pw.search(/[0-9]/g);
      var eng = pw.search(/[a-z]/gi);
      var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
      if (pw.length < 8 || pw.length > 20) {
        setErr({
          code: "invalid-password",
          message: "Please enter between 8 and 20 characters."
        });
      } else if (pw.search(/\s/) !== -1) {
        setErr({
          code: "invalid-password",
          message: "Please enter your password without spaces."
        });
      } else if (num < 0 || eng < 0 || spe < 0) {
        setErr({
          code: "invalid-password",
          message: "Please enter a mixture of letters, numbers, and special characters."
        });
      } else {
        setErr({
          code: null,
          message: null
        });
      }
    } else {
      setErr({
        code: null,
        message: null
      });
    }
  }
  function onChangeHandler(e) {
    if (checkVariable(e.target.value)) {
      onChange(e.target.value);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: `input-label--${size}`
  }, /*#__PURE__*/React.createElement("label", null, label), props.isRequired && /*#__PURE__*/React.createElement("div", {
    className: "input-label--required"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: err.code ? `input--error input--${size}` : `input input--${size}`,
    placeholder: props.placeholder,
    type: !isPassword ? "text" : type
  }, props, {
    onChange: onChangeHandler
  })), label === "Password" && /*#__PURE__*/React.createElement("div", {
    className: "icon",
    onClick: () => setIsPassword(!isPassword)
  }, isPassword ? /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#2d2d2d",
    d: "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
  })) : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#2d2d2d",
    d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
  }))))), err.code && /*#__PURE__*/React.createElement("div", {
    className: "input-error-message"
  }, err.message)));
};
Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"])
};
Input.defaultProps = {
  size: "medium",
  type: "text",
  label: "label",
  isRequired: false
};