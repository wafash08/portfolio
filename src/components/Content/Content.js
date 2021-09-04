import React from "react";
import { BlogContent, ContentDate, LinkedCard, Title } from "./Content.Styled";

const Content = ({ date, title, content }) => {
  return (
    <LinkedCard to="/blog">
      <ContentDate>{date}</ContentDate>
      <Title to="/blog">{title}</Title>
      <BlogContent>{content}</BlogContent>
    </LinkedCard>
  );
};

export default Content;
