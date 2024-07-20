import React from "react";

const TechStackContent = ({
  skill,
  skillName1 = "",
  skillName2 = "",
  skillName3 = "",
  skillName4 = "",
  skillName5 = "",
  skillName6 = "",
}) => {
  return (
    <div className="mt-4">
      <span className="text-xs font-semibold text-foreground sm:text-sm tracking-widest">
        {skill}
      </span>
      <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent1 text-foreground backdrop-blur-md transition-all ease-in-out hover:scale-100 pointer-events-auto cursor-default">
        {skillName1}
        {skillName2}
        {skillName3}
        {skillName4}
        {skillName5}
        {skillName6}
      </div>
    </div>
  );
};

export default TechStackContent;
