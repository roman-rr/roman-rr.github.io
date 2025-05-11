import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { useEffect } from 'react'
import LaurelBadge from './components/LaurelBadge'
import { Badge } from './components/ui/badge'
import { ExternalLink, FileText, Pin } from 'lucide-react'

function App() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Clean up
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
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <div className="flex-grow">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-[30px] py-6">
          <div className="flex flex-row items-start gap-6 mb-8">
            <Avatar className="w-[100px] h-[100px] rounded-full">
              <AvatarImage src="/avatar.png" alt="Roman Antonoff" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            
            <div>

              <h1 className="text-xl font-semibold text-[#333] mb-1">Roman Antonoff</h1>
              <Badge variant="subtle" className="mb-2">AI Developer & Solutions Architect</Badge>
              <p className="text-gray-600">B.Sc. Science of Digital Business</p>
              <p className="text-gray-600 text-sm mt-1">Creator of <a href="https://panejs.com/" target="_blank" rel="noopener noreferrer" className="font-semibold ">Panes <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a> and <a href="https://github.com/roman-rr/llm-toolchain" target="_blank" rel="noopener noreferrer" className="font-semibold font-sm">LLM-toolchain <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a></p>
            </div>
          </div>
          
          {/* Action Buttons - Centered */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="#" 
                onClick={openCalendly}
                className="h-[40px] ps-4 w-[320px] bg-[#222] text-white text-sm font-medium rounded hover:bg-[#333] transition-colors flex justify-start relative"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a 30-minute strategy call
                </div>
                <div className="absolute right-[8px] top-[5px] bg-white/20 w-[30px] h-[30px] rounded-[4px] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Quote */}
            <p className="text-center text-gray-700 max-w-2xl">
              20+ years full-stack expertise, $300k earned on Upwork in Laravel, TypeScriprt, LangChain, Python & OpenAI API. Currently focusing on Agentic AI, Digital Workers and LLM development.
            </p>
          </div>
        </div>

        {/* Achievements Section - Full Width */}
        <div className="w-full bg-[#222] mb-8">
          <div className="max-w-4xl mx-auto">
            {/* Multiple Badges in Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-[#333] border-x border-[#333]">
              <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
                <LaurelBadge 
                  primaryText="20+ years" 
                  secondaryText="Full-stack expertise" 
                  // icon={Award} 
                />
              </div>
              <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
                <LaurelBadge 
                  primaryText="$300k+" 
                  secondaryText="Upwork earned" 
                  // icon={DollarSign} 
                />
              </div>
              <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
                <LaurelBadge 
                  primaryText="1k+ starred" 
                  secondaryText="on GitHub" 
                  // icon={Star} 
                />
              </div>
              <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
                <LaurelBadge 
                  primaryText="100+ projects" 
                  secondaryText="Completed" 
                  // icon={CheckCircle} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections with borders between them */}
        <div className="max-w-4xl mx-auto px-[30px]">
          {/* AI / LLM Development Section */}
          <div className="mb-0 pb-8 border-b border-[#e0e0e0]">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#333]">
              AI / LLM Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[#333]">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>LangChain, LangGraph, LangSmith</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>OpenAI, AzureAI, Meta Llama</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>GPT, Qwen, Mistral, DeepSeek, Claude, Gemini, Groq, Gwen</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>RAG: Pinecone, FAISS, Chroma, Weaviate</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Agents: ReAct, Human-in-the-Loop, Reflection</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Fine-Tuning, Embeddings, HuggingFace, Weights & Biases</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>LangSmith: evals, streaming, feedback, memory</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Python, FastAPI, Streamlit</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Docker, Kubernetes, n8n Automation, LangSmith Cloud</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Jupyter Notebook, Google Colab GPU Tesla4</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Google Agent Development Kit</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Data Classification, Clastering, Summarization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Chatbot, Telegram API, WhatsApp API, Instagram API</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Prompt-to-App: Lovable.dev, Replit, Bolt, Firebase</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>AI-driven sales automation / Digital Workers</span>
              </div>
            </div>
          </div>

          {/* Back-end & Cloud Architecture Section */}
          <div className="py-8 border-b border-[#e0e0e0]">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#333]">
              Back-end & Cloud Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[#333]">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Laravel Framework, Django Framework</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>RESTful API, OpenAPI Schema</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>PostgreSQL, MongoDB, GraphQL, MySQL, Redis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>OpenAI API, GPT Integration, Structured data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>LangChain, RAG, Fine-tuning</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Microsoft Azure, Amazon AWS, DigitalOcean</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Docker, Kubernetes, Helm</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>GH Actions / CircleCI / Vercel</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Payment Processing: Stripe, PayPal</span>
              </div>
            </div>
          </div>

          {/* Front-end development Section */}
          <div className="py-8 border-b border-[#e0e0e0]">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#333]">
              Front-end development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[#333]">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Angular / React / Vue / RxJS</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>AngularJS / ReactJS / VueJS</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Livewire + Alpine.js</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>JavaScript, TypeScript, ECMA 2024+</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Webpack / Rollup / Stencil</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Pixel-perfect markup / Figma / Sketch</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>HTML, CSS, SCSS, SASS</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Server-Side rendering (SSR)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-semibold">✓</span>
                <span>Capacitor / Cordova / Electron / Ionic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos section - Full Width */}
        <div className="w-full bg-[#222] mb-8 overflow-hidden">
          <div className="py-6">
            <div className="relative flex">
              {/* First set of logos */}
              <div className="flex animate-slide-left">
                <img src="/logos/hugging-face.avif" alt="HuggingFace" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
                <img src="/logos/langchain.avif" alt="LangChain" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
                <img src="/logos/docker.avif" alt="Docker" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
                <img src="/logos/nasdaq.avif" alt="Nasdaq" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
              </div>
              {/* Duplicate set of logos for seamless scrolling */}
              <div className="flex animate-slide-left" aria-hidden="true">
                <img src="/logos/hugging-face.avif" alt="HuggingFace" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
                <img src="/logos/langchain.avif" alt="LangChain" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
                <img src="/logos/docker.avif" alt="Docker" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
                <img src="/logos/nasdaq.avif" alt="Nasdaq" className="w-[140px] h-[64px] flex-shrink-0 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity pr-4 mr-[5px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-[30px]">

          {/* Action Buttons - Centered */}
          <div className="flex flex-col items-center my-10">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="https://upwork.com/freelancers/~016b923b0158ef81ae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent text-[#555] border border-[#555] text-sm font-medium rounded hover:bg-[#555] hover:text-white transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546v-7.112H0v7.112c0 2.915 2.371 5.302 5.282 5.302 2.913 0 5.283-2.387 5.283-5.302v-1.192c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                View my Upwork profile
              </a>
            </div>
          </div>

          {/* Open-Source Commitments Section */}
          <div className="py-8 border-b border-[#e0e0e0]">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#333]">
              Open-Source Commitments
            </h2>
            
            {/* GitHub Stats */}
            <div className="mb-6">
              <img 
                src="https://ghchart.rshah.org/roman-rr" 
                alt="GitHub Contributions Chart"
                className="w-full rounded-lg border border-[#e0e0e0]"
              />
              <p className="text-center text-sm text-gray-600 mt-2">My GitHub contribution activity</p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Panes Project */}
              <a 
                href="https://github.com/tech-systems/panes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg transition-all hover:bg-[#f8f8f8] relative"
              >
                <Pin className="absolute top-3 right-3 w-4 h-4 text-gray-400" />
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-[#333]">Panes</h3>
                  <span className="text-amber-500 text-xs font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                    </svg>
                    <span className="text-gray-700">700+</span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Create dynamic modals, cards, panes for your applications in few steps. One instance – Thousands solutions.</p>
              </a>

              {/* LLM-toolchain Project */}
              <a 
                href="https://github.com/roman-rr/LLM-toolchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg transition-all hover:bg-[#f8f8f8] relative"
              >
                <Pin className="absolute top-3 right-3 w-4 h-4 text-gray-400" />
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-[#333]">LLM-toolchain</h3>
                </div>
                <p className="text-gray-600 text-sm">Toolchain for LLMs built on LangChain, providing a flexible framework for document processing and RAG.</p>
              </a>

              {/* Focused Project */}
              <a 
                href="https://github.com/roman-rr/focused" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] rounded-lg transition-all hover:bg-[#f8f8f8] relative"
              >
                <Pin className="absolute top-3 right-3 w-4 h-4 text-gray-400" />
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-[#333]">Focused</h3>
                </div>
                <p className="text-gray-600 text-sm">Open-source project focused on productivity and task management.</p>
              </a>
            </div>

            {/* GitHub Profile Button */}
            <div className="flex justify-center">
              <a 
                href="https://github.com/roman-rr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent text-[#555] border border-[#555] text-sm font-medium rounded hover:bg-[#555] hover:text-white transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View my GitHub profile
              </a>
            </div>
          </div>

          {/* Scientific Researches Section */}
          <div className="py-8 border-b border-[#e0e0e0]">
            <h2 className="text-xl font-bold mb-4 flex items-center text-[#333]">
              Scientific Researches
            </h2>
            <div className="space-y-6">
              {/* First Research Paper (AI Tools) */}
              <div className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] transition-all hover:shadow-md">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-[#222] text-white p-3 rounded-md flex items-center justify-center">
                    <FileText stroke="#ccc" fill="none" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800">December 2023</span>
                        <span className="ml-2 text-red-500">🔥</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-[#333] mb-2">The Impact of AI Tools on Content Marketing: A Comparative Analysis of Performance Across Ad Systems and Formats</h3>
                    <p className="text-gray-600 text-sm mb-3">This research examines the integration of advanced AI technologies, including GPT-4 Alpha, DALL-E 3, MidJourney, and Stable Diffusion, within content marketing strategies.</p>
                    <a 
                      href="https://www.researchgate.net/publication/376169888_The_Impact_of_AI_Tools_on_Content_Marketing_A_Comparative_Analysis_of_Performance_Across_Ad_Systems_and_Formats" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      View on ResearchGate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Second Research Paper (Cryptocurrency) */}
              <div className="bg-[#f5f5f5] p-5 border border-[#e0e0e0] transition-all hover:shadow-md">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-[#222] text-white p-3 rounded-md flex items-center justify-center">
                    <FileText stroke="#ccc" fill="none" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800">January 2023</span>
                    </div>
                    <h3 className="font-semibold text-[#333] mb-2">RESEARCH OF KEY FACTORS THAT INFLUENCE THE ADOPTION AND USAGE OF CRYPTOCURRENCY</h3>
                    <p className="text-gray-600 text-sm mb-3">The main objective of the research is to determine the most significant negative and positive drivers for cryptocurrency mass usage and adoption.</p>
                    <a 
                      href="https://www.researchgate.net/publication/373994991_RESEARCH_OF_KEY_FACTORS_THAT_INFLUENCE_THE_ADOPTION_AND_USAGE_OF_CRYPTOCURRENCY" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      View on ResearchGate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="pt-0 pb-8 border-b border-[#e0e0e0]">
            <p className="text-gray-700">
              Payment accesabilities: For long-term colloboration i able to recieve payments and 
              tacking my working time with modern software such as upwork.com and hubstaff.com Fixed 
              price deals can be covered by paypal transfers or swift transfer services.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Links - Dark style matching tech section */}
      <footer className="w-full bg-[#222] mt-10">
        <div className="max-w-4xl mx-auto px-[30px] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white text-lg font-medium">Connect with me: <p className="text-gray-600">romwtb@gmail.com</p></div>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://upwork.com/freelancers/~016b923b0158ef81ae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546v-7.112H0v7.112c0 2.915 2.371 5.302 5.282 5.302 2.913 0 5.283-2.387 5.283-5.302v-1.192c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                <span>Upwork</span>
              </a>
              <a 
                href="https://github.com/roman-rr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a 
                href="https://researchgate.net/profile/Roman-Antonov-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.586 0c-2.183 0-4.226.698-5.875 1.865-1.548 1.115-2.699 2.664-2.699 4.382v.003l-.026 7.291c0 .349.28.63.629.63.349 0 .63-.28.63-.63l.019-7.293c0-1.034.694-2.31 2.007-3.262 1.442-1.046 3.267-1.684 5.317-1.684 4.383 0 7.904 3.54 7.913 7.854.004 4.19-3.458 7.87-7.698 7.87-.338 0-.659-.023-.979-.07v-2.845c.646.147 1.325.225 2.025.228 2.713 0 4.929-1.09 4.929-2.808 0-1.718-2.217-2.808-4.933-2.808s-4.931 1.09-4.931 2.808c0 2.483.031 6.21 0 8.729.002.598.454 1.033.909 1.234.51.225 1.075.16 1.533-.173.639.405 1.17.519 1.783.519 4.948 0 8.966-4.04 8.961-9 .004-4.957-4.033-8.997-8.979-8.997zm0 11.873c2.046 0 3.672.6 3.672 1.545 0 .945-1.625 1.547-3.672 1.547-2.047 0-3.675-.6-3.675-1.547 0-.945 1.627-1.545 3.675-1.545zm-7.824 9.626c.364 0 .658.295.658.659s-.295.657-.658.657h-.008c-.363 0-.658-.294-.658-.657s.295-.659.658-.659h.008zm-8.567-3.198h2.956c.35 0 .631.28.631.629 0 .349-.28.63-.631.63h-2.956c-1.875 0-3.419-1.533-3.419-3.427 0-1.898 1.531-3.433 3.417-3.433.917 0 1.778.369 2.435 1.035.271.225.312.629.087.9-.226.272-.629.311-.9.086-.436-.46-1.05-.739-1.622-.739-1.144 0-2.158.975-2.158 2.151 0 1.175 1.017 2.168 2.16 2.168zm2.308-6.842c0-.345.28-.625.628-.626l4.341-.008c.349-.005.63.28.63.629 0 .35-.282.63-.631.63l-4.341.008c-.348 0-.627-.279-.627-.633z"/>
                </svg>
                <span>ResearchGate</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 