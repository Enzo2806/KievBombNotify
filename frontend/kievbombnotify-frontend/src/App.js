import './App.css';
import LoginPage from './pages/LoginPage';
import { MapPage } from './pages/MapPage';
import { ReportPage } from './pages/ReportPage';
import { ErrorPage } from './pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router Router >
        <div className="App">
          <Routes >
            <Route path="/" element={<LoginPage />} ></Route>
            <Route path="/map" element={<MapPage />}></Route>
            <Route path="/report" element={<ReportPage />} ></Route>
            <Route path="*" element={<ErrorPage />} ></Route>
          </Routes>
        </div>
      </Router >
    </>

  );
}

export default App;
