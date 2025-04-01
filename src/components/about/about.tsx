import { CardLinkedIn } from "../contact/icons";
import { TextAbout } from "./text_about";
export const About = () => {
  return (
    <section
      id="about"
      className="space-y-10 bg-white max-w-3xl mx-auto rounded-3xl"
    >
      <TextAbout />
      <CardLinkedIn />
    </section>
  );
};
