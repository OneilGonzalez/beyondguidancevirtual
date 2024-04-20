import React from 'react';
import './AboutUs.css'; // Import your CSS file

const jakwes_barong = '/src/assets/jakwes_barong.jpg';
const reanne = '/src/assets/reanne.jpg';
const miguel = '/src/assets/miguel.jpg';

const developers = [
  { id: 1, name: 'Jacques Oneil Gonzalez', school: 'Mapua University', image: jakwes_barong },
  { id: 2, name: 'Reanne Angela Buccat', school: 'Mapua University', image: reanne },
  { id: 3, name: 'Miguel Antonio Villaruel', school: 'Mapua University', image: miguel }
];

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
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
      <p>Typescript, React JSX, PHP, Unity </p>
      <h2>Motto</h2>
      <p>BasicGearsVirtual aims to teach students about machine shop training that they could use to further improve their career goals</p>
    </div>
  );
};

export default AboutUs;
