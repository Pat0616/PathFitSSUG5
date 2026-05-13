import "./sidebar.css";
import { Link } from "react-router-dom";

import {
  Home,
  UserRound,
  List,
  Users,
  Activity,
 
  FolderOpen,
  FilePen,
  MessageSquareQuote,

  GalleryVerticalEnd 
} from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
  isOpen,
  setIsOpen,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* TOP */}
      <button
        className="sidebar-collapse"
        onClick={() => setIsOpen(!isOpen)}
        >
        ☰
        </button>
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <div className="logo-circle">G5</div>

          {isOpen && (
            <div className="sidebar-brand">
              <h2>PATHFIT 2</h2>
              <span>Group 5</span>
            </div>
          )}
        </div>



        <Link to="/home" className="sidebar-item">
          <Home size={15} />

          {isOpen && <span>Home</span>}
        </Link>

        <Link to="/intro" className="sidebar-item">
          <UserRound size={15} />

          {isOpen && <span>Introduction</span>}
        </Link>

        <Link to="/contents" className="sidebar-item">
          <List size={15} />

          {isOpen && <span>Table of Contents</span>}
        </Link>

        <Link to="/members" className="sidebar-item">
          <Users size={15} />

          {isOpen && <span>Members</span>}
        </Link>

        <Link to="/studentprofile" className="sidebar-item">
          <Activity size={15} />

          {isOpen && <span>Athelete Profiles</span>}
        </Link>

        <Link to="/groupworks" className="sidebar-item">
          <FolderOpen size={15} />

          {isOpen && <span>Group Works</span>}
        </Link>

        <Link to="/individualworks" className="sidebar-item">
           <FilePen  size={15} />

          {isOpen && <span>Individual Works</span>}
        </Link>
        
        <Link to="/reflections" className="sidebar-item">
           <MessageSquareQuote size={15} />

          {isOpen && <span>Reflections</span>}
        </Link>

        <Link to="/closing" className="sidebar-item">
           <GalleryVerticalEnd size={15} />

          {isOpen && <span>Closing Page</span>}
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">

  
        

      </nav>

      {/* BOTTOM */}
      <div className="sidebar-bottom1">
       
      </div>

      <div className="sidebar-bottom1">
       
      </div>
    </aside>
  );
}