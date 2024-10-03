import React from "react";
import MyImage from "../images/myphoto2.jpg";
import "./HeroSectionComponent.css"; // Import the CSS file

const HeroSectionComponent = () => {
  return (
    <div
      id="hero-section"
      className={`relative bg-[url("https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg")] bg-cover h-screen -z-20`}
    >
      <div className="absolute inset-0 bg-white opacity-70 -z-10" />
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          {" "}
          {/* Adjusted grid */}
          <div className="flex flex-col justify-center gap-5 items-start mx-5 md:mx-20">
            {" "}
            {/* Added margin on mobile */}
            <div className="bg-[#38C2AC] px-5 py-1 rounded-3xl rounded-bl-none place-items-start text-white max-w-max">
              Hello, I'm
            </div>
            <div className="font-extrabold text-4xl">Glen Martin Lau</div>
            <div className="font-bold text-2xl">Programmer/ Analyst</div>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
              </svg>
              <span>&#8195;gmlwisemail@gmail.com</span>
            </div>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <span>&#8195;+852-4402-2418</span>
            </div>
            <div className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <span>&#8195;Cheung Sha Wan, Hong Kong</span>
            </div>
          </div>
          <div className="flex justify-end items-end mt-5 md:mt-0">
            {" "}
            {/* Added margin-top for mobile */}
            <div className="relative p-5 rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 border-[15px] border-black rounded-full z-10 opacity-30" />
              <img
                src={MyImage}
                alt="Portfolio"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
