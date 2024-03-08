// src/components/ReportIssue.js
import React, { useState } from 'react';

const ReportIssue = () => {
  const [issueDetails, setIssueDetails] = useState('');

  const handleReportIssue = () => {
    // Your logic to send the reported issue to the backend
    console.log('Issue reported:', issueDetails);
    // You can make an API call to send the issue details to the server
  };

  return (
    <div>
      <h2>Report an Issue</h2>
      <textarea
        placeholder="Describe the issue..."
        value={issueDetails}
        onChange={(e) => setIssueDetails(e.target.value)}
      />
      <button onClick={handleReportIssue}>Report Issue</button>
    </div>
  );
};

export default ReportIssue;
