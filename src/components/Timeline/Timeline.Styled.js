import styled from "styled-components";
import { Title } from "../Blog/Blog.Styled";
import { BlogContent } from "../Content/Content.Styled";

export const Container = styled.div`
  background-color: #f6f5f7;
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;
`;

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  &::after {
    background-color: #e17b77;
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`;

export const TimelineTitle = styled(Title)`
  text-align: center;
`;

export const TimelineParagraph = styled(BlogContent)`
  margin-top: 1rem;
  text-align: center;
`;
