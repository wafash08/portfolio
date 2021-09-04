import React from "react";
import {
  Content,
  Heading,
  InnerWrapper,
  Paragraph,
  SmallTitle,
  Title,
} from "./Article.Styled";

const Article = ({ smallTitle, title, paragraph, testimonial }) => {
  return (
    <InnerWrapper>
      <Heading>
        <SmallTitle>{smallTitle}</SmallTitle>
        <Title>{title}</Title>
      </Heading>
      <Content>
        {testimonial ? (
          <>{testimonial}</>
        ) : (
          <>
            <Paragraph>{paragraph}</Paragraph>
            <Paragraph>{paragraph}</Paragraph>
            <Paragraph>{paragraph}</Paragraph>
          </>
        )}
      </Content>
    </InnerWrapper>
  );
};

export default Article;
