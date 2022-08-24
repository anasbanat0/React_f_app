import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  NavItem,
} from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <UlList>
          <ListItem>
            <NavItem to="/">Home</NavItem>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <NavItem to="/contact">Contact</NavItem>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};
export default Navbar;
