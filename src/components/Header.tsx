import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { ExternalLink } from 'lucide-react'

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto px-[30px] py-8 bg-[#f9f9f9]">
      {/* Two-column: Left content + Right video (desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left column: Avatar + Headlines + CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Avatar row */}
          <div className="flex flex-row items-center lg:items-start gap-4 mb-6">
            <Avatar className="w-[72px] h-[72px] rounded-full flex-shrink-0">
              <AvatarImage src="/avatar-4.png" alt="Roman Antonov" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h1 className="text-lg font-semibold text-[#333] mb-0.5">Roman Antonov</h1>
              <Badge variant="subtle" className="mb-1">Microsoft certified</Badge>
              <p className="text-gray-600 text-sm">B.Sc. Science of Digital Business</p>
              <p className="text-gray-600 text-xs mt-0.5">
                Creator of <a href="https://panejs.com/" target="_blank" rel="noopener noreferrer" className="font-semibold">Panes <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a> and <a href="https://github.com/roman-rr/llm-toolchain" target="_blank" rel="noopener noreferrer" className="font-semibold">LLMchain <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a>
              </p>
            </div>
          </div>

          {/* Headlines */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333] mb-3 leading-tight">
            AI Developer &<br />Solutions Architect
          </h2>
          <p className="text-lg text-gray-600 mb-2 max-w-lg">
            20+ years full-stack expertise, $400k earned on Upwork in LangChain, LangGraph, RAG, Python, OpenAI API & TypeScript.
          </p>
          <p className="text-sm text-gray-600 mb-6 max-w-lg">
            Building multi-agent systems, real-time data pipelines, and AI-driven automation with LangGraph, Kafka & FastAPI.
          </p>

          {/* CTA */}
          <a
            href="https://upwork.com/freelancers/~016b923b0158ef81ae"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[44px] ps-4 w-[320px] bg-[#222] text-white text-sm font-medium rounded hover:bg-[#333] transition-colors flex justify-start relative"
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Hire me on Upwork
            </div>
            <div className="absolute right-[8px] top-[6px] bg-white/20 w-[32px] h-[32px] rounded-[4px] flex items-center justify-center shadow-[inset_1px_1px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
          <p className="text-gray-600 text-xs mt-3">
            All communication and contracts via Upwork.
          </p>
        </div>

        {/* Right column: Video */}
        <div className="w-full">
          <div className="rounded-lg overflow-hidden border border-[#e0e0e0] bg-[#000] shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/QvkR5he2sds?rel=0&modestbranding=1"
                title="Roman Antonov — AI Developer & Solutions Architect"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4">
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[11px] font-medium">HIPAA</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[11px] font-medium">GDPR</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[11px] font-medium">SOC 2</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-[11px] font-medium">NDA Ready</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <span className="text-[11px] font-medium">Upwork Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
