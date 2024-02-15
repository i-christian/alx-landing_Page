import React from 'react';
import Feature_One from '../assets/img/2D.png';
import Feature_Two from '../assets/img/Collision.png';

const Features = () => {
  return (
    <section id="features" className="fade-in-up">
      <div className="max-container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {/* Feature 1 */}
          <div>
            <img src={Feature_One} alt="Feature 1" />
            <h3>2D view of the game map</h3>
             <p>Our project aims to provide players with an immersive gaming experience by offering two distinct views: the traditional 2D view and an engaging projected 3D view. With seamless toggling between these perspectives using the M key on the keyboard, players can explore the game world from different angles, enhancing their gameplay experience.</p>
          </div>
          {/* Feature 2 */}
          <div>
            <img src={Feature_Two} alt="Feature 2" />
            <h3>Collision detection of the game</h3>
             <p>Ensuring realism and fair play, our collision detection feature restricts player movement solely to empty spaces within the game environment. By preventing players from passing through walls or other obstacles, we maintain the integrity of the game's challenges and enhance the overall gaming experience.</p>
          </div>
          {/* Feature 3 */}
          <div>
            <a href="https://www.loom.com/share/bfd051a15a3c4707ad57214fcfdc4052">
             <img style={{ maxWidth: '300px' }} src="https://cdn.loom.com/sessions/thumbnails/bfd051a15a3c4707ad57214fcfdc4052-with-play.gif" alt="Video Thumbnail" />
            </a>
            <h3>Player movement</h3>
            <p>With intuitive controls using arrow keys, our project showcases fluid player movement and rotation. This enhances user engagement and immersion, allowing players to navigate through the game world with ease and precision, ultimately contributing to a more enjoyable gaming experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
