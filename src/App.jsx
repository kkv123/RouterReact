import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

function App() {
  return (
    // <Home />
    <div className="p-6">
      <nav className="space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;