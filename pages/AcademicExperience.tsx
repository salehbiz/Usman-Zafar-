import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const ACADEMIC_ROLES = [
  {
    institution: "Higher Colleges of Technology",
    period: "Jan 2020 – Present",
    role: "Advisory Member",
    description: "Aligning education with industry needs and supporting graduate employability initiatives across the UAE."
  },
  {
    institution: "Ajman University",
    period: "Jun 2015 – Present",
    role: "Advisory Board Member",
    description: "Strengthening program quality, industry alignment, and national education priorities to enhance graduate outcomes."
  },
  {
    institution: "Al Ain University of Science and Technology",
    period: "Feb 2003 – Nov 2006",
    role: "Founding Member & External Board Member",
    description: "Led program development, accreditation strategy, and research direction during institutional formation."
  },
  {
    institution: "Manipal University",
    period: "Dec 2007 – Aug 2008",
    role: "Visiting Professor",
    description: "Guided over 1,600 students in Electronic Commerce, Enterprise Project Management, and Internet Information Systems."
  },
  {
    institution: "SZABIST",
    period: "Oct 2003 – Jun 2005",
    role: "Visiting Assistant Professor",
    description: "Taught postgraduate courses in ERP, Electronic Commerce (Managerial Perspective), and Software Development Methodologies (UML)."
  },
  {
    institution: "Preston University",
    period: "Sep 2002 – Jun 2005",
    role: "Visiting Assistant Professor",
    description: "Delivered postgraduate instruction in Human-Computer Interaction and Data Warehousing."
  },
  {
    institution: "University of Greenwich",
    period: "1999 – 2005",
    role: "Visiting Assistant Professor",
    description: "Taught undergraduate courses including Software Development, Mobile Computing, and E-Commerce."
  },
  {
    institution: "Ittihad University",
    period: "Jan 2004 – Jan 2005",
    role: "Visiting Assistant Professor",
    description: "Instructed undergraduate students in Information Management Systems and Advanced IS (Knowledge Management)."
  }
];

const AcademicExperience: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-24 font-sans text-[#124442]">
      
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-8">
          <button 
             onClick={() => navigate('/about')}
             className="flex items-center gap-2 text-[#124442]/60 hover:text-[#124442] font-medium transition-colors"
          >
             <ArrowLeft size={18} /> Back to About
          </button>
       </div>

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#124442] tracking-tight mb-8 leading-[1.05]">
            Academic Experience
        </h1>
        <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#124442]/5 shadow-sm">
            <p className="text-lg md:text-xl text-[#124442]/80 leading-relaxed font-light">
                Dr. Usman Zafar is a dedicated educator and academic advisor with PhDs in Information Technology and International Trade and Business. He has served in senior academic, advisory, and teaching roles across leading universities, shaping curriculum, accreditation frameworks, and industry-aligned programs that enhance graduate employability and innovation. His work bridges academia and industry, supporting global education standards and institutional growth.
            </p>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-[1000px] mx-auto pb-24 space-y-6">
        {ACADEMIC_ROLES.map((role, index) => {
            const isDark = index % 2 !== 0;
            return (
                <div 
                    key={index}
                    className={`
                        rounded-[24px] p-8 transition-all duration-300 border
                        ${isDark 
                            ? 'bg-[#124442] text-white border-[#C8F16B]/10 shadow-lg' 
                            : 'bg-white text-[#124442] border-[#124442]/10 shadow-sm'
                        }
                    `}
                >
                    <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                        <div className="flex-grow">
                            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#124442]'}`}>
                                {role.institution}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-[#C8F16B]' : 'bg-[#124442]/5 text-[#124442]'}`}>
                                    {role.role}
                                </span>
                                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-[#124442]/60'}`}>
                                    {role.period}
                                </span>
                            </div>
                            <p className={`text-lg leading-relaxed font-light ${isDark ? 'text-white/80' : 'text-[#124442]/80'}`}>
                                {role.description}
                            </p>
                        </div>
                        <div className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center shrink-0 ${isDark ? 'bg-white/10 text-[#C8F16B]' : 'bg-[#124442]/5 text-[#124442]'}`}>
                            <GraduationCap size={24} />
                        </div>
                    </div>
                </div>
            );
        })}
      </div>

      <FinalCTA />
    </div>
  );
};

export default AcademicExperience;