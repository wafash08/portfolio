import React from "react";
import {
  Container,
  TimelineParagraph,
  TimelineTitle,
  TimelineWrapper,
} from "./Timeline.Styled.js";
import timelineData from "./timelineData.js";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <Container>
      <TimelineTitle>Lorem ipsum dolor sit amet</TimelineTitle>
      <TimelineParagraph>
        Below you can see a timeline of my professional accomplishments. I hope
        that this will motivate you to follow your dreams and to write down your
        own accomplishments along the way!
      </TimelineParagraph>
      {timelineData.length > 0 && (
        <TimelineWrapper>
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </TimelineWrapper>
      )}
    </Container>
  );
};

export default Timeline;
