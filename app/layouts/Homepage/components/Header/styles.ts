import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const LinkChildren = styled.div<{ $isActive: boolean }>`
  color: ${({ $isActive }) =>
    $isActive ? "var(--secondary-color)" : "var(--brand-color)"};
  width: 100%;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--brand-color)" : "transparent"};
  padding: 4px 12px;
  font-weight: 700;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  grid-column: span 4;
  border: 2px solid #020202;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 52px;
`;
