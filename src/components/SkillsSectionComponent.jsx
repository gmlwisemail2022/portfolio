const Skill = ({ title, percentage }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between w-full">
        <div>{title}</div>
        <div>{percentage}%</div>
      </div>
      <div className="relative rounded-lg bg-gray-200 p-1 w-full">
        <div
          style={{ width: `${percentage}%` }}
          className="absolute h-full bg-blue-500 top-0 left-0 rounded-lg"
        />
      </div>
    </div>
  );
};

const SkillCircle = ({ title, percentage }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-center justify-center col-span-1">
        <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full">
          <div className="text-lg font-bold z-10">{percentage}%</div>
          <div
            style={{
              background: `conic-gradient( rgb(3, 133, 255) ${percentage}%, rgb(242, 242, 242) 0%)`,
            }}
            className="absolute inset-0 rounded-full"
          />
          <div className="absolute top-2 left-2 bottom-2 right-2 bg-white rounded-full" />
        </div>
      </div>
      <div>{title}</div>
    </div>
  );
};

const skillsObj = [
  {
    id: 0,
    title: "Cobol",
    percentage: 85,
  },
  {
    id: 0,
    title: "JCL",
    percentage: 85,
  },
  {
    id: 0,
    title: "CICS",
    percentage: 60,
  },
  {
    id: 0,
    title: "DB2/ SQL",
    percentage: 70,
  },
  {
    id: 0,
    title: "Javascript",
    percentage: 60,
  },
  {
    id: 0,
    title: "HTML/CSS",
    percentage: 55,
  },
  {
    id: 0,
    title: "React.js",
    percentage: 55,
  },
];

const professionalSkillsObj = [
  {
    id: 0,
    title: "Marketing",
    percentage: 75,
  },
  {
    id: 0,
    title: "Business Management",
    percentage: 65,
  },
  {
    id: 0,
    title: "Team Lead",
    percentage: 60,
  },
  {
    id: 0,
    title: "Team Work",
    percentage: 85,
  },
  {
    id: 0,
    title: "Business Analyst",
    percentage: 75,
  },
  {
    id: 0,
    title: "Technical Documentation",
    percentage: 90,
  },
];

const SkillsSectionComponent = () => {
  return (
    <div id="skills-section" className="py-20">
      <div className="grid grid-cols-2 gap-20 mx-auto max-w-[1140px]">
        <div className="flex flex-col gap-10 items-center justify-start">
          <div className="text-xl font-bold">Technical Skills</div>
          <div className="flex flex-col gap-5 w-full">
            {skillsObj.map((skill) => (
              <Skill
                key={skill.id}
                title={skill.title}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start">
          <div className="text-xl font-bold">Professional Skills</div>
          <div className="grid grid-cols-2 w-full gap-10">
            {professionalSkillsObj.map((skill) => (
              <SkillCircle
                key={skill.id}
                title={skill.title}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSectionComponent;
