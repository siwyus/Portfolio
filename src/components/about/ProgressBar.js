import React from "react";

const ProgressBar = ({ progress }) => {
  let style = { width: `${progress}%` };

  // bordering ProgressBar at the start and at the end
  switch (progress) {
    case 1:
      style = {
        ...style,
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        paddingLeft: "4px"
      };
      break;
    case 2:
      style = {
        ...style,
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        paddingLeft: "2px"
      };
      break;
    case 98:
      style = {
        ...style,
        borderTopRightRadius: "2px",
        borderBottomRightRadius: "2px"
      };
      break;
    case 99:
      style = {
        ...style,
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px"
      };
      break;
    case 100:
      style = {
        ...style,
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px"
      };
      break;
    default:
      style = { ...style };
  }

  return (
    <div className="progressbar-container">
      <div className="progressbar" style={style}></div>
    </div>
  );
};

export default ProgressBar;
