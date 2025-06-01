import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import CardPreview from './components/CardPreview';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    quote: '',
    github: '',
    linkedin: '',
    tech: ''
  });

  return (
    <div>
      <h1>DevLink – Developer Card Generator</h1>
      <Form formData={formData} setFormData={setFormData} />
      <CardPreview formData={formData} />
    </div>
  );
}

export default App;

