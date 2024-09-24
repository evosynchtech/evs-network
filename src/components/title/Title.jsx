import React from "react";

function Title({ content, color, uppercase, capitalize, align }) {
  return (
    <h1
      className={`${color ? `${"text-[" + color + "]"}` : ``}${
        uppercase ? " uppercase" : ""
      }${capitalize ? " capitalize" : ""}${
        align ? ` text-${align}` : ` text-center`
      } font-poppins my-6 font-semibold text-4xl sm:text-6xl`}
    >
      {content}
    </h1>
  );
}
export function SubTitle({
  content,
  color,
  uppercase,
  capitalize,
  align,
  marginY,
}) {
  return (
    <h1
      className={`${color ? `text-${color}` : ``} ${
        uppercase ? "uppercase" : ""
      } ${capitalize ? "capitalize" : ""} ${
        align ? `text-${align}` : `text-center`
      } font-semibold font-poppins ${
        marginY ? `my-${marginY}` : `my-10`
      } text-3xl sm:text-5xl`}
    >
      {content}
    </h1>
  );
}

export default Title;
