import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Lightbulb, 
  Target, 
  LayoutTemplate, 
  TrendingUp,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  Brain,
  List,
  UserCheck,
  ArrowUpRight,
  Calendar,
  Database,
  BarChart3,
  Shield,
  User,
  Sparkles
} from 'lucide-react';

const Aria: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const triggerElevenLabs = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget && typeof (widget as any).open === 'function') {
      (widget as any).open();
    } else {
      console.log('ElevenLabs widget not ready or open method unavailable.');
    }
  };

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-32 md:pt-40 pb-20 font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#124442] font-bold text-[10px] uppercase tracking-[0.3em]">ARIA</span>
                <div className="w-8 h-[1px] bg-[#C8F16B]"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#124442] tracking-tighter leading-[1.05]">
                Meet Aria.
              </h1>
              
              <p className="text-xl md:text-2xl text-[#124442] font-medium leading-tight max-w-xl">
                Your AI assistant for strategy, websites, positioning, and growth.
              </p>
              
              <p className="text-lg text-[#124442]/80 font-light leading-[1.7] max-w-lg mb-8">
                Ask Aria what you're working on, where you're stuck, or what you're trying to build. She'll help you clarify the next step — and, if it makes sense, connect you with Usman.
              </p>

              <div className="pt-4 flex flex-col gap-4 items-start">
                <div className="flex items-start gap-2 text-sm text-[#124442]/80 mt-2 font-medium">
                  <span>Use the voice assistant in the bottom-right corner to begin.</span>
                  <ArrowUpRight size={18} className="mt-0.5 rotate-90 flex-shrink-0 text-[#124442]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Aria Face */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden relative shadow-2xl group bg-[#0B2625]">
              {/* Background Glow */}
              <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 241, 107, 0.4) 0%, transparent 70%)' }}></div>
              
              <img 
                src="https://i.postimg.cc/d1n8ff2V/aria.png" 
                alt="Aria AI Assistant" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105 opacity-90"
              />
              
              {/* Top Label */}
              <div className="absolute top-8 left-0 right-0 text-center z-10 flex flex-col items-center">
                <span className="text-[#F3F6F4]/60 text-[10px] font-bold uppercase tracking-[0.4em]">ARIA</span>
                <div className="w-1.5 h-1.5 bg-[#C8F16B] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT ARIA HELPS YOU WITH */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#124442] font-bold text-xs uppercase tracking-[0.2em] mb-3">WHAT ARIA HELPS YOU WITH</span>
          <div className="w-12 h-[2px] bg-[#C8F16B]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, title: "Strategic clarity", desc: "Understand what you're working on, what matters, and what doesn't." },
            { icon: Target, title: "Positioning & messaging", desc: "Figure out how to communicate your value clearly and effectively." },
            { icon: LayoutTemplate, title: "Website direction", desc: "Structure your site so it actually converts, not just looks good." },
            { icon: TrendingUp, title: "Decision-making", desc: "Cut through noise and focus on the next step that moves things forward." }
          ].map((item, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-sm border border-[#124442]/10 rounded-[24px] p-8 flex flex-col items-center text-center hover:bg-white/60 transition-colors shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#0B2625] text-[#C8F16B] flex items-center justify-center mb-6 shadow-lg">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-[#124442]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS (Dark Block) */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="bg-[#0B2625] rounded-[32px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-xl">
          <div className="text-center mb-16 relative z-10 flex flex-col items-center">
            <span className="text-[#F3F6F4] font-bold text-xs uppercase tracking-[0.2em] mb-3">HOW IT WORKS</span>
            <div className="w-12 h-[2px] bg-[#C8F16B]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#C8F16B] text-[#0B2625] flex items-center justify-center font-bold text-sm">1</div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#C8F16B]">
                  <MessageCircle size={28} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Start a conversation</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
                Click the assistant and begin speaking naturally.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="hidden lg:block absolute top-10 -left-1/4 w-1/2 h-[1px] bg-white/10"></div>
              <div className="flex items-center gap-4 mb-6 relative bg-[#0B2625] px-4">
                <div className="w-8 h-8 rounded-full bg-[#C8F16B] text-[#0B2625] flex items-center justify-center font-bold text-sm">2</div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#C8F16B]">
                  <MessageSquare size={28} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Explain your situation</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
                Share what you're building, stuck on, or trying to improve.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="hidden lg:block absolute top-10 -left-1/4 w-1/2 h-[1px] bg-white/10"></div>
              <div className="flex items-center gap-4 mb-6 relative bg-[#0B2625] px-4">
                <div className="w-8 h-8 rounded-full bg-[#C8F16B] text-[#0B2625] flex items-center justify-center font-bold text-sm">3</div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[#C8F16B]">
                  <Lightbulb size={28} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Get direction</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[250px]">
                Aria responds with structured thinking, insights, and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPLIT SECTION */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: What you can ask */}
          <div>
            <div className="mb-10 flex flex-col items-start">
              <span className="text-[#124442] font-bold text-xs uppercase tracking-[0.2em] mb-3">WHAT YOU CAN ASK ARIA</span>
              <div className="w-12 h-[2px] bg-[#C8F16B]"></div>
            </div>
            <div className="space-y-4">
              {[
                { text: "\"Who is Dr. Usman Zafar and what does he specialize in?\"" },
                { text: "\"How can Dr. Usman help someone like me?\"" },
                { text: "\"Is this the right fit for what I’m trying to build?\"" },
                { text: "\"What kind of work does he typically do?\"" },
                { text: "\"How should I prepare before reaching out to him?\"" },
                { text: "\"Can I build something like this for my own website?\"", isLighter: true }
              ].map((q, i) => (
                <div key={i} className={`flex items-center gap-4 bg-white/40 border border-[#124442]/10 rounded-2xl p-5 shadow-sm transition-colors ${q.isLighter ? 'opacity-70 hover:opacity-100' : 'hover:bg-white/60'}`}>
                  <MessageSquare size={20} className={`flex-shrink-0 ${q.isLighter ? 'text-[#124442]/40' : 'text-[#C8F16B]'}`} />
                  <span className={`text-sm ${q.isLighter ? 'text-[#124442]/60 font-normal' : 'text-[#124442]/80 font-medium'}`}>{q.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dark Aria Card */}
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0B2625] to-[#124442] shadow-2xl h-full min-h-[400px]">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle at 70% 40%, rgba(200, 241, 107, 0.3) 0%, transparent 60%)' }}></div>
            
            <img 
              src="https://i.postimg.cc/d1n8ff2V/aria.png" 
              alt="Aria AI Assistant" 
              className="absolute right-[-5%] bottom-0 h-full w-auto object-cover object-right opacity-90 transition-transform duration-700 hover:scale-105"
            />
            
            <div className="relative z-10 p-10 md:p-12 flex flex-col justify-center h-full w-full sm:w-[80%] md:w-[70%]">
              <div className="w-12 h-12 rounded-full border border-[#C8F16B]/30 flex items-center justify-center mb-8 bg-[#0B2625]/50 backdrop-blur-sm">
                <div className="flex gap-1 items-center">
                   <div className="w-0.5 h-3 bg-[#C8F16B]"></div>
                   <div className="w-0.5 h-5 bg-[#C8F16B]"></div>
                   <div className="w-0.5 h-3 bg-[#C8F16B]"></div>
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-white leading-tight mb-4 drop-shadow-md">
                Aria connects you<br/>with <span className="text-[#C8F16B]">clarity.</span>
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-[280px] drop-shadow-md">
                She helps you understand Dr. Usman, his approach, and how he can help you — so you can take the next step with confidence.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BEYOND CONVERSATION */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="bg-[#0B1A1A] rounded-[40px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-white/5">
          {/* Top subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-[#C8F16B]/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

          {/* Heading */}
          <div className="text-center mb-16 relative z-10 flex flex-col items-center">
            <span className="text-[#C8F16B] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">BEYOND CONVERSATION</span>
            <div className="w-12 h-[2px] bg-white/20 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Your own voice AI agent. Your digital edge.
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              Take what you experience with Aria and bring it to your own brand.<br className="hidden md:block" />
              We build custom voice AI agents and websites that work for you — 24/7.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10 mb-20 lg:divide-x divide-white/10">
            {[
              { icon: MessageCircle, title: "Always available", desc: "Your agent works 24/7, answering questions and capturing opportunities." },
              { icon: User, title: "Qualified conversations", desc: "Engage the right people, ask the right questions, and pre-qualify leads." },
              { icon: Calendar, title: "Smart scheduling", desc: "Book calls, manage calendars, and reduce back-and-forth." },
              { icon: Database, title: "Capture & remember", desc: "Never lose a detail. Your agent remembers and follows up automatically." },
              { icon: BarChart3, title: "Insights that help", desc: "Get summaries, trends, and insights from every conversation." },
              { icon: Shield, title: "Your brand, your voice", desc: "Built around your brand identity, tone, and goals — seamlessly." }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <div className="w-14 h-14 rounded-full border border-[#C8F16B]/40 flex items-center justify-center text-[#C8F16B] mb-6 shadow-sm">
                  <f.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-medium text-sm mb-3">{f.title}</h4>
                <p className="text-white/50 text-[13px] leading-relaxed max-w-[200px]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="relative z-10 bg-gradient-to-r from-white/[0.02] to-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-6">
               <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C8F16B]">
                 <Sparkles size={32} strokeWidth={1.5} />
               </div>
               <div>
                 <h4 className="text-white font-semibold text-lg mb-1">Custom website + voice AI agent.</h4>
                 <p className="text-white/60 text-sm">A powerful combination that represents your brand and drives real results.</p>
               </div>
            </div>
            <button 
              onClick={() => navigate('/contact')}
              className="flex items-center gap-3 bg-[#C8F16B] text-[#0B2625] rounded-full px-8 py-3.5 font-bold hover:bg-white transition-colors whitespace-nowrap flex-shrink-0"
            >
               <span>Explore how it works</span>
               <ArrowUpRight size={18} className="mt-0.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Aria;
