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
        <br></br>
        <h3>Welcome to BasicGearsVirtual, the premier e-learning platform designed specifically for mechanical engineering students undertaking machine shop training courses. Our mission is to bridge the gap between theoretical knowledge and practical skills by providing a comprehensive, interactive, and engaging learning experience. </h3>
        <br></br>
        <h3>At BasicGearsVirtual, we understand the complexities and challenges of mastering machine shop techniques. Our platform offers a wide range of meticulously crafted modules that cover fundamental concepts, advanced techniques, and hands-on training exercises essential for excelling in the machine shop environment. Whether you are a beginner looking to understand the basics or an advanced student seeking to hone your skills, BasicGearsVirtual has something for everyone.</h3>
        <br></br>
        <h3>Dive into our extensive library of interactive lessons covering basic machining principles to advanced operations. Each module is designed to be engaging and easy to follow, ensuring you grasp even the most complex topics. Practice your skills with our state-of-the-art virtual laboratory that mimic real-world machine shop scenarios, allowing you to experiment and learn in a safe, controlled environment. Learn from seasoned professionals who provide valuable insights, tips, and best practices. Test your knowledge and track your progress with comprehensive assessments and quizzes, receiving instant feedback and personalized recommendations. Join our vibrant community of learners and professionals to share experiences, ask questions, and collaborate with peers and mentors.</h3>
        <br></br>
        <h3>Learn at your own pace from the comfort of your home or anywhere with an internet connection. Access our resources anytime, fitting your studies around your schedule. Benefit from high-quality content developed by experts in the field, ensuring the best education possible. Save on costs associated with traditional machine shop training with our affordable and comprehensive online solution. Embark on your journey to becoming a proficient machinist with BasicGearsVirtual. Join us today and take the first step towards mastering the art and science of machining. Your future in mechanical engineering starts here!</h3>
        <br></br>
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
