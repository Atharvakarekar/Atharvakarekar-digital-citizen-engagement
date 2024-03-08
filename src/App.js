import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import ReportIssue from './components/ReportIssue';

function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Update to Routes */}
          {/* Add your routes here */}
          <Route path="/report" element={<ReportIssue />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
