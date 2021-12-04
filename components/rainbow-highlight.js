import React from "react";
import { RoughNotation } from "react-rough-notation";

const RainbowHighlight = ({ color, iterations = 1, width = 1, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      strokeWidth={width}
      padding={[0, 2]}
      iterations={iterations}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;
