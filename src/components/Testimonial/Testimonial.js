import React from "react";
import { Paragraph, Progress, Small, User } from "./Testimonial.Styled";

const Testimonial = ({ paragraph, name, job }) => {
  return (
    <>
      <Progress />
      <Paragraph>{paragraph}</Paragraph>
      <User>
        -{name}, <Small>{job}</Small>
      </User>
    </>
  );
};

export default Testimonial;
