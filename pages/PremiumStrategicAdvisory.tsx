import React from 'react';
import AdvisoryDetail from './AdvisoryDetail';

const content = {
  id: 'premium-strategic-advisory',
  title: 'Premium Strategic Advisory',
  subtitle: 'High-impact advisory for growth-stage companies requiring C-level access and execution oversight.',
  heroImage: 'https://i.postimg.cc/wxhqwFzV/image.png',
  sections: [
    {
      title: 'Package Investment',
      content: '$7,000 / month',
      isDark: true,
    },
    {
      title: 'Scope of Services',
      bullets: [
        'Full 12-month plan + quarterly reviews',
        'Revenue forecasting & localization strategy',
        '12–15 key introductions per month',
        'Direct C-level & government networking',
        'Channel partner development',
        'Tendering support for large contracts',
        'Full funding & investor facilitation',
        'PPP/BOT ecosystem advisory',
        'Project management from start to completion'
      ]
    },
    {
      title: 'Reporting',
      bullets: [
        'Bi-weekly board updates',
        'KPI dashboard tracking',
        '2 conference representations per quarter'
      ]
    },
    {
      title: 'Additional Terms',
      bullets: [
        '10% profit share on generated projects',
        '5% investment success fee',
        'Travel expenses covered outside UAE'
      ]
    }
  ]
};

const PremiumStrategicAdvisory = () => {
  return <AdvisoryDetail content={content} />;
};

export default PremiumStrategicAdvisory;
