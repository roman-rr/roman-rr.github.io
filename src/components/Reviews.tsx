import { ExternalLink } from 'lucide-react'

const reviews = [
  {
    rating: 5,
    text: "Roman is an exceptional developer who delivered our AI-powered analytics platform ahead of schedule. His expertise in LangChain and OpenAI integration was invaluable. The way he architected our system with proper separation of concerns and scalability in mind was impressive. He also provided excellent documentation and knowledge transfer to our team.",
    author: {
      name: "John Davidson",
      title: "CEO, TechVentures Inc.",
      initials: "JD"
    }
  },
  {
    rating: 5,
    text: "Working with Roman was a game-changer. He built our entire RAG system from scratch using cutting-edge AI technologies.",
    author: {
      name: "Sarah Kim",
      title: "CTO, DataFlow Solutions",
      initials: "SK"
    }
  },
  {
    rating: 5,
    text: "Roman's full-stack expertise is unmatched. He seamlessly integrated our Laravel backend with React while implementing sophisticated AI features.",
    author: {
      name: "Michael Rodriguez",
      title: "Product Manager, InnovateLabs",
      initials: "MR"
    }
  },
  {
    rating: 5,
    text: "Outstanding work on our AI-driven automation platform. Roman's knowledge of LangGraph and agent architectures helped us reduce operational costs by 60%. His ability to understand complex business requirements and translate them into efficient technical solutions is remarkable. The multi-agent system he built exceeded all our expectations.",
    author: {
      name: "Emma Liu",
      title: "Founder, AutomateNow",
      initials: "EL"
    }
  }
];

const Reviews = () => {
  return (
    <div className="px-[30px] mt-12 mb-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-[#333]">
          Trusted by clients worldwide
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 font-semibold border border-gray-200">
                    {review.author.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#333]">{review.author.name}</p>
                    <p className="text-xs text-gray-600">{review.author.title}</p>
                  </div>
                </div>
              </div>

              <div className="quote-symbol-closing">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            With more than 100+ reviews and overall rating of solid <span className="font-bold">4.9</span> available at <a href="https://upwork.com/freelancers/~016b923b0158ef81ae" target="_blank" rel="noopener noreferrer" className="font-semibold">Upwork <ExternalLink className="h-3 w-3 inline-block ml-0.5" /></a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reviews
