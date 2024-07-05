const AboutMeSectionComponent = () => {
  return (
    <div
      id="about-section"
      className={`relative bg-gray-200 bg-cover h-screen -z-20 flex justify-center items-center`}
    >
      <div className="bg-white shadow-lg rounded-lg w-3/4 h-3/4 flex overflow-hidden">
        <div className="w-1/2 bg-cover bg-center bg-[url('https://intersog.co.il/handling/assets/uploads/2019/08/shutterstock_1225954372.jpg')]"></div>
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 mb-8">
            I am a Programmer/Analyst with 8 years of solid IT experience in
            software analysis, design, development, testing and system
            maintenance in an IBM MVS Mainframe and AS400 environment. I am also
            a business developer/analyst with 2 founded companies in both
            e-commerce and food industry. I completed an immersive full stack
            web development course in order for me to handle web applications
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              Cobol
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              JCL
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              CICS
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              DB2
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              POS
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              HTML
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              CSS
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              Javascript
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              Node.JS
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              React.JS
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              SQL
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              Smart400
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              Digital Marketing
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
              IT/Business Development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSectionComponent;
