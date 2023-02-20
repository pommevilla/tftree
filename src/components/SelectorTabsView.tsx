import React, { useState } from "react";

export const SelectorTabsView = ({ tabs = [] }: {}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="SelectorTabsView">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <label
            key={index}
            className={index === activeTabIndex ? "active-tab" : "tab"}
            onClick={() => activateTab(index)}
          >
            {tab.name}
          </label>
        ))}
      </div>
      <div className="content">{tabs[activeTabIndex].content}</div>
    </div>
  );
};
