const Video = () => {
  return (
    <div className="px-[30px] mt-4 mb-14">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg overflow-hidden border border-[#e0e0e0] bg-[#000]">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/QvkR5he2sds?rel=0&modestbranding=1"
              title="Roman Antonov — AI Developer & Solutions Architect"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
