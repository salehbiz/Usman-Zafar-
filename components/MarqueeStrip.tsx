import React from 'react';
import { Star } from 'lucide-react';

const CAPABILITIES = [
  "Board Advisory", "Market Acceleration", "Digital Transformation", 
  "AI Advisory", "Smart Cities", "Keynotes", "Governance", "Global Strategy", 
  "Public Policy", "Investment Structuring"
];

const MarqueeStrip: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-accent py-4 border-y border-brand/10">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            {CAPABILITIES.map((cap, idx) => (
              <React.Fragment key={idx}>
                <span className="text-brand font-semibold uppercase tracking-wider text-sm lg:text-base">
                  {cap}
                </span>
                <Star size={12} className="text-brand fill-brand opacity-60" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeStrip;