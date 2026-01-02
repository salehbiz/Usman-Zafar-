import React from 'react';

const METRICS = [
  { label: 'Countries Impacted', value: '50+' },
  { label: 'Value Delivered', value: '$150M+' },
  { label: 'Global Engagements', value: 'Fortune 500' },
  { label: 'Focus Area', value: 'Policy & Scale' },
];

const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B1F1C] relative border-y border-white/5">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start relative w-full md:w-auto px-8 group">
              {/* Separator */}
              {idx !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 group-hover:bg-[#C8F16B]/50 transition-colors duration-500"></div>
              )}
              
              <h3 className="text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight group-hover:text-[#C8F16B] transition-colors duration-500 cursor-default">
                {metric.value}
              </h3>
              <p className="text-[#F3F6F4]/40 text-xs uppercase tracking-[0.2em] font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;