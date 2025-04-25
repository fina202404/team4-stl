import { useState } from 'react';
import axios from 'axios';

export default function UserForm({ fetchUsers }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', formData);
      fetchUsers(); // Refresh list
      setFormData({ name: '', email: '', age: '' });
    } catch (err) {
      console.error('Error creating user:', err.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
        required
      />
      <input
        type="number"
        value={formData.age}
        onChange={(e) => setFormData({...formData, age: e.target.value})}
        placeholder="Age (optional)"
      />
      <button type="submit">Create User</button>
    </form>
  );
}
