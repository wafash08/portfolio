import styled from "styled-components";

// @media only screen and (max-width: 767px) {
//     .timeline-item-content,
//     .timeline-item:nth-child(odd) .timeline-item-content {
//         padding: 15px 10px;
//         text-align: center;
//         align-items: center;
//     }

//     .timeline-item-content .tag {
//         width: calc(100% - 10px);
//         text-align: center;
//     }

//     .timeline-item-content time {
//         margin-top: 20px;
//     }

//     .timeline-item-content a {
//         text-decoration: underline;
//     }

//     .timeline-item-content a::after {
//         display: none;
//     }
// }

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }
`;
export const TimelineContent = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  position: relative;
  width: 400px;
  max-width: 70%;
  text-align: right;

  &::after {
    content: " ";
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }

  /* &:nth-child(odd) {
      text-align: left;
      align-items: flex-start;
    } */

  /* right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2); */

  @media only screen and (max-width: 1023px) {
    .timeline-item-content {
      max-width: 100%;
    }
  }
`;
export const Tag = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  top: 5px;
  left: 5px;
  letter-spacing: 1px;
  padding: 5px;
  position: absolute;
  text-transform: uppercase;

  /* .timeline-item:nth-child(odd) .timeline-item-content .tag {
    left: auto;
    right: 5px;
  } */
`;
export const Time = styled.time`
  color: #777;
  font-size: 12px;
  font-weight: bold;
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;
  max-width: 250px;
`;
export const TimelineLink = styled.a`
  font-size: 14px;
  font-weight: bold;

  &::after {
    content: " ►";
    font-size: 12px;
  }
`;
export const Circle = styled.span`
  background-color: #fff;
  border: 3px solid #e17b77;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  width: 20px;
  height: 20px;
  z-index: 100;

  .timeline-item:nth-child(odd) .timeline-item-content .circle {
    right: auto;
    left: -40px;
  }
`;
