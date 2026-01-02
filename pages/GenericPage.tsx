import React from 'react';

interface GenericPageProps {
  title: string;
  subtitle: string;
  image?: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle, image }) => {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-[#F6F5EF]">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-brand rounded-[40px] p-12 lg:p-24 text-cream mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl lg:text-7xl font-semibold mb-8 tracking-[-0.02em]">{title}</h1>
                <p className="text-xl text-cream/70 leading-[1.6]">{subtitle}</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8 text-lg text-brand/80 leading-[1.7]">
                <p>
                    Organizations today face unprecedented complexity. Navigating this landscape requires more than just standard consulting frameworks; it demands a fundamental rethinking of how value is created, captured, and distributed.
                </p>
                <p>
                    Whether advising government bodies on smart city infrastructure or helping enterprise boards navigate digital disruption, the focus remains constant: clarity, structure, and execution.
                </p>
                <h3 className="text-3xl font-semibold text-brand mt-12 mb-6 tracking-[-0.01em]">Our Approach</h3>
                <p>
                    We begin with a rigorous diagnostic phase, identifying not just the symptoms of organizational friction, but their root causes. From there, we build bespoke strategies that leverage existing assets while boldly entering new markets.
                </p>
                {/* Simulated Content Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-white p-8 rounded-3xl border border-brand/5 shadow-sm">
                        <h4 className="text-xl font-semibold text-brand mb-4">Strategic Audits</h4>
                        <p className="text-sm leading-relaxed">Deep-dive analysis into current governance and operational efficiency.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-brand/5 shadow-sm">
                        <h4 className="text-xl font-semibold text-brand mb-4">Execution Roadmaps</h4>
                        <p className="text-sm leading-relaxed">Detailed quarter-by-quarter implementation plans with clear KPIs.</p>
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-[32px] border border-brand/5 sticky top-32">
                    <img src={image || "https://picsum.photos/seed/generic/600/600"} className="w-full h-64 object-cover rounded-2xl mb-6 grayscale" alt="Sidebar visual" />
                    <h3 className="text-2xl font-semibold text-brand mb-4">Key Outcomes</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-sm text-brand/70"><div className="w-2 h-2 bg-accent rounded-full"></div>Accelerated decision making</li>
                        <li className="flex items-center gap-3 text-sm text-brand/70"><div className="w-2 h-2 bg-accent rounded-full"></div>Market share expansion</li>
                        <li className="flex items-center gap-3 text-sm text-brand/70"><div className="w-2 h-2 bg-accent rounded-full"></div>Board-level alignment</li>
                    </ul>
                    <button className="w-full py-4 bg-brand text-cream rounded-xl font-semibold hover:bg-brand-dark transition-colors">
                        Download Capabilities Deck
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;