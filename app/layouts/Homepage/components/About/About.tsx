import { Arrow, GridItem } from "../../styles";
import Logos from "./Logos";
import { TitleContainer, NameContainer } from "./styles";
import { LinkChild } from "../Header/Header";
import { Link } from "../Header/styles";

const About = () => {
  return (
    <>
      <GridItem colSpan={6} minHeight="46px" showBackground />
      <GridItem colSpan={2} minHeight="46px" showBackground />

      <NameContainer colSpan={8} rowSpan={2}>
        HITESH NARWAL
      </NameContainer>

      <TitleContainer colSpan={7} rowSpan={2}>
        WEB DEVELOPER
      </TitleContainer>
      <GridItem
        rowSpan={2}
        minHeight="46px"
        showBackground
        style={{ marginTop: "-26px", borderTop: "0px" }}
      />

      <GridItem
        colSpan={8}
        rowSpan={1}
        style={{
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        I've been building thing on the web for 5.5 years
      </GridItem>

      <GridItem colSpan={13} rowSpan={1} showBackground />
      <GridItem
        colSpan={3}
        rowSpan={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1/1",
        }}
      >
        <Arrow size={64} />
      </GridItem>

      <GridItem
        colSpan={8}
        style={{
          fontSize: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          padding: "0 24px",
          fontWeight: 700,
        }}
      >
        ABOUT ME
      </GridItem>

      <GridItem colSpan={8} rowSpan={3} />

      <GridItem colSpan={4} rowSpan={3} showBackground />
      <GridItem colSpan={4} rowSpan={3}>
        <img
          src="https://picsum.photos/200/300"
          alt="about-me"
          width={200}
          height={300}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1} showBackground minHeight="48px" />

      <GridItem colSpan={7} rowSpan={1} showBackground minHeight="48px" />

      <GridItem colSpan={16} rowSpan={1} showBackground minHeight="120px" />

      <GridItem
        colSpan={8}
        rowSpan={1}
        minHeight="48px"
        style={{ fontSize: "48px", fontWeight: 700 }}
      >
        THINGS I KNOW
      </GridItem>

      <GridItem colSpan={8} rowSpan={4} minHeight="48px" />

      <Logos />

      <Link to="/projects">{LinkChild("> PROJECTS")}</Link>
      <Link to="/resume">{LinkChild("> RESUME")}</Link>

      <GridItem colSpan={16} rowSpan={1} showBackground minHeight="120px" />
    </>
  );
};

export default About;

// https://emotion.sh/logo-48x48.png
