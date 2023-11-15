import React from "react";
import IconGithub from "../../UI/Icons/GitHub";
import IconInstagram from "../../UI/Icons/Instagram";
import IconLinkedin from "../../UI/Icons/Linked";

const Contacts = () => {
  return (
    <div className="flex flex-column items-center ">
      <div className="space-y-8">
        <IconGithub />
        <IconInstagram />
        <IconLinkedin />
      </div>
    </div>
  );
};

export default Contacts;
