import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    checkbox: false,
    radio: '',
    select: '',
  });

  const [submitted, setSubmitted] = useState(false); // State to track if the form is submitted

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true on form submission
  };

  if (submitted) {
    // If submitted, show the output
    return (
      <div className="App">
        <h1>Submitted Data:</h1>
        <div>
          <strong>Text:</strong> {formData.text}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
        <div>
          <strong>Password:</strong> {formData.password}
        </div>
        <div>
          <strong>Number:</strong> {formData.number}
        </div>
        <div>
          <strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Not Checked'}
        </div>
        <div>
          <strong>Radio:</strong> {formData.radio}
        </div>
        <div>
          <strong>Select:</strong> {formData.select}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Text:
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Number:
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Checkbox:
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Radio:
            <label>
              <input
                type="radio"
                name="radio"
                value="option1"
                checked={formData.radio === 'option1'}
                onChange={handleChange}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                name="radio"
                value="option2"
                checked={formData.radio === 'option2'}
                onChange={handleChange}
              />
              Option 2
            </label>
          </label>
        </div>
        <div>
          <label>
            Select:
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;