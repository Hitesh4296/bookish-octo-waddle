import styled from "@emotion/styled";
import { GridItem } from "../../styles";

export const TitleContainer = styled(GridItem)`
  font-size: 72px;
  font-weight: 700;
  text-align: left;
  padding: 12px 24px;
  line-height: 1;
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--primary-color);

  &:hover {
    color: var(--primary-color);
  }

  .subtitle {
    font-size: 24px;
    color: var(--primary-color);
    -webkit-text-stroke: 0px;
  }
`;

export const NameContainer = styled(GridItem)`
  padding: 0 24px;
  place-items: center;
  font-size: 80px;
  font-weight: 700;
  text-align: right;
  line-height: 1;
  display: flex;
  align-items: center;
`;

export const SectionContainer = styled.div`
  grid-column: span 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 24px;

  /* display: grid;
  grid-template-areas:
    "a a a a a a c c"
    "b b b b b b c c"
    "b b b b b b c c"
    "b b b b b b c c"
    "b b b b b b c c";
  grid-template-columns: repeat(8, 1fr); /* 8 equal columns */
  grid-template-rows: repeat(5, 1fr); /* 5 equal rows */
  gap: 24px; /* Optional gap between grid items */
  */ * {
    border: 1px solid red;
  }
`;

export const LogoContainer = styled(GridItem)`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  padding: 4px;
`;
