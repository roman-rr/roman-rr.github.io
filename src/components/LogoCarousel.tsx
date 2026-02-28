const DEBUG_SHOW_LOGOS_AS_GRID = false;

const logos = [
  // Frontend & Development Tools
  "react.avif",
  "vuejs.avif",
  "angular.avif",
  "nextjs.avif",
  "typescript.avif",
  "livewire.avif",

  // AI & Machine Learning
  "openai.avif",
  "claude.avif",
  "gemini.avif",
  "qwen.avif",
  "gradio.avif",
  "mistral.avif",
  "deepseek.avif",
  "devin.avif",
  "codex.avif",
  "claudecode.avif",
  "neo4j.avif",
  "LLaMA-Meta.avif",
  "langchain.avif",
  "lovable.avif",
  "langsmith.avif",
  "langgraph.avif",
  "hugging-face.avif",
  "pinecone.avif",
  "azureai.avif",
  "vertex.avif",
  "agentkit.avif",
  "jupyter.avif",
  "googlecolab.avif",
  "streamlit.avif",
  "replit.avif",
  "n8n.avif",
  "copilotkit.avif",
  "crewai.avif",
  "letta.avif",
  "llamaindex.avif",
  "mastra.avif",
  "openrouter.avif",

  // Backend & Cloud Infrastructure
  "python.avif",
  "django.avif",
  "fastapi.avif",
  "laravel.avif",
  "postgresql.avif",
  "redis.avif",
  "docker.avif",
  "kubernetes.avif",
  "azure.avif",
  "aws.avif",
  "digitalocean.avif",
  "vercel.avif",
  "stripe.avif",
  "nodejs.avif",
  "duckdb.avif"
];

const LogoCarousel = () => {
  return (
    <div className="w-full bg-[#222] mb-8 overflow-hidden">
      <div className="py-6">
        {/* Wrapped Layout - debug only */}
        <div className={DEBUG_SHOW_LOGOS_AS_GRID ? "" : "hidden"}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {logos.map((logo, index) => (
              <img
                key={logo}
                src={`/logos/${logo}`}
                alt={logo.replace('.avif', '')}
                draggable="false"
                className={`w-[80px] h-[42px] sm:w-[100px] sm:h-[50px] md:w-[110px] md:h-[55px] object-contain filter grayscale opacity-80 md:opacity-70 hover:opacity-100 transition-opacity ${index === logos.length - 1 ? 'hidden sm:block' : ''
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Layout */}
        <div className={DEBUG_SHOW_LOGOS_AS_GRID ? "hidden" : ""}>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-slide-left will-change-transform" style={{ minWidth: 'max-content' }}>
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="flex-shrink-0"
                  style={{ width: '160px' }}
                >
                  <img
                    src={`/logos/${logo}`}
                    alt={logo.replace('.avif', '')}
                    draggable="false"
                    className="w-[140px] h-[64px] object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
                    style={{ margin: '0 10px' }}
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-slide-left will-change-transform" aria-hidden="true" style={{ minWidth: 'max-content' }}>
              {logos.map((logo) => (
                <div
                  key={`dup-${logo}`}
                  className="flex-shrink-0"
                  style={{ width: '160px' }}
                >
                  <img
                    src={`/logos/${logo}`}
                    alt={logo.replace('.avif', '')}
                    draggable="false"
                    className="w-[140px] h-[64px] object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
                    style={{ margin: '0 10px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
