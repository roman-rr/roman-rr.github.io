import LaurelBadge from './LaurelBadge'

const Achievements = () => {
  return (
    <div className="w-full bg-[#222] mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-[#333]">
          <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
            <LaurelBadge
              primaryText="20+ years"
              secondaryText="Full-stack expertise"
            />
          </div>
          <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
            <LaurelBadge
              primaryText="$400k+"
              secondaryText="Upwork earned"
            />
          </div>
          <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
            <LaurelBadge
              primaryText="1k+ starred"
              secondaryText="on GitHub"
            />
          </div>
          <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 bg-[#222]">
            <LaurelBadge
              primaryText="100+ projects"
              secondaryText="Completed"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
