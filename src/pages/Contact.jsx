import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("All fields are required");
      setSuccess(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter a valid email");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  }

  return (
    <main className="container py-4">
      <h1 className="mb-4">Contact</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button className="btn btn-primary" type="submit">Send</button>
      </form>

      {error && <p className="text-danger mt-3">{error}</p>}
      {success && <p className="text-success mt-3">Form submitted successfully</p>}
    </main>
  );
}

export default Contact;
