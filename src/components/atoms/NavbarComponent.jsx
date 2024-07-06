import { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [, setScrollY] = useState(window.scrollY);
  const [showWhiteBox, setShowWhiteBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowWhiteBox(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroClick = () => {
    console.log("navigte via click");
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    console.log("navigte via click");
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExperienceClick = () => {
    console.log("navigte via click");
    const experienceSection = document.getElementById("experience-section");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillsClick = () => {
    console.log("navigte via click");
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePortfolioClick = () => {
    console.log("navigte via click");
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        showWhiteBox ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`flex justify-between items-center py-3 mx-auto max-w-[1140px]`}
      >
        <div>
          <div className="bg-[#38C2AC] rounded-lg px-3 uppercase font-semibold text-white text-[18px]">
            Glen
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className="font-semibold text-[18px] cursor-pointer"
            onClick={handleHeroClick}
          >
            Home
          </div>
          <div
            className="font-semibold text-[18px] cursor-pointer"
            onClick={handleAboutClick}
          >
            About
          </div>
          <div
            className="font-semibold text-[18px] cursor-pointer"
            onClick={handleExperienceClick}
          >
            Experience
          </div>
          <div
            className="font-semibold text-[18px] cursor-pointer"
            onClick={handleSkillsClick}
          >
            Skills
          </div>
          <div
            className="font-semibold text-[18px] cursor-pointer"
            onClick={handlePortfolioClick}
          >
            Portfolio
          </div>
          <div
            className="font-semibold text-[18px] cursor-pointer"
            onClick={handleContactClick}
          >
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
