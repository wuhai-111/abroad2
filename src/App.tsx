import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ConsultantList from './pages/ConsultantList';
import ConsultantDetail from './pages/ConsultantDetail';
import UniversityList from './pages/UniversityList';
import UniversityDetail from './pages/UniversityDetail';
import ConsultantRegister from './pages/ConsultantRegister';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ConsultantList />} />
          <Route path="/consultants" element={<ConsultantList />} />
          <Route path="/consultant/:id" element={<ConsultantDetail />} />
          <Route path="/universities" element={<UniversityList />} />
          <Route path="/university/:id" element={<UniversityDetail />} />
          <Route path="/register" element={<ConsultantRegister />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;