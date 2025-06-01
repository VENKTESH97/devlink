import React from 'react';

function CardPreview({ formData }) {
  return (
    <div className="card">
      <h2>Preview</h2>

      {/* Name */}
      <p><strong>Name:</strong> {formData.name}</p>

      {/* Profile Image */}
      {formData.image && (
        <img
          src={formData.image}
          alt="Profile"
          style={{ width: '100px', borderRadius: '50px' }}
        />
      )}

      {/* Quote / Bio */}
      <p><strong>Quote:</strong> {formData.quote}</p>

      {/* GitHub */}
      {formData.github && (
        <p>
          <strong>GitHub:</strong>{' '}
          <a href={formData.github} target="_blank" rel="noreferrer">
            {formData.github}
          </a>
        </p>
      )}

      {/* LinkedIn */}
      {formData.linkedin && (
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href={formData.linkedin} target="_blank" rel="noreferrer">
            {formData.linkedin}
          </a>
        </p>
      )}

      {/* Tech Stack */}
      <p><strong>Tech Stack:</strong> {formData.tech}</p>
    </div>
  );
}

export default CardPreview;
