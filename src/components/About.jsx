import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import avatar from '../images/avatar.jpg';

function About(props) {
  const { header } = props;

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          <Fade>
            <div className="flex flex-col items-center sm:flex-row space-x-4">
              <div className="sm:flex-shrink-0 w-1/3">
                <img src={avatar} alt="Avatar" className="w-full rounded-full" />
              </div>
              <div className="flex-shrink w-2/3">

                <p>👋 Hi, I'm Fedir, a full-stack developer passionate about bringing ideas to life. I bring a diverse set of skills and experiences to web and mobile development.</p>

                <p>💻 As a full-stack developer, I'm proficient in the entire web development stack. Crafting responsive interfaces with HTML, CSS, and JavaScript is my forte. I leverage tools like Sass/SCSS, Webpack, and NPM to deliver seamless user experiences.</p>

                <p>🌐 On the backend, I specialize in Node.js and MongoDB, building robust and scalable applications. Designing RESTful APIs for efficient server-client communication is a key part of my expertise.</p>

                <p>⚛️ In the realm of JavaScript libraries, I focus on React and Redux to create powerful frontend applications. My proficiency extends to React Native, allowing me to develop mobile apps.</p>

                <p>🖼️ Having a background in photography, I bring a keen sense of aesthetics to my work. I excel in working with images, whether it's editing, retouching, or enhancing visual elements. Proficient in tools like Photoshop, I ensure a polished and professional look for all visual aspects of a project.</p>

                <p>🚀 With a strong foundation in Git, I ensure collaborative and efficient project development. Continuous learning keeps me updated on the latest industry trends.</p>

                <p>🎓 Holding a <a href="https://drive.google.com/drive/folders/1yAvixwlfPm7dEKeCX-ArI6GbjOmIRLgp?usp=sharing" target="_blank" rel="noopener noreferrer">FullStack Developer Certificate</a> from <a href="https://goit.global/us/" target="_blank" rel="noopener noreferrer">GoIT</a>, I developed a keen interest in Web-Development. Throughout my career, I've had the privilege of working on diverse projects, including serving as a team lead on a marketplace project, contributing to React projects, and developing my own mobile game using React Native.</p>

                <p>🌟 Let's collaborate! Explore my Portfolio to see my work. Connect with me, and let's embark on a journey of innovation and code!</p>
              </div>
            </div>
          </Fade>
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
