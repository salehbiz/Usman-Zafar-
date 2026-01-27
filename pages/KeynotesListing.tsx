import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

// --- DATA DEFINITION ---
// Strictly ordered list of 70 events as requested.
const KEYNOTES_DATA = [
    {
        title: "DUBAI COURTS E-NOTARY CONFERENCE",
        description: "UNDER THE PATRONAGE OF HIGHNESS SHEIKH MAKTOUM BIN MOHAMMED BIN RASHID AL MAKTOUM, DEPUTY RULER OF DUBAI AL TAQNYAH / DUBAI COURTS HOSTED AN “ENOTARY CONFERENCE” AT AL BUSTAN ROTANA HOTEL DUBAI UAE.",
        image: "https://i.postimg.cc/fL2yM3d4/image.png"
    },
    {
        title: "Prime Awards Global Edition 2025 – Guest of Honor & Honouree",
        description: "Dr. Usman Zafar attended the International Prime Awards as the Guest of Honor and delivered a keynote alongside UAE Royal Family members and global dignitaries. He was honored with the Global Advisory Distinguished Guest Honouree 2025 award for his contributions to innovation, leadership, and business transformation.",
        image: "https://i.postimg.cc/g0q61b2B/image.png"
    },
    {
        title: "Royal Rapchee Entertainment – Red Carpet Welcome & Guest of Honor",
        description: "Dr. Usman Zafar received a Red Carpet Welcome as the Guest of Honor after securing $50 million in funding to support the launch of a global, family-friendly OTT platform. The ceremony took place at Dusit Thani Dubai in March 2025, recognizing his key role in structuring the investment.",
        image: "https://i.postimg.cc/Vv5rSSB3/image.png"
    },
    {
        title: "UAE–China Chamber of Commerce – AI & FinTech Forum Panelist",
        description: "Dr. Usman participated as a panelist at the Artificial Intelligence FinTech Forum, discussing Regulatory Frameworks for Inclusive FinTech: Balancing Innovation and Protection. He highlighted policy approaches enabling innovation while ensuring consumer trust.",
        image: "https://i.postimg.cc/MKMfqQGv/image.png"
    },
    {
        title: "Innovation Provider of the Year – UAE & Venezuela Joint Ceremony",
        description: "Dr. Usman received the Innovation Provider of the Year Award for World Business Hub (WBH), presented by H.E. Sheikh Isa Al-Muallah and the Ambassador of Venezuela. The award recognized his contributions to innovation and market expansion initiatives.",
        image: "https://i.postimg.cc/63pTS7SW/image.png"
    },
    {
        title: "Kenya Delegations – Smart Cities, Digital Transformation & National Projects",
        description: "During his official visits to Kenya, Dr. Usman delivered keynote briefings to government leaders, universities, and county officials on Smart Cities frameworks, national infrastructure planning, blockchain centers of excellence, and multi-million-dollar development projects. His engagements included collaborations with KCA University, Murang’a County, Nairobi Governor’s Office, and national strategic programs.",
        image: "https://i.postimg.cc/4yh4kp1J/image.png"
    },
    {
        title: "Future IT Summit",
        description: "Dr Usman Zafar was honored to Chair the Panel discussion at Future IT Summit to talk about “GCC Organizations’ Digital Transformation Readiness Roadmap and How prepared are we?” at Burj Al Arab.",
        image: "https://i.postimg.cc/tRLW15wv/image.png"
    },
    {
        title: "3rd Government Organization Websites Global Competitiveness Strategy Development Conference",
        description: "Dr. Usman Zafar presenting “Technology, Innovation and Lateral Thinking for Web Services” and leading the panel discussion “Use of Social Media for eGovernment Services” during the 3rd GCC Government Organization Websites Global Competitiveness Conference at Radisson SAS Hotel Dubai.",
        image: "https://i.postimg.cc/cCYK7p2k/image.png"
    },
    {
        title: "2nd Annual Customer Engagement Technology with e-Government Conference",
        description: "Dr Usman Zafar presenting “e-Government Transformation to Mobile Government: Opportunities & Challenges” as a keynote speaker at CET Middle Conference at the Address Hotel Dubai, UAE.",
        image: "https://i.postimg.cc/Dw5ScdjG/image.png"
    },
    {
        title: "Open Data Forum by Emirates ID & United Nations Abu Dhabi",
        description: "Dr Usman Zafar presenting “Open Data Strategies” as a speaker and moderating the distinguished panelist session during the 1st Open Data Forum organized by Emirates ID & United Nations at Ritz Carlton Hotel, Abu Dhabi, UAE.",
        image: "https://i.postimg.cc/PxvNTGXj/image.png"
    },
    {
        title: "GCC Fatal and Horrific Accidents Prevention Conference",
        description: "Dr. Usman Zafar presenting “How to Implement Highly Effective Safety Strategies and Initiatives” at the Burj Al Arab Hotel Dubai, UAE.",
        image: "https://i.postimg.cc/0y5QrKkw/image.png"
    },
    {
        title: "Ajman University International Conference on Trends for Information Technology and Applications",
        description: "Dr. Usman Zafar and Mr. Abdulraheem, IT Director Dubai Courts, jointly presenting the Dubai Courts eNotary Case Study at Ajman University, UAE.",
        image: "https://i.postimg.cc/76zPjgVp/image.png"
    },
    {
        title: "UAE Government e-Services Marketing Strategy Conference – Burj Al Arab",
        description: "Dr. Usman Zafar presenting “Developing e-Government Marketing Capabilities” and leading panel discussions on benchmarking citizen engagement success and failure criteria.",
        image: "https://i.postimg.cc/k50qN2mj/image.png"
    },
    {
        title: "Royal Returns Investment – Grand Inauguration Guest of Honor",
        description: "Dr. Usman Zafar served as Guest of Honor and received the Leading Global Advisor of the Year 2024 award.",
        image: "https://i.postimg.cc/DypVdSQd/image.png"
    },
    {
        title: "Datamatix GITEX Conference – Government Social Media",
        description: "Dr. Usman Zafar presenting “Government Social Media – Global Trends and its Impact”.",
        image: "https://i.postimg.cc/WzSsS3fR/image.png"
    },
    {
        title: "VVS Estate Academy Launch – Red Carpet Welcome",
        description: "Dr. Usman Zafar participated in the VVS Estate Academy launch and media briefing.",
        image: "https://i.postimg.cc/TwtQMDP8/image.png"
    },
    {
        title: "HCT Dubai – Future Smart Cities Keynote",
        description: "Dr. Usman Zafar delivered a keynote on Technology Transformation and Future Smart Cities.",
        image: "https://i.postimg.cc/jjX4P7PS/image.png"
    },
    {
        title: "Smart Government & Smart City Conference – Burj Al Arab",
        description: "Panel discussion with senior ICT and government leaders.",
        image: "https://i.postimg.cc/rFFVs1Kr/image.png"
    },
    {
        title: "eGovernment Program in Judicial Legislation, e-Notary & e-Justice",
        description: "Dr. Usman Zafar presenting “Key Challenges in eCourts Systems”.",
        image: "https://i.postimg.cc/bvb8WLBP/image.png"
    },
    {
        title: "Datamatix GITEX Conference – Web 2.0 & Semantic Web 3.0",
        description: "",
        image: "https://i.postimg.cc/3J59MY8J/image.png"
    },
    {
        title: "Launch of Properties Guild with Taqnyah",
        description: "",
        image: "https://i.postimg.cc/C5rWzfQL/image.png"
    },
    {
        title: "17th GCC e-Government and e-Services Conference",
        description: "",
        image: "https://i.postimg.cc/023TvDSB/image.png"
    },
    {
        title: "Manipal / IEEE Conference on Technology Management",
        description: "",
        image: "https://i.postimg.cc/V6YTgRyb/image.png"
    },
    {
        title: "10th GCC Government Excellence Services Conference",
        description: "",
        image: "https://i.postimg.cc/dVrxKXw2/image.png"
    },
    {
        title: "GCC e-Tourism Development Conference",
        description: "",
        image: "https://i.postimg.cc/J0spYYp8/image.png"
    },
    {
        title: "9th Leading CEO Conference – Burj Al Arab",
        description: "",
        image: "https://i.postimg.cc/cJTTxGjY/image.png"
    },
    {
        title: "Under Secretaries and Directors Leadership Conference",
        description: "",
        image: "https://i.postimg.cc/8cfbmJCc/image.png"
    },
    {
        title: "3rd GCC Government Corporate & Media Communication Conference",
        description: "",
        image: "https://i.postimg.cc/PfBGs11G/image.png"
    },
    {
        title: "19th GCC e-Government and e-Services Conference",
        description: "",
        image: "https://i.postimg.cc/pT4SvthG/image.png"
    },
    {
        title: "GCC Government & Private Sector Knowledge Management Conference",
        description: "",
        image: "https://i.postimg.cc/sDFL0sRD/image.png"
    },
    {
        title: "M-Government Conference Dubai",
        description: "",
        image: "https://i.postimg.cc/gJCg5qQT/image.png"
    },
    {
        title: "ID World Conference Abu Dhabi",
        description: "",
        image: "https://i.postimg.cc/MKb9PBDY/image.png"
    },
    {
        title: "Datamatix GITEX Conference – Big Data & Analytics",
        description: "",
        image: "https://i.postimg.cc/tg7D4MHN/image.png"
    },
    {
        title: "CPI Big Data Symposium",
        description: "",
        image: "https://i.postimg.cc/jdZzn4cM/image.png"
    },
    {
        title: "Avaya Video Conferencing & Mobility Roadshow",
        description: "",
        image: "https://i.postimg.cc/Bv1Dy90R/image.png"
    },
    {
        title: "20th GCC eGovernment & eServices Conference",
        description: "",
        image: "https://i.postimg.cc/tJDVP93d/image.png"
    },
    {
        title: "11th Government & Business Leading CEO Conference",
        description: "",
        image: "https://i.postimg.cc/9fTRbdP5/image.png"
    },
    {
        title: "6th GCC Smart Government & Cities Portals Conference",
        description: "",
        image: "https://i.postimg.cc/y6nJLYRN/image.png"
    },
    {
        title: "4th UAE Leading Government Executives Conference",
        description: "",
        image: "https://i.postimg.cc/W4Mzg2jc/image.png"
    },
    {
        title: "4th GCC Municipalities & Smart Cities Conference",
        description: "",
        image: "https://i.postimg.cc/VvNkxnt1/image.png"
    },
    {
        title: "3rd Smart Government & City Conference",
        description: "",
        image: "https://i.postimg.cc/t464GXsN/image.png"
    },
    {
        title: "Smart Cities & Smart Governance Conference – Qatar",
        description: "",
        image: "https://i.postimg.cc/3RtKFNqK/image.png"
    },
    {
        title: "Global Innovation Summit – Jumeirah Beach Hotel",
        description: "",
        image: "https://i.postimg.cc/TYzT9ZtV/image.png"
    },
    {
        title: "3rd Annual Critical Communications Conference",
        description: "",
        image: "https://i.postimg.cc/vTxpxmFk/image.png"
    },
    {
        title: "21st GCC Government & Smart Services Conference",
        description: "",
        image: "https://i.postimg.cc/WpQ4WF3z/image.png"
    },
    {
        title: "14th GCC Smart Government Customer Care Excellence Conference",
        description: "",
        image: "https://i.postimg.cc/gJxY4mbt/image.png"
    },
    {
        title: "5th GCC Government Future Leaders Conference",
        description: "",
        image: "https://i.postimg.cc/Gp2rhd27/image.png"
    },
    {
        title: "5th GCC Municipalities & Smart Cities Conference",
        description: "",
        image: "https://i.postimg.cc/RVBBJchp/image.png"
    },
    {
        title: "3rd M2M Middle East Forum",
        description: "",
        image: "https://i.postimg.cc/YCXKPZ3L/image.png"
    },
    {
        title: "15th GCC Smart Government Customer Care Excellence Conference",
        description: "",
        image: "https://i.postimg.cc/BvX9fp7v/image.png"
    },
    {
        title: "IQPC Bio Materic Conference",
        description: "",
        image: "https://i.postimg.cc/fy71fryL/image.png"
    },
    {
        title: "6th GCC Smart Municipalities Conference",
        description: "",
        image: "https://i.postimg.cc/7YVpCdjF/image.png"
    },
    {
        title: "Nationals Working in Private Sector Conference",
        description: "",
        image: "https://i.postimg.cc/vmpjFs6x/image.png"
    },
    {
        title: "23rd GCC Smart Cities & Smart Government Conference",
        description: "",
        image: "https://i.postimg.cc/DwNpLT66/image.png"
    },
    {
        title: "7th GCC Municipalities & Smart Cities Conference",
        description: "",
        image: "https://i.postimg.cc/W3L9YwQY/image.png"
    },
    {
        title: "Al Ain SME Expo Forum",
        description: "",
        image: "https://i.postimg.cc/65jMxXkG/image.png"
    },
    {
        title: "CEO Klub Investment Forum Dubai",
        description: "",
        image: "https://i.postimg.cc/t48D7zCg/image.png"
    },
    {
        title: "20th GCC Green HR Management Conference",
        description: "",
        image: "https://i.postimg.cc/fLfv2n7y/image.png"
    },
    {
        title: "CIO 200 Awards",
        description: "",
        image: "https://i.postimg.cc/7ZJnvT1g/image.png"
    },
    {
        title: "Blockchain Investment Conference",
        description: "",
        image: "https://i.postimg.cc/W38MmmjG/image.png"
    },
    {
        title: "24th GCC Smart Cities & Smart Government Conference",
        description: "",
        image: "https://i.postimg.cc/Hx6y8p4Q/image.png"
    },
    {
        title: "5G MENA Conference",
        description: "",
        image: "https://i.postimg.cc/Nf9HLvyX/image.png"
    },
    {
        title: "18th GCC HR Transformation Conference",
        description: "",
        image: "https://i.postimg.cc/6Q07F9PP/image.png"
    },
    {
        title: "17th GCC Customer Care Conference",
        description: "",
        image: "https://i.postimg.cc/KcV16p06/image.png"
    },
    {
        title: "Global Online Shopping Portals & GCC Retail Conference",
        description: "",
        image: "https://i.postimg.cc/GmnH28w5/image.png"
    },
    {
        title: "Innovation Conference – Federal Authority of Identity & Citizenship",
        description: "",
        image: "https://i.postimg.cc/DZ0zD1Lb/image.png"
    },
    {
        title: "8th Smart City Expo",
        description: "",
        image: "https://i.postimg.cc/mZ0QYrWp/image.png"
    },
    {
        title: "26th GCC Smart Government & Smart City Conference",
        description: "",
        image: "https://i.postimg.cc/nrG50y23/image.png"
    },
    {
        title: "25th GCC Smart Government & Smart Cities Conference",
        description: "",
        image: "https://i.postimg.cc/s2GNtQKH/image.png"
    },
    {
        title: "17th GCC Human Resources Conference",
        description: "",
        image: "https://i.postimg.cc/Jn1jjSyX/image.png"
    }
];

const KeynotesListing: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F6F5EF] min-h-screen font-sans text-[#124442] selection:bg-[#C8F16B] selection:text-[#0B1F1C]">
            
            {/* 1. HERO SECTION - Full Bleed / Dark */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-start overflow-hidden">
                {/* Background Image */}
                <img 
                    src="https://i.postimg.cc/gJCg5qQT/image.png" 
                    alt="Keynote Stage" 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(180deg, rgba(18,68,66,0.3) 0%, rgba(11,31,28,0.95) 100%)' }}></div>
                <div className="absolute inset-0 bg-[#0B1F1C]/20 z-10 mix-blend-multiply"></div>

                {/* Content */}
                <div className="relative z-20 w-full px-6 md:px-12 max-w-[1400px] mx-auto mb-16 animate-fade-in">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-3 mb-6 text-sm font-medium tracking-wide">
                                <span className="text-white/60 cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/')}>Home</span>
                                <ArrowRight size={12} className="text-[#C8F16B]" />
                                <span className="text-[#C8F16B]">Keynotes</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold text-white tracking-tighter mb-4 leading-[1.05] drop-shadow-2xl">
                                Keynotes & <br/> Conferences
                            </h1>
                            <p className="text-xl text-[#F3F6F4]/80 font-light max-w-2xl leading-relaxed">
                                Selected engagements, panels, awards, and keynote appearances.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SEQUENTIAL EVENT LISTING - Alternating Sections */}
            <div className="flex flex-col">
                {KEYNOTES_DATA.map((event, index) => {
                    const isDark = index % 2 !== 0; // Alternate light/dark
                    return (
                        <section 
                            key={index} 
                            className={`py-20 lg:py-24 px-6 md:px-12 border-b border-[#124442]/5 ${isDark ? 'bg-[#0B1F1C] text-white' : 'bg-[#F6F5EF] text-[#124442]'}`}
                        >
                            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                                {/* Visual Side - Order Alternates */}
                                <div className={`relative ${isDark ? 'lg:order-2' : ''}`}>
                                    <div className="aspect-[16/9] lg:aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl relative group">
                                        <img 
                                            src={event.image} 
                                            alt={event.title} 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'bg-black/20 group-hover:bg-transparent' : 'bg-[#124442]/10 group-hover:bg-transparent'}`}></div>
                                        
                                        {/* Floating Number */}
                                        <div className="absolute top-6 left-6 w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center font-bold text-lg shadow-lg">
                                            <span className="text-white">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content Side */}
                                <div className={`flex flex-col justify-center ${isDark ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-10 h-[2px] ${isDark ? 'bg-[#C8F16B]' : 'bg-[#124442]'}`}></div>
                                        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-[#C8F16B]' : 'text-[#124442]/60'}`}>
                                            Event Highlight
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-[1.1] tracking-tight">
                                        {event.title}
                                    </h2>

                                    {event.description && (
                                        <p className={`text-lg leading-[1.7] font-light mb-8 ${isDark ? 'text-[#F3F6F4]/70' : 'text-[#124442]/80'}`}>
                                            {event.description}
                                        </p>
                                    )}

                                    {/* Optional Gallery/Action Button placeholder if needed */}
                                    {/* <button className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b pb-1 w-fit transition-all ${isDark ? 'text-white border-white/30 hover:border-[#C8F16B] hover:text-[#C8F16B]' : 'text-[#124442] border-[#124442]/20 hover:border-[#124442]'}`}>
                                        View Gallery <ArrowUpRight size={16} />
                                    </button> */}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* 3. CTA SECTION - Dark Premium */}
            <FinalCTA />

        </div>
    );
};

export default KeynotesListing;