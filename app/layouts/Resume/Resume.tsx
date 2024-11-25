import { NavLink } from "react-router";
import Footer from "../Homepage/components/Footer";
import Header from "../Homepage/components/Header";
import { GridContainer } from "../Homepage/styles";
import {
  Name,
  ResumeContainer,
  ResumeContent,
  Title,
  GridItem,
  Text,
  Content,
  JobTitle,
  Main,
} from "./styles";

const Resume = () => {
  return (
    <Main>
      <GridContainer>
        <Header />
      </GridContainer>

      <ResumeContainer>
        <ResumeContent>
          <GridItem colSpan={16} showBorder>
            <Name>HITESH NARWAL</Name>
            <Content>
              <Title>WEB DEVELOPER</Title>
              <Text>+91 8930950989</Text>
              <Text>hitesh4296@gmail.com</Text>
              <Text isLink>
                <NavLink to="https://github.com/hitesh4296">Github</NavLink>
              </Text>

              <Text isLink>
                <NavLink to="https://www.linkedin.com/in/hitesh-narwal/">
                  LinkedIn
                </NavLink>
              </Text>
            </Content>

            <Content style={{ marginBottom: "1rem" }}>
              A SELF-TAUGHT DEVELOPER WITH 5.5 YEARS OF EXPERIENCE SPECIALIZING
              IN WEB DEVELOPMENT.
            </Content>
          </GridItem>

          <GridItem colSpan={12} showBorder rowSpan={4}>
            <Title style={{ marginBottom: "1rem" }}>// WORK EXPERIENCE</Title>
            <JobTitle>
              <b>VIRTUALNESS</b>
              <div>FEB 2024 - PRESENT</div>
            </JobTitle>
            <JobTitle>SENIOR WEB ENGINEER</JobTitle>
            <ul style={{ fontWeight: 300 }}>
              <li>
                <b>Monorepo Architecture:</b> Led the development of a scalable
                monorepo using Turborepo to streamline component sharing,
                configuration management, and release processes.
              </li>
              <li>
                <b>NFT Platform Development:</b> Spearheaded the creation of a
                B2B platform for generating digital assets as NFTs, integrating
                custom workflows and AB testing frameworks.
              </li>
              <li>
                <b>Performance Optimization:</b> Improved Next.js app
                performance by reducing Cumulative Layout Shift (CLS) to ~0 for
                80 percentile users, and enhanced LCP and FCP to 0.8-0.9s,
                averaging performance scores of 81 for Desktop application.
              </li>
            </ul>
            <b>Tools:</b> ReactJS, Remix, Next.js, TailwindCSS, Jenkins,
            ImageKit
            <JobTitle style={{ marginTop: "1.5rem" }}>
              <b>NYKAA FASHION</b>
              <div>JUN 2019 - FEB 2024</div>
            </JobTitle>
            <JobTitle>SDE-II and SOFTWARE ENGINEER</JobTitle>
            <ul style={{ fontWeight: 300 }}>
              <li>
                <b>Performance Optimization:</b> Migrated critical tools from
                PHP to ReactJS and refactored the Listing Page with server-side
                rendering, reducing load times, boosting search rankings, and
                enhancing user retention. Supported over 10,000 daily orders, a
                million page views, and more than a billion daily events.
              </li>
              <li>
                <b>User Engagement:</b> Designed custom Details Pages for social
                media campaigns, increasing engagement by 40% and lowering
                bounce rates by 20%.
              </li>
              <li>
                <b>Innovative Tools:</b> Developed multivariate testing SDKs and
                analytics integrations, enabling standardized session tracking
                and data-driven decision-making.
              </li>
              <li>
                <b>Scalable Infrastructure:</b> Overhauled Cloudflare Workers
                and implemented advanced CDN optimizations like Page rules,
                Origin rules, URL redirects and Transform rules to improve
                caching, mitigate bot attacks and DDoS threats, and ensure
                seamless performance.
              </li>
              <li>
                <b>Core Platform Features:</b> Contributed to core platform
                features like Listing Pages, Categories, Wishlists, and
                Authentication systems while introducing Fit Advisor, a
                Next.js-based personalized recommendation tool. Migrated
                analytics to Google Tag Manager for enhanced agility and
                insights and achieved 50% unit test coverage for improved
                reliability.
              </li>
            </ul>
            <b>Awards:</b> Received Employee recognition award twice and a
            performance medal for exceptional support during the 2023 sale
            period.
            <br />
            <b>Tools:</b> ReactJS, Styled Components, Cloudflare, Jenkins, GTM,
            Adobe Analytics Suite, GDPR, Speedcurve.
          </GridItem>
          <GridItem colSpan={4} rowSpan={1} showBorder>
            <Title>// SKILLS</Title>

            <ul style={{ fontWeight: 300 }}>
              <li>
                <b>Front-End Technologies:</b> ReactJS, Remix, Next.js,
                JavaScript, TypeScript, HTML, CSS, Svelte, TailwindCSS
              </li>
              <li>
                <b>Testing & Frameworks:</b> React Testing Library, Jest
              </li>
              <li>
                <b>Analytics & Monitoring:</b> Google Tag Manager, Mixpanel,
                Adobe DTM, New Relic, Speedcurve, Kibana
              </li>
              <li>
                <b>Cloud & Infrastructure:</b> Cloudflare, CDN, Cloudflare
                Workers, Varnish , ImageKit, Jenkins
              </li>
            </ul>
          </GridItem>
          <GridItem colSpan={4} rowSpan={4} showBorder>
            <Title>// LINKS</Title>

            <Text isLink>
              <NavLink to="https://www.verix.io/dashboard" target="_blank">
                Verix
              </NavLink>
              <br />
              An enterprise tool to create, manage and distribute digital assets
              as NFTs and credentials (built with Remix, Turborepo and Tailwind
              CSS)
            </Text>

            <Text isLink>
              <NavLink to="https://www.nykaafashion.com" target="_blank">
                Nykaa Fashion
              </NavLink>
              <br />
              Multiple pages across the E-commerce platform (built with ReactJS,
              TypeScript, Styled Components, Redux and ExpressJS)
            </Text>

            <Text isLink>
              <NavLink to="https://meet-n-draw.pages.dev/" target="_blank">
                Excalidraw Clone
              </NavLink>
              <br />
              An MVP Excalidraw clone built with NextJS, TailwindCSS and
              CanvasAPI deployed over Cloudflare
            </Text>
          </GridItem>

          <GridItem colSpan={12} rowSpan={1} showBorder>
            <Title>// EDUCATION</Title>

            <JobTitle>
              <b>NATIONAL INSTITUTE OF TECHNOLOGY, KURUKSHETRA</b>
              <div>2015 - 2019</div>
            </JobTitle>
            <JobTitle>
              B.Tech in Electronics and Communication Engineering
            </JobTitle>
          </GridItem>
        </ResumeContent>
      </ResumeContainer>

      <GridContainer>
        <GridItem colSpan={6} showBorder showBackground />
        <GridItem colSpan={4} showBorder>
          <NavLink
            to="https://ik.imagekit.io/hqnoqq6rv/Final%20Resume.pdf"
            target="_blank"
            download="Hitesh Narwal Resume.pdf"
            style={{ color: "var(--brand-color)", fontWeight: 500 }}
          >
            {`> DOWNLOAD_RESUME`}
          </NavLink>
        </GridItem>
        <GridItem colSpan={6} showBorder showBackground />

        <GridItem colSpan={16} showBorder showBackground minHeight="24px" />
      </GridContainer>

      <Footer />
    </Main>
  );
};

export default Resume;
