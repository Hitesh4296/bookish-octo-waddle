import { NavLink } from "react-router";
import { Arrow, GridContainer, GridItem } from "../../styles";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <GridContainer>
        <GridItem colSpan={4}>+918930950989</GridItem>

        <GridItem colSpan={4}>
          <NavLink to="https://github.com/Hitesh4296" target="_blank">
            Github
            <Arrow size={8} rotate={180} color="#ababab" />
          </NavLink>
        </GridItem>
        <GridItem colSpan={4}></GridItem>
        <GridItem colSpan={4}></GridItem>

        <GridItem colSpan={4}>
          <NavLink to="mailto:hitesh4296@gmail.com" target="_blank">
            hitesh4296@gmail.com
          </NavLink>
        </GridItem>
        <GridItem colSpan={4}>
          <NavLink
            to="https://www.linkedin.com/in/hitesh-narwal/"
            target="_blank"
          >
            LinkedIn
            <Arrow size={8} rotate={180} color="#ababab" />
          </NavLink>
        </GridItem>
        <GridItem colSpan={4}></GridItem>
        <GridItem colSpan={4} style={{ textAlign: "right" }}>
          Located in Gurgaon, India
        </GridItem>
      </GridContainer>
    </FooterContainer>
  );
};

export default Footer;
