import React, { useState } from "react";
import {
  Container,
  Email,
  Form,
  Header,
  Message,
  Name,
  Send,
  Sender,
  Small,
  Subject,
  Title,
} from "./Contact.Styled";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <Small>Have a new project in mind?</Small>
        <Title>Come and say hi or just drop a line</Title>
      </Header>
      <Form type="submit">
        <Sender>
          <Name
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
          />
          <Email
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
          />
        </Sender>
        <Subject
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
          value={subject}
        />
        <Message
          rows="14"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <Send onSubmit={(e) => handleSubmit(e)}>send</Send>
      </Form>
    </Container>
  );
};

export default Contact;
