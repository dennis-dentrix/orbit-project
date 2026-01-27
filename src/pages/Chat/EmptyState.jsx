import { MessageCircle } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="hidden md:flex flex-col items-center justify-center h-full bg-background text-center px-4 sm:px-8">
      <div className="bg-white p-8 sm:p-10 rounded-full mb-6 border border-border">
        <MessageCircle size={48} className="text-textSecondary sm:w-15 sm:h-15" />
      </div>
      <h1 className="text-text text-2xl sm:text-[2rem] font-light mb-3">Orbit Chat</h1>
      <p className="text-textSecondary text-sm sm:text-[0.95rem] max-w-lg leading-relaxed">
        Select a chat to start messaging<br className="hidden sm:block" />
        or start a new conversation.
      </p>
    </div>
  );
}

