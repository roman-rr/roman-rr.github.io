import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Headers */}
      <div className="border-b border-[#e0e0e0] mb-8">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-3 py-2 sm:px-4 sm:py-3 text-sm font-medium rounded-t-lg relative",
                "hover:bg-[#f5f5f5] hover:text-[#333]",
                activeTab === tab.id
                  ? "bg-[#f5f5f5] text-[#333] border-l border-r border-t border-[#e0e0e0] -mb-px z-10"
                  : "text-gray-600 bg-[#f9f9f9] border border-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTabContent}
      </div>
    </div>
  );
}

export type { Tab };
