import About from "../../components/About";
import Experiences from "../../components/Experiences";
import Hero from "../../components/Hero";
import Container from "../../components/Utils/Container";

const Home = () => {
  return (
    <div>
      <Container className="bg-primary">
        <section id="home" className="scroll-mt-20">
          <Hero></Hero>
        </section>
      </Container>
      <Container className="bg-secondary">
        <section id="about" className="scroll-mt-20">
          <About></About>
        </section>
      </Container>
      <Container className="bg-primary">
        <section id="experiences" className="scroll-mt-20">
          <Experiences></Experiences>
        </section>
      </Container>
    </div>
  );
};

export default Home;
