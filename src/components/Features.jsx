import React from 'react';

const Features = () => {
  return (
    <section id="features" className="fade-in-up">
      <div className="max-container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {/* Feature 1 */}
          <div>
            <img src="path_to_feature_image_1" alt="Feature 1" />
            <h3>Feature 1 Name</h3>
            <p>Description of Feature 1</p>
          </div>
          {/* Feature 2 */}
          <div>
            <img src="path_to_feature_image_2" alt="Feature 2" />
            <h3>Feature 2 Name</h3>
            <p>Description of Feature 2</p>
          </div>
          {/* Feature 3 */}
          <div>
            <img src="path_to_feature_image_3" alt="Feature 3" />
            <h3>Feature 3 Name</h3>
            <p>Description of Feature 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
