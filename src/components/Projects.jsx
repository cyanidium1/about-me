import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const numberOfItems = showMore && data ? data.length : 6;
  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <p className='w-4/5'>
              Welcome to my project showcase, where I highlight some of the most significant and impactful projects I've been involved in. As a team leader and dedicated developer, I've invested considerable time and effort into these endeavors, showcasing my skills and commitment to delivering high-quality results. For a more comprehensive view of my work, including team and smaller individual projects, feel free to explore my <a href="https://github.com/cyanidium1" target="_blank" rel="noopener noreferrer">GitHub</a>. Now, let's delve into the key projects that demonstrate my expertise and passion for creating innovative solutions.
            </p>
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.projects?.slice(0, numberOfItems).map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>

              {/* {!showMore
                && (
                <Button
                  style={styles.showMoreStyle}
                  variant={theme.bsSecondaryVariant}
                  onClick={() => setShowMore(true)}
                >
                  show more
                </Button>
                )} */}

            </Container>
          </div>
        ) : <FallbackSpinner />}
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
