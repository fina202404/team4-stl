import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchUsers = () => {
    setRefreshKey(prev => prev + 1); // Force re-render
  };

  return (
    <div className="App">
      <h1>MERN Stack Demo</h1>
      <UserForm fetchUsers={fetchUsers} />
      <UserList key={refreshKey} />
    </div>
  );
}
