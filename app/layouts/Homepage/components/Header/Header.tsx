import { Link, LinkChildren } from "./styles";

export const LinkChild = (children: React.ReactNode) => {
  return ({ isActive }: { isActive: boolean }) => (
    <LinkChildren $isActive={isActive}>{children}</LinkChildren>
  );
};

const Header = () => {
  return (
    <>
      <Link to="/about" onClick={(e) => e.preventDefault()}>
        {LinkChild("> ABOUT_ME")}
      </Link>
      <Link to="/">{LinkChild("> RESUME")}</Link>
      <Link to="/components" onClick={(e) => e.preventDefault()}>
        {LinkChild("> COMPONENTS")}
      </Link>
      <Link to="/contact" onClick={(e) => e.preventDefault()}>
        {LinkChild("> CONTACT")}
      </Link>
    </>
  );
};

export default Header;
