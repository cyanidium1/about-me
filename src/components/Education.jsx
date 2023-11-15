import React from 'react';
import { Fade } from 'react-reveal';
import Header from './Header';

const Education = () => {
  return (
    <Fade>
      <Header title={'Education'} />
      <div className="education">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2"><a href="https://www.dstu.dp.ua/uni/foreign/index.html" target="_blank" rel="noopener noreferrer">Dnipro State Technical University</a></h3>
          <p className="text-base">Graduated in 2022</p>
          <p className="text-sm">Degree: Aviation Automatics Engineer</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2"><a href="https://goit.global/us/" target="_blank" rel="noopener noreferrer">GoIT Programming Courses</a></h3>
          <p className="text-base">Completed in 2023</p>
          <p className="text-sm">Degree: Fullstack Developer</p>
          <a href="https://drive.google.com/drive/folders/1yAvixwlfPm7dEKeCX-ArI6GbjOmIRLgp?usp=drive_link" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      </div>
    </Fade>
  );
};

export default Education;
