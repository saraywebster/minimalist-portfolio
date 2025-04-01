import { Form } from "./form";
import { CardLinkedIn } from "./icons";
export const Contact = () => {
  return (
    <>
      <section
        className="flex flex-col justify-center  items-center w-full space-y-5"
        id="contact"
      >
        <Form />

        <CardLinkedIn />
      </section>
    </>
  );
};
