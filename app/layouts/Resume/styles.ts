import styled from "@emotion/styled";

export const Main = styled.main`
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ResumeContainer = styled.div`
  max-width: 1112px;
  margin: 2rem auto;
  border: 2px solid var(--primary-color);
  padding: 1rem;
`;

export const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  text-align: left;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0rem;
    align-items: flex-start;
  }
`;

export const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-weight: 400;
  display: inline-block;
`;

export const JobTitle = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p<{ isLink?: boolean }>`
  font-weight: 300;
  a {
    color: ${({ isLink }) => (isLink ? "var(--brand-color)" : "inherit")};
  }
  display: inline-block;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: var(--brand-color);
    display: inline-block;
    border-radius: 50%;
    margin-right: 0.5rem;
    margin-bottom: 1px;
  }
`;

export const GridItem = styled.div<{
  colSpan?: number;
  rowSpan?: number;
  minHeight?: string;
  showBackground?: boolean;
  showBorder?: boolean;
}>`
  grid-column: span ${({ colSpan }) => colSpan || 1};
  grid-row: span ${({ rowSpan }) => rowSpan || 1};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  background-image: ${({ showBackground }) =>
    showBackground
      ? "url('https://i.ibb.co/bsPFzWM/Screenshot-2024-11-25-at-4-04-26-AM.png')"
      : "none"};
  background-repeat: ${({ showBackground }) =>
    showBackground ? "repeat" : "no-repeat"};
  background-blend-mode: multiply;
  border: ${({ showBorder }) =>
    showBorder ? "2px solid var(--primary-color)" : "none"};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: 300;
`;
