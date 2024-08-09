import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { MainPage, RocketPage, NotFoundPage} from './pages';

import './App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rockets/:rocketId" element={<RocketPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App
