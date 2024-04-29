import React from 'react';
import './AboutUs.css'; // Import your CSS file

const jakwes_barong = '/src/assets/jakwes_barong.jpg';
const reanne = '/src/assets/reanne.jpg';
const miguel = '/src/assets/miguel.jpg';
const typescript = '/src/assets/typescript.png';
const reactjs ='src/assets/react.png';
const php = '/src/assets/php.png';
const unity = '/src/assets/unity.png';

const developers = [
  { id: 1, name: 'Jacques Oneil Gonzalez', school: 'Mapua University', image: jakwes_barong },
  { id: 2, name: 'Reanne Angela Buccat', school: 'Mapua University', image: reanne },
  { id: 3, name: 'Miguel Antonio Villaruel', school: 'Mapua University', image: miguel }
];
const languagesAndTools = [
  { id: 1, name: 'Typescript', image: typescript },
  { id: 2, name: 'React JSX', image:reactjs },
  { id: 3, name: 'PHP', image: php },
  { id: 4, name: 'Unity', image: unity }
];

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <h2>BasicGearsVirtual</h2>
        <h3>hello worldLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
        <h3>hello worldLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
        <h3>hello worldLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h3>
        <h2>Developers</h2>
        <div className="developer-list">
          {developers.map(developer => (
            <div className="developer" key={developer.id}>
              <div className="developer-info">
                <p className="name">{developer.name}</p>
                <p>{developer.school}</p>
              </div>
              <div className="developer-image-container">
                <img className="developer-image" src={developer.image} alt={developer.name} />
              </div>
            </div>
          ))}
        </div>
        <h2>Languages and Tools Used</h2>
        <div className="tools-list">
          {languagesAndTools.map(tool => (
            <div className="tool" key={tool.id}>
              <div className="tool-info">
                <p className="name">{tool.name}</p>
              </div>
              <div className="tool-image-container">
                <img className="tool-image" src={tool.image} alt={tool.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
