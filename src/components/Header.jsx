import React from 'react';

const Header = () => {
  return (
    <header id="intro">
      <section className="max-container">
        <img src="path_to_cover_image" alt="Project Cover" className="fade-in-up" />
        <h1 className="fade-in-up">PixelEscape</h1>
        <p className="fade-in-up">Escape the Pixelated Labyrinth: A 3D Raycasting Maze Adventure</p>

        <nav className="fade-in-up">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        <a href="link_to_project_video" className="explore-btn fade-in-up">Explore Now</a>
      </section>
    </header>
  );
}

export default Header;
