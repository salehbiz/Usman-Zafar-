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
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2532&auto=format&fit=crop"
    },
    {
        title: "Prime Awards Global Edition 2025 – Guest of Honor & Honouree",
        description: "Dr. Usman Zafar attended the International Prime Awards as the Guest of Honor and delivered a keynote alongside UAE Royal Family members and global dignitaries. He was honored with the Global Advisory Distinguished Guest Honouree 2025 award for his contributions to innovation, leadership, and business transformation.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "Royal Rapchee Entertainment – Red Carpet Welcome & Guest of Honor",
        description: "Dr. Usman Zafar received a Red Carpet Welcome as the Guest of Honor after securing $50 million in funding to support the launch of a global, family-friendly OTT platform. The ceremony took place at Dusit Thani Dubai in March 2025, recognizing his key role in structuring the investment.",
        image: "https://images.unsplash.com/photo-1505373877841-8d43a716664d?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "UAE–China Chamber of Commerce – AI & FinTech Forum Panelist",
        description: "Dr. Usman participated as a panelist at the Artificial Intelligence FinTech Forum, discussing Regulatory Frameworks for Inclusive FinTech: Balancing Innovation and Protection. He highlighted policy approaches enabling innovation while ensuring consumer trust.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Innovation Provider of the Year – UAE & Venezuela Joint Ceremony",
        description: "Dr. Usman received the Innovation Provider of the Year Award for World Business Hub (WBH), presented by H.E. Sheikh Isa Al-Muallah and the Ambassador of Venezuela. The award recognized his contributions to innovation and market expansion initiatives.",
        image: "https://images.unsplash.com/photo-1628108920110-63ce73456743?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "Kenya Delegations – Smart Cities, Digital Transformation & National Projects",
        description: "During his official visits to Kenya, Dr. Usman delivered keynote briefings to government leaders, universities, and county officials on Smart Cities frameworks, national infrastructure planning, blockchain centers of excellence, and multi-million-dollar development projects. His engagements included collaborations with KCA University, Murang’a County, Nairobi Governor’s Office, and national strategic programs.",
        image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Future IT Summit",
        description: "Dr Usman Zafar was honored to Chair the Panel discussion at Future IT Summit to talk about “GCC Organizations’ Digital Transformation Readiness Roadmap and How prepared are we?” at Burj Al Arab.",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "3rd Government Organization Websites Global Competitiveness Strategy Development Conference",
        description: "Dr. Usman Zafar presenting “Technology, Innovation and Lateral Thinking for Web Services” and leading the panel discussion “Use of Social Media for eGovernment Services” during the 3rd GCC Government Organization Websites Global Competitiveness Conference at Radisson SAS Hotel Dubai.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "2nd Annual Customer Engagement Technology with e-Government Conference",
        description: "Dr Usman Zafar presenting “e-Government Transformation to Mobile Government: Opportunities & Challenges” as a keynote speaker at CET Middle Conference at the Address Hotel Dubai, UAE.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
    },
    {
        title: "Open Data Forum by Emirates ID & United Nations Abu Dhabi",
        description: "Dr Usman Zafar presenting “Open Data Strategies” as a speaker and moderating the distinguished panelist session during the 1st Open Data Forum organized by Emirates ID & United Nations at Ritz Carlton Hotel, Abu Dhabi, UAE.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
    },
    {
        title: "GCC Fatal and Horrific Accidents Prevention Conference",
        description: "Dr. Usman Zafar presenting “How to Implement Highly Effective Safety Strategies and Initiatives” at the Burj Al Arab Hotel Dubai, UAE.",
        image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Ajman University International Conference on Trends for Information Technology and Applications",
        description: "Dr. Usman Zafar and Mr. Abdulraheem, IT Director Dubai Courts, jointly presenting the Dubai Courts eNotary Case Study at Ajman University, UAE.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "UAE Government e-Services Marketing Strategy Conference – Burj Al Arab",
        description: "Dr. Usman Zafar presenting “Developing e-Government Marketing Capabilities” and leading panel discussions on benchmarking citizen engagement success and failure criteria.",
        image: "https://images.unsplash.com/photo-1541818767794-2b9626da71b1?q=80&w=1287&auto=format&fit=crop"
    },
    {
        title: "Royal Returns Investment – Grand Inauguration Guest of Honor",
        description: "Dr. Usman Zafar served as Guest of Honor and received the Leading Global Advisor of the Year 2024 award.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
        title: "Datamatix GITEX Conference – Government Social Media",
        description: "Dr. Usman Zafar presenting “Government Social Media – Global Trends and its Impact”.",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "VVS Estate Academy Launch – Red Carpet Welcome",
        description: "Dr. Usman Zafar participated in the VVS Estate Academy launch and media briefing.",
        image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2573&auto=format&fit=crop"
    },
    {
        title: "HCT Dubai – Future Smart Cities Keynote",
        description: "Dr. Usman Zafar delivered a keynote on Technology Transformation and Future Smart Cities.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Smart Government & Smart City Conference – Burj Al Arab",
        description: "Panel discussion with senior ICT and government leaders.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "eGovernment Program in Judicial Legislation, e-Notary & e-Justice",
        description: "Dr. Usman Zafar presenting “Key Challenges in eCourts Systems”.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2672&auto=format&fit=crop"
    },
    {
        title: "Datamatix GITEX Conference – Web 2.0 & Semantic Web 3.0",
        description: "",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Launch of Properties Guild with Taqnyah",
        description: "",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop"
    },
    {
        title: "17th GCC e-Government and e-Services Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "Manipal / IEEE Conference on Technology Management",
        description: "",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "10th GCC Government Excellence Services Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "GCC e-Tourism Development Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2674&auto=format&fit=crop"
    },
    {
        title: "9th Leading CEO Conference – Burj Al Arab",
        description: "",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
    },
    {
        title: "Under Secretaries and Directors Leadership Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
        title: "3rd GCC Government Corporate & Media Communication Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "19th GCC e-Government and e-Services Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1531297461136-82lw9z1p7q3?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "GCC Government & Private Sector Knowledge Management Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "M-Government Conference Dubai",
        description: "",
        image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "ID World Conference Abu Dhabi",
        description: "",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Datamatix GITEX Conference – Big Data & Analytics",
        description: "",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "CPI Big Data Symposium",
        description: "",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop"
    },
    {
        title: "Avaya Video Conferencing & Mobility Roadshow",
        description: "",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "20th GCC eGovernment & eServices Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    },
    {
        title: "11th Government & Business Leading CEO Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
        title: "6th GCC Smart Government & Cities Portals Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "4th UAE Leading Government Executives Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2573&auto=format&fit=crop"
    },
    {
        title: "4th GCC Municipalities & Smart Cities Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1477281765962-ef9f231b9489?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "3rd Smart Government & City Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "Smart Cities & Smart Governance Conference – Qatar",
        description: "",
        image: "https://images.unsplash.com/photo-1512453979798-5ea904f18431?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "Global Innovation Summit – Jumeirah Beach Hotel",
        description: "",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "3rd Annual Critical Communications Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2671&auto=format&fit=crop"
    },
    {
        title: "21st GCC Government & Smart Services Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
    },
    {
        title: "14th GCC Smart Government Customer Care Excellence Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
    },
    {
        title: "5th GCC Government Future Leaders Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "5th GCC Municipalities & Smart Cities Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1444723121867-227e9cb65180?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "3rd M2M Middle East Forum",
        description: "",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop"
    },
    {
        title: "15th GCC Smart Government Customer Care Excellence Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "IQPC Bio Materic Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2680&auto=format&fit=crop"
    },
    {
        title: "6th GCC Smart Municipalities Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Nationals Working in Private Sector Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1568992687947-86c47086c71e?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "23rd GCC Smart Cities & Smart Government Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "7th GCC Municipalities & Smart Cities Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Al Ain SME Expo Forum",
        description: "",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "CEO Klub Investment Forum Dubai",
        description: "",
        image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "20th GCC Green HR Management Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
    },
    {
        title: "CIO 200 Awards",
        description: "",
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2595&auto=format&fit=crop"
    },
    {
        title: "Blockchain Investment Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1621504450168-38f647319c43?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "24th GCC Smart Cities & Smart Government Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
    },
    {
        title: "5G MENA Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "18th GCC HR Transformation Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "17th GCC Customer Care Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Global Online Shopping Portals & GCC Retail Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Innovation Conference – Federal Authority of Identity & Citizenship",
        description: "",
        image: "https://images.unsplash.com/photo-1531297461136-82lw9z1p7q3?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "8th Smart City Expo",
        description: "",
        image: "https://images.unsplash.com/photo-1477281765962-ef9f231b9489?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "26th GCC Smart Government & Smart City Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
    },
    {
        title: "25th GCC Smart Government & Smart Cities Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "17th GCC Human Resources Conference",
        description: "",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1475721027767-p05a6db14ba0?q=80&w=2669&auto=format&fit=crop" 
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