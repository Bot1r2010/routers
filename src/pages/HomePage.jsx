import React, { useRef } from 'react'; 
import './homepage.css';
import 'animate.css';

const HomePage = () => {
  const sectionRef = useRef(null);

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='home'>
      <h1 className="h1 animate__animated animate__bounce">
        Добро Пожаловать!
      </h1>

      <button onClick={handleClick} className="btn">
        Начать!
      </button>

      <div className="spacer"></div>

      <div ref={sectionRef} className="section">
        <h1 className="fade-in">Информация о сайте</h1>

        <p className="text">В Сайте есть 4-page сайт евляется информационам. </p>

        <p className="p1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ex velit repudiandae consequatur necessitatibus maxime corrupti, accusantium nisi, aliquam,  veritatis magnam? Modi ipsam suscipit sapiente eaque nostrum cupiditate, provident exercitationem?
        </p>
        <p className="p1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti impedit nam iure. Reprehenderit impedit explicabo repellendus eum ratione vel accusantium laborum, aut nam harum ipsa? Quo libero ad aliquid quis!\</p>
        <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis impedit consectetur, earum ducimus tempora dolore eos debitis quae fuga aperiam itaque animi consequatur praesentium quisquam ex, illo sint distinctio?
        </p>

      </div>
    </div>
  );
};

export default HomePage;
