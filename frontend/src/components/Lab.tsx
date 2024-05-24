import React from 'react';

interface LabProps {
    title: string;
    webGlLink: string; // Image URL
    image:string;
    instruction:string;

  }
const Lab: React.FC<LabProps> = ({ title, webGlLink, instruction, image}) => {
  return <div className="task-content">
    {title}
    {webGlLink}
    <img src={image} alt="Lab" className="lab-image" />
    {instruction}
  </div>;

}
export default Lab;