const Footer = () => {
  return (
    <footer className="w-full bg-[#222] mt-10">
      <div className="max-w-4xl mx-auto px-[30px] py-12">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">
          {/* Left: Contact */}
          <div className="flex-1">
            <p className="text-sm tracking-wide uppercase text-gray-300 font-semibold mb-3">Get in touch</p>
            <a href="mailto:romwtb@gmail.com" className="text-gray-500 text-xl font-light hover:text-gray-300 transition-colors">
              romwtb@gmail.com
            </a>
            <div className="flex gap-3 mt-5">
              <a
                href="https://upwork.com/freelancers/~016b923b0158ef81ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#333] flex items-center justify-center text-gray-400 hover:bg-[#444] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546v-7.112H0v7.112c0 2.915 2.371 5.302 5.282 5.302 2.913 0 5.283-2.387 5.283-5.302v-1.192c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </a>
              <a
                href="https://github.com/roman-rr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#333] flex items-center justify-center text-gray-400 hover:bg-[#444] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://researchgate.net/profile/Roman-Antonov-3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#333] flex items-center justify-center text-gray-400 hover:bg-[#444] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Payment */}
          <div className="flex-1">
            <p className="text-sm tracking-wide uppercase text-gray-300 font-semibold mb-3">Payment</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              For long-term collaboration I'm able to receive payments and track working time with modern software such as upwork.com and hubstaff.com. Fixed price deals can be covered by PayPal transfers or SWIFT transfer services.
            </p>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#333] pt-6">
          <p className="text-center text-xs" style={{
            fontWeight: 500,
            color: 'transparent',
            backgroundImage: 'linear-gradient(0deg, #696969 6.65%, #fff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}>
            &copy; {new Date().getFullYear()} Roman Antonoff &middot; AI Developer & Solutions Architect
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
