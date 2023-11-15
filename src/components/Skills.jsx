import React from 'react';
import { Fade } from 'react-reveal';
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaPython,
  FaDatabase,
  FaCode,
  FaToolbox,
  FaGithub,
  FaNpm,
  FaTerminal,
} from 'react-icons/fa';
import Header from './Header';

const Skills = () => {
  const iconSize = 32;

  const skillsData = [
    {
      title: 'Languages & Databases',
      items: [
        { title: 'JavaScript', icon: <FaHtml5 size={iconSize} /> },
        { title: 'TypeScript', icon: <FaCss3 size={iconSize} /> },
        { title: 'MongoDB', icon: <FaDatabase size={iconSize} /> },
        { title: 'Python', icon: <FaPython size={iconSize} /> },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      items: [
        { title: 'Android', icon: <FaAndroid size={iconSize} /> },
        { title: 'React', icon: <FaReact size={iconSize} /> },
        { title: 'React Native', icon: <FaReact size={iconSize} /> },
        { title: 'Node.js', icon: <FaNodeJs size={iconSize} /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        { title: 'VSCode', icon: <FaCode size={iconSize} /> },
        { title: 'GitHub', icon: <FaGithub size={iconSize} /> },
        { title: 'Npm', icon: <FaNpm size={iconSize} /> },
        { title: 'Terminal', icon: <FaTerminal size={iconSize} /> },
      ],
    },
    {
      title: 'Web Technologies',
      items: [
        { title: 'HTML5', icon: <FaHtml5 size={iconSize} /> },
        { title: 'CSS3', icon: <FaCss3 size={iconSize} /> },
        { title: 'Sass', icon: <FaSass size={iconSize} /> },
        { title: 'Webpack', icon: <FaToolbox size={iconSize} /> },
      ],
    },
  ];

  return (
    <Fade>
      <Header title={'Skills'} />
      <div className="skills">
        {skillsData.map((section) => (
          <div key={section.title} className="mb-2">
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <div className="flex items-center">
              {section.items.map((item) => (
                <div key={item.title} className="flex items-center flex-col text-center mx-auto">
                  {item.icon}
                  <p className="text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default Skills;
