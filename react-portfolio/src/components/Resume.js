import React from 'react';

const Resume = () => {
  const proficiencies = [
    // Add proficiencies here
  ];

  return (
    <div>
      <a href="path/to/resume.pdf" download>Download Resume</a>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
