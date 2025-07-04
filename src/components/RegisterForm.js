import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [form, setForm] = useState({ leaderName: '', phone: '', ffid: '', members: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // full-page loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await axios.post('https://free-fire-backend.onrender.com/api/register', form);
      setSuccess(true);
      setForm({ leaderName: '', phone: '', ffid: '', members: '' });
    } catch (err) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner">Registering...</div>
        </div>
      )}

      <section className="registration-form">
        <h2>Register Your Squad</h2>
        {success && <div id="successMessage">🎉 Registration Successful!</div>}
        <form onSubmit={handleSubmit}>
          <input id="leaderName" value={form.leaderName} onChange={handleChange} placeholder="Team Leader Name" required />
          <input id="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
          <input id="ffid" value={form.ffid} onChange={handleChange} placeholder="Free Fire ID" required />
          <textarea id="members" value={form.members} onChange={handleChange} placeholder="Team Members (Name, FF ID)" required />
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register & Send Screenshot'}
          </button>
        </form>
      </section>
    </>
  );
}

export default RegisterForm;
