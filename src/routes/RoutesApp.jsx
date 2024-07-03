import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';

const RoutesApp = () => {
    return (
      <>
      <Router>
        <nav>
          <ul>
           <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/myjob">My Job</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>

      </Router>
    
      </>
    );
  };
  
  export default RoutesApp;
  