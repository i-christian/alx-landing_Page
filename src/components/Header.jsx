import React from 'react';


const Header = () => {
  return (
    <header id="intro">
      <section className="max-container">
        <img src="path_to_cover_image" alt="Project Cover" />
        <h1>PixelEscape</h1>
        <p>Escape the Pixelated Labyrinth: A 3D Raycasting Maze Adventure</p>

        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="link_to_project_video" className="explore-btn">Explore Now</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}


export default Header;
