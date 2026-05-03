const Footer = () => {
  return (
    <footer className="w-full bg-[#222] mt-10">
      <div className="max-w-4xl mx-auto px-[30px] py-12">
        {/* Copyright */}
        <div className="">
          <p className="text-center text-xs" style={{
            fontWeight: 500,
            color: 'transparent',
            backgroundImage: 'linear-gradient(0deg, #696969 6.65%, #fff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}>
            &copy; {new Date().getFullYear()} Roman Antonov &middot; AI Developer & Solutions Architect
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
