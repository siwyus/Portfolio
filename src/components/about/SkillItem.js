import React from "react";
import ProgressBar from "./ProgressBar";

const SkillItem = ({ name, progress, table }) => {
  return (
    <div className="skilitem">
      <h2>{name}</h2>
      {table}
      <ProgressBar progress={progress} />
    </div>
  );
};

export default SkillItem;
