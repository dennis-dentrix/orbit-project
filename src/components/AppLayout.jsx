import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Home, MessageCircle, Users, Settings, Bell, Search,
  Menu, X, Plus, ChevronRight
} from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/contacts', icon: Users, label: 'Contacts' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-border shadow-lg lg:shadow-none
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Section */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-text tracking-tight">Orbit</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-offWhite rounded-lg transition-colors"
          >
            <X size={20} className="text-textSecondary" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200 font-medium
                      ${isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/30'
                        : 'text-textSecondary hover:bg-offWhite hover:text-text'
                      }
                    `}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                    {item.path === '/chat' && (
                      <ChevronRight size={16} className="ml-auto opacity-70" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Action */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-offWhite/30 backdrop-blur-sm">
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg">
            <Plus size={20} />
            New Chat
          </button>
        </div>
      </aside>
    </>
  );
}

function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 p-2 bg-white/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-offWhite rounded-lg transition-colors"
          >
            <Menu size={20} className="text-textSecondary" />
          </button>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-textTertiary" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-offWhite rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary w-48 lg:w-64 transition-all"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-offWhite rounded-xl transition-colors">
            <Bell size={20} className="text-textSecondary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-semibold shadow-md">
            U
          </div>
        </div>
      </div>
    </header>
  );
}

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden m-0 ">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-auto ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
