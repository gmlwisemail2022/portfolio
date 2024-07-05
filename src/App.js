import HeroSectionComponent from "./components/HeroSectionComponent";
import NavbarComponent from "./components/atoms/NavbarComponent";
import AboutMeSectionComponent from "./components/AboutMeSectionComponent";
import ExperienceSectionComponent from "./components/ExperienceSectionComponent";
import SkillsSectionComponent from "./components/SkillsSectionComponent";
import PortfolioSectionComponent from "./components/PortfolioSectionComponent";
import ContactSectionComponent from "./components/ContactSectionComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <HeroSectionComponent />
      <AboutMeSectionComponent />
      <ExperienceSectionComponent />
      <SkillsSectionComponent />
      <PortfolioSectionComponent />
      <ContactSectionComponent />
      <div></div>
    </>
  );
}

export default App;
