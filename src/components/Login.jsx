import '../styles/Login.css'
import {createUser} from '../services/UserHandling.jsx';

function App() {
  const handleData = () => {
      // Example Data
      const data = {
          universityEmail: "test@pitt.edu",
          password: "pass",
          name: "Joe",
          contactDetails: "0987654321"
      };
      createUser(data); 
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleData}>Register User</button>
    </div>
  );
}

export default App;
