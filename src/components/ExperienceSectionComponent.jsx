import React from "react";

const ExperienceSectionComponent = () => {
  const technicalExperience = [
    {
      title: "Full Stack Development",
      description:
        "• Build client-side applications using React and server-side applications using Node.js and Express<br />" +
        "• Incorporate database access using PostgreSQL<br />" +
        "• Deployment via Netlify and AWS<br />" +
        "• Familiar with web development tools such as Postman, Git, and other DevOps practices<br />" +
        "• Knowledge in HTML, CSS, and responsive web design",
    },
    {
      title: "Mainframe Development",
      description:
        "• Proficient in COBOL programming language and JCL scripting<br />" +
        "• Experienced with DB2 and IMS database management<br />" +
        "• Knowledge of CICS for transaction processing<br />" +
        "• Experienced with OS/390 and z/OS (IBM's mainframe operating system)<br />" +
        "• Skilled in using mainframe tools such as ISPF Facility, Abend-AID, Endeavor, ChangeMAN, and Xpediter<br />" +
        "• Experienced with job scheduling tools like Control-M, Zeke and CA-7",
    },
    {
      title: "Business Development",
      description:
        "• Familiar with e-commerce platforms particularly B2C business model<br />" +
        "• Knowledge of CICS for transaction processing<br />" +
        "• Experienced with POS and CloudPOS system<br />" +
        "• Knowledge of Data Analysis and database querying via SQL<br />" +
        "• Experienced with requirements gathering and business and functional analysis<br />" +
        "• Familiar with Facebook Marketing, Digital Marketing, and SEO",
    },
    {
      title: "Education",
      description:
        "BS Electronics and Communications Engineer<br />" +
        "• 2001 - 2006,Licensed ECE<br />",
    },
  ];

  const workExperience = [
    {
      title: "Mainframe Developer/ Analyst",
      company: "Nityo Infotech Inc (BPI)",
      duration: "2022 - 2023",
    },
    {
      title: "Entrepreneur",
      company: "GA Mobile/ CACI Inc. / Shadowace Gaming",
      duration: "2014 - 2023",
    },
    {
      title: "IT/ Business Developer",
      company: "Collaborative Avenue of Concepts",
      duration: "2017 - 2019",
    },
    {
      title: "Programmer/ Analyst",
      company: "QBE Management Services/ CSC",
      duration: "2010 - 2014",
    },
    {
      title: "Software Engineer",
      company: "US Technology Global (Wellpoint Dental Team)",
      duration: "2009 - 2010",
    },
    {
      title: "Junior Programmer/ Production Support",
      company: "Software Ventures International (Northwest Airlines)",
      duration: "2007 - 2009",
    },
  ];

  return (
    <div id="experience-section" className="grid grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Technical Experience</h2>
        <div className="grid grid-cols-1 gap-4">
          {technicalExperience.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold">{skill.title}</h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: skill.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="grid grid-cols-1 gap-4">
          {workExperience.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-600">{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSectionComponent;
