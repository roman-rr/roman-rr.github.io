import { ExternalLink } from 'lucide-react'

const Cases = () => {
  return (
    <div className="px-[30px] mt-8 mb-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-[#333]">
          Recent Cases
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/cases/pt-agents/pt-agents-architecture.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e0e0e0]"
          >
            <div className="h-[140px] overflow-hidden border-b border-[#e0e0e0] relative">
              <img src="/cases/pt-agents/web-ui-chatbot-1.png" alt="PT Agents UI" className="w-full h-full object-cover object-top" style={{ filter: 'saturate(0.45) contrast(1.1) brightness(0.95)' }} />
              <div className="absolute inset-0 bg-[#222] opacity-25 pointer-events-none" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[#333] text-sm">PT Agents</h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-violet-100 text-violet-800">Agentic AI Chatbot</span>
              </div>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">Multi-agent system built on LangGraph and DeepAgents with real-time analytics, per-agent observability and web UI chatbot.</p>
              <span className="text-xs font-medium text-[#333] flex items-center">
                View case
                <ExternalLink className="h-3 w-3 ml-1" />
              </span>
            </div>
          </a>

          <a
            href="/cases/pt-calls/pt-calls-pipeline-arch.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e0e0e0]"
          >
            <div className="h-[140px] overflow-hidden border-b border-[#e0e0e0] relative">
              <img src="/cases/pt-calls/4com-dashboard-1.png" alt="PT Calls Dashboard" className="w-full h-full object-cover object-top" style={{ filter: 'saturate(0.45) contrast(1.1) brightness(0.95)' }} />
              <div className="absolute inset-0 bg-[#222] opacity-25 pointer-events-none" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[#333] text-sm">PT Calls</h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-sky-100 text-sky-800">Speech-To-Text Pipeline</span>
              </div>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">Call processing pipeline with AWS Athena for big data analytics, n8n automation, Whisper transcription and 4com dashboard integration.</p>
              <span className="text-xs font-medium text-[#333] flex items-center">
                View case
                <ExternalLink className="h-3 w-3 ml-1" />
              </span>
            </div>
          </a>

          <a
            href="/cases/pt-emails/pt-emails-pipeline-arch.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e0e0e0]"
          >
            <div className="h-[140px] overflow-hidden border-b border-[#e0e0e0] relative">
              <img src="/cases/pt-emails/pt-emails-dashboard-1.png" alt="PT Emails Dashboard" className="w-full h-full object-cover object-top" style={{ filter: 'saturate(0.45) contrast(1.1) brightness(0.95)' }} />
              <div className="absolute inset-0 bg-[#222] opacity-25 pointer-events-none" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[#333] text-sm">PT Emails</h3>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Email Pipeline</span>
              </div>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">Real-time email processing based on RedPanda Kafka with agent-driven classification, routing and automated responses.</p>
              <span className="text-xs font-medium text-[#333] flex items-center">
                View case
                <ExternalLink className="h-3 w-3 ml-1" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cases
