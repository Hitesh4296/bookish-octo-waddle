import styled from "@emotion/styled";
import { GridItem } from "../../styles";
import { Logo, LogoContainer } from "./styles";

const URLS = [
  "https://ik.imagekit.io/hqnoqq6rv/react.png",
  "https://ik.imagekit.io/hqnoqq6rv/nextjs-icon.webp",
  "https://ik.imagekit.io/hqnoqq6rv/remix-letter-light.png",
  "https://ik.imagekit.io/hqnoqq6rv/Tailwind%20CSS.png",
];

const Logos = () => {
  return (
    <>
      <LogoContainer colSpan={1} rowSpan={1}>
        <Logo src={URLS[0]} alt="react" />
      </LogoContainer>

      <GridItem colSpan={7} rowSpan={1} />

      <GridItem colSpan={7} rowSpan={1} />
      <LogoContainer colSpan={1} rowSpan={1}>
        <Logo src={URLS[1]} alt="react" />
      </LogoContainer>

      <LogoContainer colSpan={1} rowSpan={1}>
        <Logo src={URLS[2]} alt="react" />
      </LogoContainer>

      <GridItem colSpan={7} rowSpan={1} />

      <GridItem colSpan={7} rowSpan={1} />
      <LogoContainer colSpan={1} rowSpan={1}>
        <Logo src={URLS[3]} alt="react" />
      </LogoContainer>
    </>
  );
};

export default Logos;
