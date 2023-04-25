import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    let newErrors = { ...validationErrors };
    if (e.target.value.trim() === '') {
      newErrors[e.target.name] = 'This field is required';
    } else if (e.target.name === 'email' && !validateEmail(e.target.value)) {
      newErrors[e.target.name] = 'Invalid email address';
    } else {
      delete newErrors[e.target.name];
    }
    setValidationErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validationErrors.name && <span>{validationErrors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validationErrors.email && <span>{validationErrors.email}</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {validationErrors.message && <span>{validationErrors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;

