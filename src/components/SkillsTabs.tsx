import { Tabs } from './ui/tabs'

const SkillsTabs = () => {
  return (
    <div className="px-[30px] mt-12 mb-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-[#333]">
          Core of expertise
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs
          defaultTab="ai-llm-development"
          tabs={[
            {
              id: "ai-llm-development",
              label: "AI / Agents / LLM Development",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>LangChain, LangGraph, LangSmith</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>OpenAI, AzureAI, Meta Llama</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>GPT, Qwen, Mistral, DeepSeek, Claude, Gemini, Groq</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>RAG: Pinecone, FAISS, Chroma, Weaviate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Agents: DeepAgents, ReAct, Human-in-the-Loop, Reflection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Fine-Tuning, Embeddings, HuggingFace, Weights & Biases</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>LangSmith: evals, streaming, feedback, memory</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Python, FastAPI, Streamlit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Docker, Kubernetes, n8n Automation, LangSmith Cloud</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Jupyter Notebook, Google Colab GPU Tesla4</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Google Agent Development Kit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Data Classification, Clustering, Summarization, Structured Outputs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Chatbot, Telegram API, WhatsApp API, Instagram API</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Prompt-to-App: Lovable.dev, Replit, Bolt, Firebase</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>AI-driven sales automation / Digital Workers</span>
                  </div>
                </div>
              )
            },
            {
              id: "automation-workflows",
              label: "Automation & Workflows",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>HubSpot CRM, Marketing Hub, Sales Hub</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Monday.com, Asana, Notion API</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Zapier, Make.com (Integromat), n8n</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Salesforce, Pipedrive, ActiveCampaign</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Slack, Microsoft Teams, Discord API</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Airtable, Google Sheets, Excel automation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Email automation: Mailchimp, SendGrid</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Workflow orchestration, Process automation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Data synchronization, ETL pipelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Business process digitization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>API integrations, Webhook management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>RPA (Robotic Process Automation)</span>
                  </div>
                </div>
              )
            },
            {
              id: "backend-cloud",
              label: "Back-end & Cloud Architecture",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Laravel Framework, Django Framework</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>RESTful API, OpenAPI Schema</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>PostgreSQL, MongoDB, GraphQL, MySQL, Redis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>OpenAI API, GPT Integration, Structured data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>LangChain, RAG, Fine-tuning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Microsoft Azure, Amazon AWS, DigitalOcean</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Docker, Kubernetes, Helm, Microservices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>GH Actions / CircleCI / Vercel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Payment Processing: Stripe, PayPal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>RedPanda Kafka, Event-driven Streaming, Avro</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>AWS S3, Athena, Parquet, Data Pipelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>GCP Pub/Sub, Gmail API, HubSpot API</span>
                  </div>
                </div>
              )
            },
            {
              id: "frontend-development",
              label: "Front-end Development",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Angular / React / Vue / RxJS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>AngularJS / ReactJS / VueJS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Livewire + Alpine.js</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>JavaScript, TypeScript, ECMA 2024+</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Webpack / Rollup / Stencil</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Pixel-perfect markup / Figma / Sketch</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>HTML, CSS, SCSS, SASS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Server-Side rendering (SSR)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[5px] flex-shrink-0"></span>
                    <span>Capacitor / Cordova / Electron / Ionic</span>
                  </div>
                </div>
              )
            }
          ]}
        />
      </div>
    </div>
  )
}

export default SkillsTabs
