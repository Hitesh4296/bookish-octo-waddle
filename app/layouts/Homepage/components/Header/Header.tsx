import { Link, LinkChildren } from "./styles";

export const LinkChild = (children: React.ReactNode) => {
  return ({ isActive }: { isActive: boolean }) => (
    <LinkChildren $isActive={isActive}>{children}</LinkChildren>
  );
};

const Header = () => {
  return (
    <>
      <Link to="/" end>
        {LinkChild("> ABOUT_ME")}
      </Link>
      <Link to="/resume">{LinkChild("> RESUME")}</Link>
      <Link to="/components">{LinkChild("> COMPONENTS")}</Link>
      <Link to="/contact">{LinkChild("> CONTACT")}</Link>
    </>
  );
};

export default Header;
