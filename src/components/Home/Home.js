import React from "react";
import Article from "../Article";
import Hero from "../Hero";
import Skills from "../Skills";
import Testimonial from "../Testimonial";
import { Wrapper } from "./Home.Styled";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wrapper>
        <Article
          smallTitle="how it started"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio accusamus eum quisquam porro, laudantium fugit corrupti veritatis fugiat iusto accusantium temporibus eius omnis excepturi."
        />
        <Article
          smallTitle="how it started"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio accusamus eum quisquam porro, laudantium fugit corrupti veritatis fugiat iusto accusantium temporibus eius omnis excepturi."
        />
        <Article
          smallTitle="how it started"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi optio accusamus eum quisquam porro, laudantium fugit corrupti veritatis fugiat iusto accusantium temporibus eius omnis excepturi."
        />
        <Skills
          icon="icon"
          heading="HTML"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Skills
          icon="icon"
          heading="CSS"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Skills
          icon="icon"
          heading="JavaScript"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Skills
          icon="icon"
          heading="React"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Article
          smallTitle="don't trust me?"
          title="see what others say"
          testimonial={
            <Testimonial
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            veritatis qui repellendus quod nemo porro et aspernatur dolorem hic
            illo!"
              name="Arthur Burnbaum"
              job="Linkedin"
            />
          }
        />
      </Wrapper>
    </div>
  );
};

export default Home;
