import { ExternalLink } from 'lucide-react'

const OpenSource = () => {
  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-6 flex items-center text-[#333]">
        Open-Source Commitment
      </h2>

      {/* GitHub Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2 bg-[#f5f5f5] rounded-lg border border-[#e0e0e0] p-4 flex flex-col justify-center">
          <img
            src="https://ghchart.rshah.org/roman-rr"
            alt="GitHub Contributions Chart"
            className="w-full rounded"
          />
          <p className="text-center text-xs text-gray-500 mt-3">Contribution activity</p>
        </div>
        <div className="bg-[#f5f5f5] rounded-lg border border-[#e0e0e0] p-5 flex flex-col">
          <p className="text-xs text-gray-500 mb-4">Contributing to</p>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/langchain-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#333] hover:text-gray-600 transition-colors">
              <img src="https://github.com/langchain-ai.png" alt="LangChain" className="w-7 h-7 rounded-md" />
              <span className="text-sm font-medium">@langchain-ai</span>
            </a>
            <a href="https://github.com/CopilotKit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#333] hover:text-gray-600 transition-colors">
              <img src="https://github.com/CopilotKit.png" alt="CopilotKit" className="w-7 h-7 rounded-md" />
              <span className="text-sm font-medium">@CopilotKit</span>
            </a>
            <a href="https://github.com/tech-systems" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#333] hover:text-gray-600 transition-colors">
              <img src="https://github.com/tech-systems.png" alt="tech-systems" className="w-7 h-7 rounded-md" />
              <span className="text-sm font-medium">@tech-systems</span>
            </a>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a
          href="https://github.com/tech-systems/panes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[34px] h-[34px] rounded-lg bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#16a34a" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#333] text-sm">Panes</h3>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-amber-500" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                </svg>
                <span className="text-gray-500 text-xs">700+</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">Create dynamic modals, cards, panes for your applications in few steps. One instance — Thousands solutions.</p>
          <span className="text-xs font-medium text-[#333] flex items-center mt-auto pt-3">
            View on GitHub
            <ExternalLink className="h-3 w-3 ml-1" />
          </span>
        </a>

        <a
          href="https://github.com/roman-rr/LLM-toolchain"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[34px] h-[34px] rounded-lg bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#d97706" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#333] text-sm">LLM-toolchain</h3>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">Toolchain for LLMs built on LangChain, providing a flexible framework for document processing and RAG.</p>
          <span className="text-xs font-medium text-[#333] flex items-center mt-auto pt-3">
            View on GitHub
            <ExternalLink className="h-3 w-3 ml-1" />
          </span>
        </a>

        <a
          href="https://github.com/roman-rr/focused"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[34px] h-[34px] rounded-lg bg-[#eef2ff] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#4f46e5" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#333] text-sm">Focused</h3>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">Open-source project focused on productivity and task management.</p>
          <span className="text-xs font-medium text-[#333] flex items-center mt-auto pt-3">
            View on GitHub
            <ExternalLink className="h-3 w-3 ml-1" />
          </span>
        </a>
      </div>

      {/* GitHub Profile Link */}
      <div className="flex justify-center mt-2">
        <a
          href="https://github.com/roman-rr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-500 hover:text-[#333] transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View all repositories on GitHub
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  )
}

export default OpenSource
