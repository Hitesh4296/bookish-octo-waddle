import { GridContainer } from "./styles";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

const HomepageLayout = () => {
  return (
    <>
      <GridContainer>
        <Header />
        <About />
      </GridContainer>
      <Footer />
    </>
  );
};

export default HomepageLayout;
