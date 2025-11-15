import '../styles/Login.css'
import {createUser, getUser} from '../services/UserHandling.jsx';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleData = () => {
    const data = {
      universityEmail: "test@pitt.edu",
      password: "pass",
      name: "Joe",
      contactDetails: "0987654321"
    };
    createUser(data); 
  };

  const handleGetUser = async (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    try {
      const user = await getUser(email);

      if (user) {
        console.log(user);
        if (user.password === password) {
          console.log('Login successful');
          setUser(user);
          setEmail('');
          setPassword('');
          setError(null);
        } else {
          console.log('Login failed');
          setUser(null);
          setPassword('');
          setError('Incorrect password');
        }
      } else {
        console.log('User not found');
        setUser(null);
        setPassword('');
        setError('User not found.');
      }
    } catch (error) {
      console.error('Error during GET request:', error);
      setUser(null);
      setPassword('');
      setError('Error during GET request.');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return(
    <>
      {user ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>

          <form onSubmit={handleGetUser}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
          
          <button onClick={handleData}>Register Test User</button>
        </div>
      )}
    </>
  )
}

export default App;