import React from 'react';
import Cover from '../assets/img/Cover.png';

const Header = () => {
  return (
    <header id="intro">
      <section className="max-container">
        <img src={Cover} alt="Project Cover" className="fade-in-up" />
        <h1 className="fade-in-up">PixelEscape</h1>
        <p className="fade-in-up">Escape the Pixelated Labyrinth: A 3D Raycasting Maze Adventure</p>

        <nav className="fade-in-up">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        <a href="https://www.loom.com/share/8d298c9eba4a4f489d6a9c8a065c3680?sid=713813bc-1212-487b-9e69-58faa267e5f6" className="explore-btn fade-in-up">Explore Now</a>
      </section>
    </header>
  );
}

export default Header;
