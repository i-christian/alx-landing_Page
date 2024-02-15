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
            <p>The game has two views: the 2D view and the projected 3D view. These views can be toggled between using the M key on the keyboard.</p>
          </div>
          {/* Feature 2 */}
          <div>
            <img src={Feature_Two} alt="Feature 2" />
            <h3>Collision detection of the game</h3>
            <p>This feature allows player movement to be restricted only to empty spaces. Thus a player should not be able to pass through walls.</p>
          </div>
          {/* Feature 3 */}
          <div>
            <a href="https://www.loom.com/share/bfd051a15a3c4707ad57214fcfdc4052">
             <img style={{ maxWidth: '300px' }} src="https://cdn.loom.com/sessions/thumbnails/bfd051a15a3c4707ad57214fcfdc4052-with-play.gif" alt="Video Thumbnail" />
            </a>
            <h3>Player movement</h3>
            <p>Using the arrow keys to show player movement and rotation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
