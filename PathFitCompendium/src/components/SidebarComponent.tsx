import "./sidebar.css";
import { Link } from "lucide-react";

import {
  Home,
  UserRound,
  List,
  Users,
  Activity,
  ClipboardList,
  Dumbbell,
  FolderOpen,
  FilePen,
  MessageSquareQuote,
  Settings
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
      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">

  
        <a href="/home" className="sidebar-item active">
          <Home size={22} />

          {isOpen && <span>Home</span>}
        </a>

        <a href="/intro" className="sidebar-item">
          <UserRound size={22} />

          {isOpen && <span>Introduction</span>}
        </a>

        <a href="#" className="sidebar-item">
          <List size={22} />

          {isOpen && <span>Table of Contents</span>}
        </a>

        <a href="#" className="sidebar-item">
          <Users size={22} />

          {isOpen && <span>Members</span>}
        </a>

        <a href="#" className="sidebar-item">
          <Activity size={22} />

          {isOpen && <span>Athelete Profiles</span>}
        </a>

        <a href="#" className="sidebar-item">
          <ClipboardList  size={22} />

          {isOpen && <span>ParQ Forms</span>}
        </a>

        <a className="sidebar-item">
           <Dumbbell size={22} />

          {isOpen && <span>Reflections</span>}
        </a>

        <a href="#" className="sidebar-item">
          <FolderOpen size={22} />

          {isOpen && <span>Group Works</span>}
        </a>

        <a className="sidebar-item">
           <FilePen  size={22} />

          {isOpen && <span>Individual Works Works</span>}
        </a>
        
        <a className="sidebar-item">
           <MessageSquareQuote size={22} />

          {isOpen && <span>Reflections</span>}
        </a>

      </nav>

      {/* BOTTOM */}
      <div className="sidebar-bottom">
        <a href="#" className="sidebar-item">
          <Settings size={22} />

          {isOpen && <span>Settings</span>}
        </a>
      </div>
    </aside>
  );
}