import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import styled from "styled-components";
import { one, two, three, four, five, six, seven, eight, nine, zero } from "../constants";

import { a, b, c, d, e, f, g, h, i as I, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } from "../constants/alphabets"
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
        case "a":
        case "A":
          images.push(<img className="sign-img" key={i} src={a} alt="a" />);
          break;
        case "b":
        case "B":
          images.push(<img className="sign-img" key={i} src={b} alt="b" />);
          break;
        case "c":
        case "C":
          images.push(<img className="sign-img" key={i} src={c} alt="c" />);
          break;
        case "d":
        case "D":
          images.push(<img className="sign-img" key={i} src={d} alt="d" />);
          break;
        case "e":
        case "E":
          images.push(<img className="sign-img" key={i} src={e} alt="e" />);
          break;
        case "f":
        case "F":
          images.push(<img className="sign-img" key={i} src={f} alt="f" />);
          break;
        case "g":
        case "G":
          images.push(<img className="sign-img" key={i} src={g} alt="g" />);
          break;
        case "h":
        case "H":
          images.push(<img className="sign-img" key={i} src={h} alt="h" />);
          break;
        case "i":
        case "I":
          images.push(<img className="sign-img" key={i} src={I} alt="i" />);
          break;
        case "j":
        case "J":
          images.push(<img className="sign-img" key={i} src={j} alt="j" />);
          break;
        case "k":
        case "K":
          images.push(<img className="sign-img" key={i} src={k} alt="k" />);
          break;
        case "l":
        case "L":
          images.push(<img className="sign-img" key={i} src={l} alt="l" />);
          break;
        case "m":
        case "M":
          images.push(<img className="sign-img" key={i} src={m} alt="m" />);
          break;
        case "n":
        case "N":
          images.push(<img className="sign-img" key={i} src={n} alt="n" />);
          break;
        case "o":
        case "O":
          images.push(<img className="sign-img" key={i} src={o} alt="o" />);
          break;
        case "p":
        case "P":
          images.push(<img className="sign-img" key={i} src={p} alt="p" />);
          break;
        case "q":
        case "Q":
          images.push(<img className="sign-img" key={i} src={q} alt="q" />);
          break;
        case "r":
        case "R":
          images.push(<img className="sign-img" key={i} src={r} alt="r" />);
          break;
        case "s":
        case "S":
          images.push(<img className="sign-img" key={i} src={s} alt="s" />);
          break;
        case "t":
        case "T":
          images.push(<img className="sign-img" key={i} src={t} alt="t" />);
          break;
        case "u":
        case "U":
          images.push(<img className="sign-img" key={i} src={u} alt="u" />);
          break;
        case "v":
        case "V":
          images.push(<img className="sign-img" key={i} src={v} alt="v" />);
          break;
        case "w":
        case "W":
          images.push(<img className="sign-img" key={i} src={w} alt="w" />);
          break;
        case "x":
        case "X":
          images.push(<img className="sign-img" key={i} src={x} alt="x" />);
          break;
        case "y":
        case "Y":
          images.push(<img className="sign-img" key={i} src={y} alt="y" />);
          break;
        case "z":
        case "Z":
          images.push(<img className="sign-img" key={i} src={z} alt="z" />);
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
      <h1 style={{color: '#4890fc'}}>Learn Signs Language online</h1>
      <h3>Enter a word, phrase or number in the field below</h3>
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
