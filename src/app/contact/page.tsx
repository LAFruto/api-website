import Banner from "@/components/Banner";
import Form from "@/components/contact/Form";
import Location from "@/components/contact/Location";

const Contact = () => {
  return (
    <>
      <Form />
      <Location />
      <Banner image={"/images/contact.jpg"} title={"contact banner"} />
    </>
  );
};

export default Contact;
