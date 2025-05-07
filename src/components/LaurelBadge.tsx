import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LaurelBadgeProps {
  primaryText: string;
  secondaryText: string;
  icon?: LucideIcon;
}

const LaurelBadge: React.FC<LaurelBadgeProps> = ({ primaryText, secondaryText, icon: Icon }) => {
  // Define the gradient ID for the icon
  const iconGradientId = "iconGradient-" + Math.random().toString(36).substr(2, 9);
  const marginLeftRight = '0px';
  
  return (
    <div className="w-full">
      <div className="badge-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="flex-container" style={{ display: 'flex', alignItems: 'center' }}>
          <svg className="svg-left" width="25" height="51" fill="none" viewBox="0 0 25 51" style={{ marginRight: marginLeftRight }}>
            <g opacity=".5">
              <path fill="url(#paint0_linear_badge)" d="M11.519 9.313c2.258-.227 4.458-2.854 4.21-6.346-3.307.47-5.34 4.085-4.21 6.346Z"></path>
              <path fill="url(#paint1_linear_badge)" d="M8.047 13.962c1.214-.956 2.483-4.972-.181-7.787-3.433 2.59-1.189 7.072.181 7.787Z"></path>
              <path fill="url(#paint2_linear_badge)" d="M6.916 20.743c.704-1.377.472-5.937-3.623-6.799-1.76 3.443 2.08 6.723 3.623 6.8Z"></path>
              <path fill="url(#paint3_linear_badge)" d="M7.176 28.246c.243-1.527-1.522-6.287-5.682-5.836-.608 3.818 3.623 6.145 5.682 5.836Z"></path>
              <path fill="url(#paint4_linear_badge)" d="M9.727 35.511c-.159-1.561-3.35-5.96-7.69-5.272.452 5.272 6.202 5.767 7.69 5.272Z"></path>
              <path fill="url(#paint5_linear_badge)" d="M14.37 42.215c-.515-1.694-5.381-6.06-10.22-4.712 1.846 5.353 8.615 5.458 10.22 4.712Z"></path>
              <path fill="url(#paint6_linear_badge)" d="M20.322 47.935c-.869-1.543-6.315-4.843-10.75-2.48 2.173 3.857 7.912 4.299 10.75 2.48Z"></path>
              <path fill="url(#paint7_linear_badge)" d="M21.723 46.683c1.438-.52 3.234-4.976-.54-7.276-3.447 2.957-1.395 6.198.54 7.276Z"></path>
              <path fill="url(#paint8_linear_badge)" d="M15.951 41.536c1.517-.197 4.087-4.217.898-7.278-4.002 2.14-1.86 6.088-.898 7.278Z"></path>
              <path fill="url(#paint9_linear_badge)" d="M11.358 35.175c1.401.036 3.891-2.886 1.86-6.116-3.385 2.08-2.563 4.903-1.86 6.116Z"></path>
              <path fill="url(#paint10_linear_badge)" d="M8.322 28.098c1.336.32 4.406-1.504 3.308-5.206-3.832.09-3.58 3.942-3.308 5.206Z"></path>
              <path fill="url(#paint11_linear_badge)" d="M8.272 20.97c.969.632 4.944-.452 4.944-3.9-3.35-.731-4.914 2.745-4.944 3.9Z"></path>
              <path fill="url(#paint12_linear_badge)" d="M9.624 14.64c.968.632 5.195.227 4.943-3.36-2.684-.481-4.914 2.205-4.943 3.36Z"></path>
            </g>
            <defs>
              <linearGradient id="paint0_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint2_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint3_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint4_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint5_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint6_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint7_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint8_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint9_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint10_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint11_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint12_linear_badge" x1="8.935" x2="10.162" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="center-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px' }}>
            {Icon && (
              <div className="icon-container" style={{ marginBottom: '2px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id={iconGradientId} x1="12" x2="12" y1="24" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#696969"></stop>
                      <stop offset="1" stopColor="#c0c0c0"></stop>
                    </linearGradient>
                  </defs>
                  <Icon stroke={`url(#${iconGradientId})`} fill="none" size={19} strokeWidth={2.5} />
                </svg>
              </div>
            )}
            <div className="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p className="text-large" style={{ 
                fontWeight: 600, 
                backgroundImage: 'linear-gradient(0deg,#696969 9.04%,#fff)',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                margin: 0
              }}>
                {primaryText}
              </p>
              <p className="text-small" style={{ 
                fontWeight: 500,
                color: 'transparent',
                backgroundImage: 'linear-gradient(0deg,#696969 6.65%,#fff)',
                fontSize: '10px',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                margin: 0,
                lineHeight: '15px'
              }}>
                {secondaryText}
              </p>
            </div>
          </div>
          <svg className="svg-right" width="25" height="51" fill="none" viewBox="0 0 25 51" style={{ marginLeft: marginLeftRight }}>
            <g opacity=".5">
              <path fill="url(#paint0_linear_badge_right)" d="M13.416 9.313c-2.258-.227-4.458-2.854-4.21-6.346 3.306.47 5.34 4.085 4.21 6.346Z"></path>
              <path fill="url(#paint1_linear_badge_right)" d="M16.887 13.962c-1.214-.956-2.482-4.972.182-7.787 3.433 2.59 1.188 7.072-.182 7.787Z"></path>
              <path fill="url(#paint2_linear_badge_right)" d="M18.018 20.743c-.703-1.377-.471-5.937 3.624-6.799 1.759 3.443-2.08 6.723-3.624 6.8Z"></path>
              <path fill="url(#paint3_linear_badge_right)" d="M17.758 28.246c-.243-1.527 1.523-6.287 5.683-5.836.607 3.818-3.624 6.145-5.683 5.836Z"></path>
              <path fill="url(#paint4_linear_badge_right)" d="M15.208 35.511c.159-1.561 3.35-5.96 7.69-5.272-.452 5.272-6.202 5.767-7.69 5.272Z"></path>
              <path fill="url(#paint5_linear_badge_right)" d="M10.565 42.215c.515-1.694 5.38-6.06 10.22-4.712-1.846 5.353-8.616 5.458-10.22 4.712Z"></path>
              <path fill="url(#paint6_linear_badge_right)" d="M4.613 47.935c.869-1.543 6.315-4.843 10.749-2.48-2.172 3.857-7.912 4.299-10.75 2.48Z"></path>
              <path fill="url(#paint7_linear_badge_right)" d="M3.212 46.683c-1.439-.52-3.234-4.976.54-7.276 3.446 2.957 1.394 6.198-.54 7.276Z"></path>
              <path fill="url(#paint8_linear_badge_right)" d="M8.983 41.536c-1.517-.197-4.087-4.217-.898-7.278 4.003 2.14 1.86 6.088.898 7.278Z"></path>
              <path fill="url(#paint9_linear_badge_right)" d="M13.577 35.175c-1.402.036-3.892-2.886-1.86-6.116 3.384 2.08 2.563 4.903 1.86 6.116Z"></path>
              <path fill="url(#paint10_linear_badge_right)" d="M16.613 28.098c-1.336.32-4.406-1.504-3.308-5.206 3.832.09 3.58 3.942 3.308 5.206Z"></path>
              <path fill="url(#paint11_linear_badge_right)" d="M16.663 20.97c-.97.632-4.945-.452-4.944-3.9 3.35-.731 4.914 2.745 4.944 3.9Z"></path>
              <path fill="url(#paint12_linear_badge_right)" d="M15.31 14.64c-.968.632-5.195.227-4.943-3.36 2.684-.481 4.914 2.205 4.944 3.36Z"></path>
            </g>
            <defs>
              <linearGradient id="paint0_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint2_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint3_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint4_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint5_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint6_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint7_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint8_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint9_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint10_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint11_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
              <linearGradient id="paint12_linear_badge_right" x1="16" x2="14.772" y1="54.394" y2="2.069" gradientUnits="userSpaceOnUse">
                <stop stopColor="#696969"></stop>
                <stop offset="1" stopColor="#fff"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LaurelBadge; 