import React from 'react';

function Form({ formData, setFormData }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Profile Image URL"
        value={formData.image}
        onChange={(e) =>
          setFormData({ ...formData, image: e.target.value })
        }
      />

      <textarea
        placeholder="Your Quote or Bio"
        value={formData.quote}
        onChange={(e) =>
          setFormData({ ...formData, quote: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="GitHub URL"
        value={formData.github}
        onChange={(e) =>
          setFormData({ ...formData, github: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="LinkedIn URL"
        value={formData.linkedin}
        onChange={(e) =>
          setFormData({ ...formData, linkedin: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Tech Stack (e.g. HTML, CSS, JS)"
        value={formData.tech}
        onChange={(e) =>
          setFormData({ ...formData, tech: e.target.value })
        }
      />
    </form>
  );
}

export default Form;
