import {
  Drop,
  DropTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubmit,
} from "./style.js";
import Footer from "./../Footer";
import { Fragment } from "react";
const Contact = () => {
  return (
    <Fragment>
      <Drop>
        <div className="container">
          <DropTitle>
            <Span>Drop </Span>Me A line
          </DropTitle>
          <Form>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" className="sub" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </Drop>
      <Footer />
    </Fragment>
  );
};
export default Contact;
