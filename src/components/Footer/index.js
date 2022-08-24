import { FooterSection, FooterContent } from "./style.js";
const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        copyright &copy; {new Date().getFullYear()} by Anas Banat
      </FooterContent>
    </FooterSection>
  );
};
export default Footer;
