import React from 'react';
import PropTypes from 'prop-types';

function Projects(props){
  return(
    <div>
      <h3><strong>Project Name:</strong> {props.name}</h3>
      <ul><strong>Used:</strong> {props.type}</ul>
      <ul><strong>Description:</strong> {props.description}</ul>
    </div>
  );
}

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Projects;
