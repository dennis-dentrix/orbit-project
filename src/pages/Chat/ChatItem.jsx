import { Volume2 } from 'lucide-react';

export default function ChatItem({ chat, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 cursor-pointer transition-all hover:bg-offWhite ${isSelected ? 'bg-offWhite' : ''}`}
    >
      <div className="relative shrink-0">
        <img
          src={chat.contact.avatar}
          alt={chat.contact.name}
          className="w-10 h-10 sm:w-12.5 sm:h-12.5 rounded-full object-cover"
        />
        {chat.contact.status === 'online' && (
          <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-success rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-text font-normal truncate text-sm sm:text-base">{chat.contact.name}</h3>
          <span className="text-[10px] sm:text-xs text-textSecondary whitespace-nowrap ml-2">{chat.lastMessageTime}</span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <p className="text-textSecondary text-xs sm:text-sm truncate flex-1 pr-2">{chat.lastMessage}</p>
          <div className="flex items-center gap-1 sm:gap-2 ml-2">
            {chat.isMuted && <Volume2 size={14} sm:size={16} className="text-textSecondary" />}
            {chat.unreadCount > 0 && (
              <span className="bg-primary text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full min-w-4 sm:min-w-5 text-center">
                {chat.unreadCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

