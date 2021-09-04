import React from "react";
import { Copyright, Input, Social, Twitter, Wrapper } from "./Footer.Styled";

const Footer = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Get tutorial in your inbox" />
      <Twitter
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/saefulhaqwafa"
      >
        Follow @saefulhaqwafa
      </Twitter>
      <Social></Social>
      <Copyright>
        Copyright {new Date().getFullYear()}, Wafa Saefulhaq
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
