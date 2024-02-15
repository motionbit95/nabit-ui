import React from "react";
import PropTypes from "prop-types";
import "./typography.css";
import "./styleguide.css";

/**
 * Primary UI component for user interaction
 */
export const Typography = ({
  style,
  color,
  weight,
  align,
  content,
  ...props
}) => {
  return (
    <div className={`typography-container`}>
      <div
        className={`typography typography--${style} typography--${weight}`}
        style={color && { color } && { textAlign: align }}
      >
        {content}
      </div>
    </div>
  );
};

Typography.propTypes = {
  /**
   * 폰트 스타일을 정합니다. 가로 사이즈가 768px(태블릿사이즈) 이하가 되는 경우, 폰트 사이즈가 조정됩니다.
   * 지정하지 않는 경우 기본 body 스타일로 설정됩니다.
   */
  style: PropTypes.oneOf([
    "caption2",
    "caption1",
    "footnote",
    "subheadline",
    "body",
    "headline",
    "title3",
    "title2",
    "title1",
    "large-title",
    "xlarge-title",
    "xxlarge-title",
  ]),

  /**
   * 폰트 굵기를 정합니다. 가로 사이즈가 768px(태블릿사이즈)
   * 지정하지 않는 경우 기본 regular weight로 설정됩니다.
   */
  weight: PropTypes.oneOf(["light", "regular", "bold"]),
  /**
   * 타이포그래피의 정렬 조건을 지정합니다.
   * 지정하지 않는 경우 기본 왼쪽 정렬입니다.
   */
  align: PropTypes.oneOf(["left", "center", "right"]),
};

Typography.defaultProps = {
  style: "body",
  weight: "regular",
  align: "left",
  color: "black",
};
