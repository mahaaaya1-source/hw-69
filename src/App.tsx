import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowPage from './pages/ShowPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shows/:id" element={<ShowPage />} />
  </Routes>
);

export default App;
