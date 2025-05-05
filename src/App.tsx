import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { useEffect } from 'react'

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
              <p className="text-gray-600">AI Developer & Solutions Architect</p>
              <p className="text-gray-600">B.Sc. Science of Digital Business</p>
              <p className="text-gray-600">romwtb@gmail.com</p>
            </div>
          </div>
          
          {/* Action Buttons - Centered */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="#" 
                onClick={openCalendly}
                className="px-4 py-2 bg-[#222] text-white text-sm font-medium rounded hover:bg-[#333] transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a 30-minute strategy call
              </a>
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
            
            {/* Quote */}
            <p className="text-center text-gray-700 max-w-2xl">
              20+ years full-stack expertise, $300k earned on Upwork in Laravel, LangChain, Python & OpenAI API. Transforming businesses with cutting-edge AI solutions.
            </p>
          </div>
        </div>

        {/* Technologies Section - Full Width */}
        <div className="w-full bg-[#222] mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex items-center justify-between px-[30px] py-5 border-b border-[#303030]">
                <div className="flex items-center gap-4">
                  <div className="text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" width="38" height="38">
                      <g fill="currentColor">
                        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.5 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2-46.9-84-46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                        <circle cx="420.9" cy="296.5" r="45.7"/>
                        <path d="M520.5 78.1z"/>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-white">React</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-xs text-gray-300">Release: v19.1.0</span>
                    </div>
                  </div>
                </div>
                <a href="#" className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
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

          {/* Payment Section */}
          <div className="py-8">
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
            <div className="text-white text-lg font-medium">Connect with me:</div>
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