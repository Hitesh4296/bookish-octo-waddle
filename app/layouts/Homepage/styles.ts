import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 24px, 1fr;
  gap: 24px;
  max-width: 1160px;
  margin: 0 auto;
  * {
    overflow: hidden;
  }
`;

export const WithBackGround = styled.div`
  background-color: var(--brand-color);
  border: 2px solid var(--primary-color);
`;

export const GridItem = styled.div<{
  colSpan?: number;
  rowSpan?: number;
  minHeight?: string;
  showBackground?: boolean;
}>`
  grid-column: span ${({ colSpan }) => colSpan || 1};
  grid-row: span ${({ rowSpan }) => rowSpan || 1};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  border: 2px solid var(--primary-color);
  background-image: ${({ showBackground }) =>
    showBackground
      ? "url('https://i.ibb.co/bsPFzWM/Screenshot-2024-11-25-at-4-04-26-AM.png')"
      : "none"};
  background-repeat: ${({ showBackground }) =>
    showBackground ? "repeat" : "no-repeat"};
  background-blend-mode: multiply;
`;

export const Arrow = styled.div<{
  size?: number;
  color?: string;
  rotate?: number;
}>`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  position: relative;
  border: 2px solid ${({ color }) => color || "var(--brand-color)"};
  border-top: 0px;
  border-right: 0px;
  display: inline-block;
  margin-left: 4px;
  transform: rotate(${({ rotate }) => rotate || 0}deg);

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: -1px;
    width: 100vw;
    color: ${({ color }) => color || "var(--brand-color)"};
    border-top: 2px solid ${({ color }) => color || "var(--brand-color)"}; /* Thickness of the line */
    transform: rotate(-45deg); /* Angle of the diagonal line */
    transform-origin: top left; /* Ensures the rotation happens from the top-left corner */
  }
`;
