import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  const CSStable = (
    <table>
      <tbody>
        <tr>
          <td>Responsive CSS</td>
        </tr>
        <tr>
          <td>Sass</td>
        </tr>
      </tbody>
    </table>
  );
  const ReactJStable = (
    <table>
      <tbody>
        <tr>
          <td>React Hooks</td>
        </tr>
      </tbody>
    </table>
  );
  return (
    <div>
      <h1>Backend</h1>
      <h1>Frontend</h1>
      <SkillItem name="CSS" progress={40} table={CSStable} />
      <SkillItem name="ReactJS" progress={60} table={ReactJStable} />
    </div>
  );
};

export default Skills;
