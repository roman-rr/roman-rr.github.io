import { ExternalLink } from 'lucide-react'

const ScientificResearch = () => {
  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-6 flex items-center text-[#333]">
        Scientific Research
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://www.researchgate.net/publication/376169888_The_Impact_of_AI_Tools_on_Content_Marketing_A_Comparative_Analysis_of_Performance_Across_Ad_Systems_and_Formats"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[34px] h-[34px] rounded-lg bg-[#fee2e2] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#dc2626" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-200 text-gray-600">December 2023</span>
              <span className="text-red-500 text-xs">🔥</span>
            </div>
          </div>
          <h3 className="font-semibold text-[#333] text-sm mb-2 leading-snug">The Impact of AI Tools on Content Marketing: A Comparative Analysis of Performance Across Ad Systems and Formats</h3>
          <p className="text-gray-600 text-xs mb-4 leading-relaxed">This research examines the integration of advanced AI technologies, including GPT-4 Alpha, DALL-E 3, MidJourney, and Stable Diffusion, within content marketing strategies.</p>
          <span className="text-xs font-medium text-[#333] flex items-center">
            View on ResearchGate
            <ExternalLink className="h-3 w-3 ml-1" />
          </span>
        </a>

        <a
          href="https://www.researchgate.net/publication/373994991_RESEARCH_OF_KEY_FACTORS_THAT_INFLUENCE_THE_ADOPTION_AND_USAGE_OF_CRYPTOCURRENCY"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[34px] h-[34px] rounded-lg bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#2563eb" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-200 text-gray-600">January 2023</span>
          </div>
          <h3 className="font-semibold text-[#333] text-sm mb-2 leading-snug">Research of Key Factors That Influence the Adoption and Usage of Cryptocurrency</h3>
          <p className="text-gray-600 text-xs mb-4 leading-relaxed">The main objective of the research is to determine the most significant negative and positive drivers for cryptocurrency mass usage and adoption.</p>
          <span className="text-xs font-medium text-[#333] flex items-center">
            View on ResearchGate
            <ExternalLink className="h-3 w-3 ml-1" />
          </span>
        </a>
      </div>
    </div>
  )
}

export default ScientificResearch
