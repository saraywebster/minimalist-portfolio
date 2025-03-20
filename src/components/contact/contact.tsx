import { Form } from "./form";
import { IconsContact } from "./icons";
export const Contact = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full space-y-5">
        <Form />
        <IconsContact />
      </section>
    </>
  );
};
