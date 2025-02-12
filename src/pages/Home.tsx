import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Projects } from "../components/projects";
export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
