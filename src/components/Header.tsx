import { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { ExternalLink } from 'lucide-react'

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/romwtb/30min'
      });
      return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-[30px] py-6 bg-[#f9f9f9]">
      <div className="flex flex-row items-start gap-6 mb-8">
        <Avatar className="w-[100px] h-[100px] rounded-full">
          <AvatarImage src="/avatar-4.png" alt="Roman Antonoff" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-xl font-semibold text-[#333] mb-1">Roman Antonoff</h1>
          <Badge variant="subtle" className="mb-2">Microsoft certified</Badge>
          <p className="text-gray-600">B.Sc. Science of Digital Business</p>
          <p className="text-gray-600 text-sm mt-1">
            Creator of <a href="https://panejs.com/" target="_blank" rel="noopener noreferrer" className="font-semibold ">Panes <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a> and <a href="https://github.com/roman-rr/llm-toolchain" target="_blank" rel="noopener noreferrer" className="font-semibold font-sm">LLMchain <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a>
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="flex flex-col items-center mb-10 mt-10">
        <div className="flex flex-col gap-3 mb-2">
          <h1 className="text-4xl font-bold text-center text-[#333] mb-2">
            AI Developer & Solutions Architect
          </h1>
          <h2 className="text-xl text-center text-gray-600 max-w-2xl">
            20+ years full-stack expertise, $400k earned on Upwork in LangChain, LangGraph, RAG, Python, OpenAI API & TypeScript.
          </h2>
          <h3 className="text-sm text-center text-gray-600 max-w-2xl">
            Building multi-agent systems, real-time data pipelines, and AI-driven automation with DeepAgents, Kafka & FastAPI.
          </h3>
        </div>
      </div>

      {/* Action Buttons - Centered */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            onClick={openCalendly}
            className="h-[44px] ps-4 w-[320px] bg-[#222] text-white text-sm font-medium rounded hover:bg-[#333] transition-colors flex justify-start relative"
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a 30-minute strategy call
            </div>
            <div className="absolute right-[8px] top-[6px] bg-white/20 w-[32px] h-[32px] rounded-[4px] flex items-center justify-center shadow-[inset_1px_1px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
        <p className="text-gray-600 text-xs text-center mt-3">
          Or view my <a href="https://upwork.com/freelancers/~016b923b0158ef81ae" target="_blank" rel="noopener noreferrer" className="font-semibold ">Upwork profile <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a>
        </p>
      </div>
    </div>
  )
}

export default Header
