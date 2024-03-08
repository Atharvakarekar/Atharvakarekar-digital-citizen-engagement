// src/components/EducationalCampaigns.js
import React, { useEffect, useState } from 'react';

const EducationalCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Your logic to fetch educational campaigns from the backend
    // This is a mock example, replace it with actual API calls
    const fetchedCampaigns = [
      { title: 'Campaign 1', description: 'Description 1' },
      { title: 'Campaign 2', description: 'Description 2' },
    ];

    setCampaigns(fetchedCampaigns);
  }, []);

  return (
    <div>
      <h2>Educational Campaigns</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>
            <strong>{campaign.title}</strong>: {campaign.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationalCampaigns;
