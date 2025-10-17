import React from "react";

interface ComSidebarProps {
  children: React.ReactNode;
}

const ComSidebar: React.FC<ComSidebarProps> = ({ children }) => {
  return (
    <div className="com-sidebar-container">
      {/* Sidebar fixa */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h1 className="logo-titulo">PetLife</h1>
        </div>
        <nav className="navegacao">
          {/* Seus links de navegação */}
        </nav>
      </aside>
      
      {/* Conteúdo principal */}
      <div className="main-com-sidebar">
        {children}
      </div>
    </div>
  );
};

export default ComSidebar;