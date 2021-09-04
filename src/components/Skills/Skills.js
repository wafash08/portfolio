import React from "react";
import { Heading4, Icon, Skill, SmallParagraph } from "./Skills.Styled";

const Skills = ({ icon, heading, paragraph }) => {
  return (
    <Skill>
      <Icon>{icon}</Icon>
      <Heading4>{heading}</Heading4>
      <SmallParagraph>{paragraph}</SmallParagraph>
    </Skill>
  );
};

export default Skills;
