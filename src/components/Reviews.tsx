import { ExternalLink } from 'lucide-react'

const reviews = [
  {
    rating: 5,
    text: "Roman did an amazing job for us, he implemented multiple systems for us and we are more than happy with the results.",
    author: {
      name: "Thomas K.",
      title: "AI Chatbot Developer · $21,795 · 726 hrs",
      initials: "TK"
    },
    tags: ["Committed to Quality"]
  },
  {
    rating: 5,
    text: "I've worked with Roman for several years, and he's consistently reliable and skilled in his work. He communicates clearly and adapts well to feedback. His attention to detail and commitment to delivering quality work have been a great help on my projects. I would recommend Roman to others looking for a dependable professional.",
    author: {
      name: "David R.",
      title: "Long-term Client · $261,184 · 8,847 hrs",
      initials: "DR"
    },
    tags: ["Reliable", "Detail Oriented", "Professional"]
  },
  {
    rating: 5,
    text: "Thanks for being a part of our build team, Roman! Roman is highly communicative, always keeping us up to date with his progress. He works hard and was a good contributor to our team.",
    author: {
      name: "Alex M.",
      title: "Laravel Ecommerce SaaS · $21,461 · 671 hrs",
      initials: "AM"
    },
    tags: ["Clear Communicator"]
  },
  {
    rating: 5,
    text: "Roman is very, very fast and thorough. He does exactly what he promises and I very much recommend him.",
    author: {
      name: "James P.",
      title: "Angular SaaS · Fixed price",
      initials: "JP"
    },
    tags: ["Reliable", "Accountable for Outcomes"]
  },
  {
    rating: 5,
    text: "Very capable and delivers work to a very high standard — will be back with other projects in the future!",
    author: {
      name: "Sarah L.",
      title: "Education Platform · $333",
      initials: "SL"
    },
    tags: ["Committed to Quality"]
  },
  {
    rating: 5,
    text: "Roman is a skilled programmer and wrote excellent JavaScript for us. He also helped shape our styling standards.",
    author: {
      name: "Chris W.",
      title: "JavaScript Code Review · $926",
      initials: "CW"
    },
    tags: ["Committed to Quality"]
  },
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
                <p className="text-gray-700 text-sm mb-3 italic leading-relaxed">
                  "{review.text}"
                </p>
                {review.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {review.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 font-semibold border border-gray-200">
                    {review.author.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#333]">{review.author.name}</p>
                    <p className="text-xs text-gray-500">{review.author.title}</p>
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
