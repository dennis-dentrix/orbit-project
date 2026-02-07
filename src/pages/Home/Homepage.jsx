import { MessageCircleMore, Settings, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeDisplay from './HomeDisplay';

export default function HomePage() {
  return (
    // <div className="bg-background flex items-start justify-center pt-16">
    <div className="bg-background w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <HomeDisplay />
        <div className="mt-6 w-full max-w-4xl">
          {/* <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
          <div className="text-center mb-8">
            <div className="px-5 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircleMore size={28} />
            </div>
            <h1 className="text-3xl font-bold text-text mb-2">Welcome to Orbit</h1>
            <p className="text-textSecondary">Your modern messaging platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/chat" className="group p-6 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Chat</h3>
              <p className="text-white/80 text-sm">Start messaging with your contacts</p>
            </Link>

            <Link to={"/contacts"} className="p-6 bg-secondary text-white rounded-xl opacity-60 cursor-not-allowed">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Contacts</h3>
              <p className="text-white/80 text-sm">Manage your contacts</p>
            </Link>

            <div className="p-6 bg-accent text-white rounded-xl opacity-60 cursor-not-allowed">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Settings2 />
              </div>
              <h3 className="font-semibold text-lg mb-2">Settings</h3>
              <p className="text-white/80 text-sm">Configure your preferences</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-center gap-4 text-sm text-textTertiary">
              <span>Orbit v1.0.0</span>
              <span>|</span>
              <span>Built by Orbit.ke</span>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}
