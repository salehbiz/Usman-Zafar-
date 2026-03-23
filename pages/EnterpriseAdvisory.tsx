import React from 'react';
import AdvisoryDetail from './AdvisoryDetail';

const content = {
  id: 'enterprise-advisory',
  title: 'Enterprise Full-Spectrum Board Advisory',
  subtitle: 'Premium full-scale engagement designed for enterprises requiring complete market acceleration and ecosystem development.',
  heroImage: 'https://i.postimg.cc/xjRrkZYh/image.png',
  sections: [
    {
      title: 'Package Investment',
      content: '$10,000 / month',
      isDark: true,
    },
    {
      title: 'Scope of Services',
      bullets: [
        'Comprehensive 12-month strategic plan',
        'Full localization + revenue model development',
        '5–7 key meetings per week',
        'Government and institutional penetration',
        'Public sector advisory (policy & systems change)',
        'Full channel partner network build-out',
        'End-to-end funding & investor relations',
        'Full project lifecycle management',
        'PPP/BOT ecosystem development',
        'Smart Cities & AI advisory integration'
      ]
    },
    {
      title: 'Reporting',
      bullets: [
        'Bi-weekly executive & board reporting',
        'Full representation at conferences & high-level meetings'
      ]
    },
    {
      title: 'Additional Terms',
      bullets: [
        '10% profit share + 5% investment success fee',
        'All expenses covered',
        'Long-term engagement structure',
        'Full confidentiality + non-solicitation'
      ]
    }
  ]
};

const EnterpriseAdvisory = () => {
  return <AdvisoryDetail content={content} />;
};

export default EnterpriseAdvisory;
