import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/Login';
import Dashboard from './Views/Dashboard';
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} /> */}
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
