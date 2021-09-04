import React from "react";
import Content from "../Content";
import { Header, Tags, Title, Wrapper } from "./Blog.Styled";

const Blog = () => {
  return (
    <Wrapper>
      <Header>
        <Title>blog posts</Title>
        <Tags to="/">view all tags</Tags>
      </Header>
      <Content
        date="04 September 2021"
        title="Lorem, ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque
        enim. Magnam quibusdam nobis eligendi eum deserunt, quas, doloribus
        impedit ad consectetur eaque, quasi doloremque."
      />
      <Content
        date="04 September 2021"
        title="Lorem, ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque
        enim. Magnam quibusdam nobis eligendi eum deserunt, quas, doloribus
        impedit ad consectetur eaque, quasi doloremque."
      />
      <Content
        date="04 September 2021"
        title="Lorem, ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque
        enim. Magnam quibusdam nobis eligendi eum deserunt, quas, doloribus
        impedit ad consectetur eaque, quasi doloremque."
      />
    </Wrapper>
  );
};

export default Blog;
