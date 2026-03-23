import React from 'react';
import AdvisoryDetail from './AdvisoryDetail';

const content = {
  id: 'growth-acceleration',
  title: 'Growth Acceleration Advisory',
  subtitle: 'Mid-tier support for scaling companies with deeper market access and structured execution.',
  heroImage: 'https://i.postimg.cc/QCLMHy3J/image.png',
  sections: [
    {
      title: 'Package Investment',
      content: '$5,000 / month',
      isDark: true,
    },
    {
      title: 'Scope of Services',
      bullets: [
        'Full 12-month strategic plan with KPIs',
        'Institutional partnership roadmap',
        '8–10 key account introductions per month',
        'Channel partner network development',
        'Account management strategy support',
        'Active funding facilitation',
        'Opportunity tracking for 2–3 projects'
      ]
    },
    {
      title: 'Reporting',
      bullets: [
        'Bi-monthly board reports',
        'Representation at one regional conference per quarter'
      ]
    },
    {
      title: 'Additional Terms',
      bullets: [
        '5% success fee on investments secured',
        'Monthly retainer + 3-month probation',
        'Client covers travel outside UAE'
      ]
    }
  ]
};

const GrowthAcceleration = () => {
  return <AdvisoryDetail content={content} />;
};

export default GrowthAcceleration;
