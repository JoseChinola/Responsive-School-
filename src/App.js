import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';


function App() {
  return (
    <Router>
      <AuthRoutes />
    </Router>
  );
}

export default App;
