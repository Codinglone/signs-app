import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import styled from "styled-components";
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";

const Sandbox = () => {
  const [value, setValue] = useState('');

  const renderSignImages = () => {
    const images = [];

    // Iterate over each character in the input value
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      switch (char) {
        case "1":
          images.push(<img className="sign-img" key={i} src={one} alt="One" />);
          break;
        case "2":
          images.push(<img className="sign-img" key={i} src={two} alt="Two" />);
          break;
        case "3":
          images.push(<img className="sign-img" key={i} src={three} alt="Three" />);
          break;
        case "4":
          images.push(<img className="sign-img" key={i} src={four} alt="Four" />);
          break;
        case "5":
          images.push(<img className="sign-img" key={i} src={five} alt="Five" />);
          break;
        case "6":
          images.push(<img className="sign-img" key={i} src={six} alt="Six" />);
          break;
        case "7":
          images.push(<img className="sign-img" key={i} src={seven} alt="Seven" />);
          break;
        case "8":
          images.push(<img className="sign-img" key={i} src={eight} alt="Eight" />);
          break;
        case "9":
          images.push(<img className="sign-img" key={i} src={nine} alt="Nine" />);
          break;
        case "0":
          images.push(<img className="sign-img" key={i} src={zero} alt="Zero" />);
          break;
        default:
          // If the character is not a number, skip it or display an error message
          break;
      }
    }

    return images;
  };

  return (
    <Container>
      <h2>Enter a word or phrase</h2>
      <InputTextarea
        autoResize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        cols={136}
      />
      <SignsField>
        {renderSignImages()}
      </SignsField>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 2rem;
`;

const SignsField = styled.section`
  padding: 1rem 0;
`;

export default Sandbox
