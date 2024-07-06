import React from "react";
import Slider from "react-slick";
import Portfolio1 from "../images/ecim.jpg";
import Portfolio2 from "../images/canvas.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSectionComponent = () => {
  const projects = [
    {
      image: Portfolio1,
      title: "eCommerce Inventory Platform",
      description:
        "React/ Node.js based application that handles data from multiple 3rd party ecommerce platforms",
      url: "https://ecim.netlify.app/",
    },
    {
      image: Portfolio2,
      title: "Canvas",
      description: "This is a mini draft project canvas application.",
      url: "https://gmlwisemail.surge.sh/",
    },
    {
      image: "https://example.com/project3.jpg",
      title: "Project 3",
      description: "This is a brief description of Project 3.",
      url: "https://example.com/project3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <div className="relative h-screen w-full bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/04/Grey-backgrounds-wallpapers-HD.png')] bg-cover bg-center">
      <section id="portfolio-section" className="py-12 mb-8 relative">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <a href={project.url} target="_blank" rel="noreferrer">
                <div className="flex justify-center items-center h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              </a>
              <div className=" py-4 px-6 shadow-lg rounded-b-lg text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default PortfolioSectionComponent;
