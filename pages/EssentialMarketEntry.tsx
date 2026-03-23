import React from 'react';
import AdvisoryDetail from './AdvisoryDetail';

const content = {
  id: 'essential-market-entry',
  title: 'Essential Market Entry Advisory',
  subtitle: 'Light-touch board-level support for companies entering MENA/GCC. Ideal for early-stage firms needing structured market entry and initial network access.',
  heroImage: 'https://i.postimg.cc/ZR8ZnKK5/image.png',
  sections: [
    {
      title: 'Package Investment',
      content: '$2,500 / month',
      isDark: true,
    },
    {
      title: 'Scope of Services',
      bullets: [
        'Develop a 12-month basic Market Entry & Localization Plan',
        'Focus on short-term revenue and service adoption',
        'Provide up to 5 key account introductions per month (enterprises, universities, government bodies)',
        'High-level channel partner identification guidance',
        'Basic investor mapping',
        '1–2 warm introductions to regional funds'
      ]
    },
    {
      title: 'Reporting',
      bullets: [
        'Monthly progress report',
        'One virtual representation opportunity per quarter'
      ]
    },
    {
      title: 'Additional Terms',
      bullets: [
        'Monthly retainer (paid in advance)',
        '3-month probation',
        'No performance bonus',
        'Client covers travel expenses'
      ]
    }
  ]
};

const EssentialMarketEntry = () => {
  return <AdvisoryDetail content={content} />;
};

export default EssentialMarketEntry;
