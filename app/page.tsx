import { HeroSection, HowToSection } from "@/components/sections";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container component="main">
      <HeroSection />
      <HowToSection />
    </Container>
  );
};

export default HomePage;
