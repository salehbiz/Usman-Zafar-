import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="max-w-[1400px] mx-auto">

        {/* Main Glass Card */}
        <div className="relative rounded-[32px] overflow-hidden bg-white/[0.02] backdrop-blur-2xl border border-white/5 p-8 lg:p-0">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

            {/* Left: Portrait */}
            <div className="relative min-h-[500px] lg:h-full overflow-hidden rounded-[24px] lg:rounded-none lg:rounded-l-[32px]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Dr. Usman Zafar"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1F1C]/30 mix-blend-color"></div>
              {/* Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(11,31,28,0.8)]"></div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center p-8 lg:p-20 relative">
              {/* Decorative floating lines */}
              <div className="absolute top-12 right-12 w-20 h-20 border-t border-r border-[#C8F16B]/20 rounded-tr-[30px]"></div>

              <h2 className="text-4xl lg:text-6xl font-medium text-white mb-8 tracking-[-0.02em] leading-[1.1]">
                Not an ordinary <br /> <span className="text-white/50">advisor.</span>
              </h2>

              <div className="space-y-6 text-lg text-[#F3F6F4]/60 font-light leading-relaxed mb-12 max-w-md">
                <p>
                  Dr. Usman Zafar is a globally recognized strategist, advisor, and thought leader working at the intersection of policy, technology, and markets.
                </p>
                <p>
                  His work spans governments, enterprises, and high-growth organizations, helping leaders move from complexity to clarity — and from strategy to execution.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={() => navigate('/about')}
                  className="group relative pb-1 text-white font-medium text-lg overflow-hidden"
                >
                  <span className="relative z-10">Explore Full Profile</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8F16B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C8F16B] group-hover:bg-[#C8F16B] group-hover:text-[#0B1F1C] transition-colors cursor-pointer" onClick={() => navigate('/about')}>
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProfile;