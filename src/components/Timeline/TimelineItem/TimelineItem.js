import React from "react";
import {
  Circle,
  Tag,
  Text,
  Time,
  TimelineContainer,
  TimelineContent,
  TimelineLink,
} from "./TimelineItem.Styled";

const TimelineItem = ({ data }) => {
  return (
    //   <div className="timeline-item">
    //     <div className="timeline-item-content">
    //       <span className="tag" style={{ background: data.category.color }}>
    //         {data.category.tag}
    //       </span>
    //       <time>{data.date}</time>
    //       <p>{data.text}</p>
    //       {data.link && (
    //         <a href={data.link.url} target="_blank" rel="noopener noreferrer">
    //           {data.link.text}
    //         </a>
    //       )}
    //       <span className="circle" />
    //     </div>
    //   </div>

    <TimelineContainer>
      <TimelineContent>
        <Tag background={data.category.color}>{data.category.tag}</Tag>
        <Time>{data.date}</Time>
        <Text>{data.text}</Text>
        {data.link && (
          <TimelineLink
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.link.text}
          </TimelineLink>
        )}
        <Circle />
      </TimelineContent>
    </TimelineContainer>
  );
};

export default TimelineItem;
