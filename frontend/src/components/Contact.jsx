import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="py-16 px-6 bg-white" id="contact">
      <h3 className="text-3xl font-bold mb-8 text-blue-800 text-center">Contact Us</h3>
      <form
        className="max-w-xl mx-auto bg-blue-50 p-8 rounded-lg shadow space-y-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2 w-full h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition w-full"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-blue-700">{status}</p>
      )}
    </section>
  );
}
