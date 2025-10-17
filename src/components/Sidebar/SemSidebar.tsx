import React from "react";

interface SemSidebarProps {
  children: React.ReactNode;
}

const SemSidebar: React.FC<SemSidebarProps> = ({ children }) => {
  return (
    <div className="sem-sidebar-container">
      <div className="main-sem-sidebar">
        {children}
      </div>
    </div>
  );
};

export default SemSidebar;