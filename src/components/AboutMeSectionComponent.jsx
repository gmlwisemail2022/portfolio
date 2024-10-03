import React from "react";
import "./AboutMeSectionComponent.css"; // Import your CSS file

const AboutMeSectionComponent = () => {
  return (
    <div
      id="about-section"
      className="relative bg-gray-200 bg-cover flex justify-center items-center py-10"
    >
      <div className="bg-white shadow-lg rounded-lg w-3/4 md:w-3/4 flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto bg-[url('https://intersog.co.il/handling/assets/uploads/2019/08/shutterstock_1225954372.jpg')]"></div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            I am a Programmer/Analyst with 8 years of solid IT experience in
            software analysis, design, development, testing, and system
            maintenance in an IBM MVS Mainframe and AS400 environment. I am also
            a business developer/analyst with 2 founded companies in both
            e-commerce and food industry. I completed an immersive full stack
            web development course in order for me to handle web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Buttons here */}
            {[
              "Cobol",
              "JCL",
              "CICS",
              "DB2",
              "POS",
              "HTML",
              "CSS",
              "Javascript",
              "Node.JS",
              "React.JS",
              "SQL",
              "Smart400",
              "Digital Marketing",
              "IT/Business Development",
            ].map((skill) => (
              <button
                key={skill}
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionComponent;
