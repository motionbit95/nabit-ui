import React, { useState } from "react";
import PropTypes from "prop-types";
import "./carousel.css";
import "./styleguide.css";
import { Card } from "./Card";

const testBox = {
  width: "300px",
  height: "100px",
  backgroundColor: "#d9d9d9",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  color: "black",
  fontFamily: "Poppins",
};
export const Carousel = ({ content, indicator, ...props }) => {
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX && endX) {
      if (startX - endX > 50) {
        setCurrentSlide((prevSlide) =>
          prevSlide === content.length - 1 ? 0 : prevSlide + 1
        );
      } else if (endX - startX > 50) {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? content.length - 1 : prevSlide - 1
        );
      }
    }
    setStartX(null);
    setEndX(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === content.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? content.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-slide">
        {content.map((item, index) => (
          <div
            key={index}
            className={index === currentSlide ? "active" : "inactive"}
          >
            {item}
            {indicator === "index" && (
              <div className="carousel-index">
                {index + 1} / {content.length}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        {/* <button className="button" onClick={prevSlide}>
          Prev
        </button> */}
        {indicator === "dot" && (
          <div className="carousel-dots">
            {content.map((item, index) => (
              <div
                style={{
                  backgroundColor:
                    index === currentSlide ? "var(--primary-color)" : "#8c8c8c",
                }}
                className="dot"
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        )}
        {/* <button className="button" onClick={nextSlide}>
          Next
        </button> */}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  content: PropTypes.array,
  indicator: PropTypes.oneOf(["dot", "index"]),
};

Carousel.defaultProps = {
  indicator: "dot",
  content: [
    <div style={testBox}>Item1</div>,
    <div style={testBox}>Item2</div>,
    <div style={testBox}>Item3</div>,
  ],
};
