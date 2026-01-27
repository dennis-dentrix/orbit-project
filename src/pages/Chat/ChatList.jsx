import { Archive, Menu, MessageCircle, Search } from 'lucide-react';
import React, { useState } from 'react'
import ChatItem from './ChatItem';


export default function ChatList({ chats, onSelectChat, selectedChatId, searchTerm, onSearchChange }) {
  const [showArchived, setShowArchived] = useState(false);

  const filteredChats = chats.filter(chat =>
    chat.contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pinnedChats = filteredChats.filter(chat => chat.isPinned);
  const regularChats = filteredChats.filter(chat => !chat.isPinned);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-offWhite px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-text text-[1.4rem] font-normal">Chats</h1>
          <div className="flex gap-2">
            <button className="text-textSecondary hover:bg-white p-2 rounded-full transition">
              <MessageCircle size={22} />
            </button>
            <button className="text-textSecondary hover:bg-white p-2 rounded-full transition">
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center bg-white rounded-lg px-3 py-2.5 shadow-sm border border-border">
            <Search size={18} className="text-textSecondary mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search or start new chat"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 outline-none text-text text-sm placeholder-textSecondary"
            />
          </div>
        </div>
      </div>

      {/* Archived Toggle */}
      <button
        onClick={() => setShowArchived(!showArchived)}
        className="flex items-center gap-3 px-4 py-3 hover:bg-offWhite border-b border-border text-textSecondary transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-offWhite flex items-center justify-center">
          <Archive size={16} />
        </div>
        <span className="font-medium text-sm">Archived</span>
      </button>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
        {pinnedChats.map(chat => (
          <ChatItem
            key={chat.id}
            chat={chat}
            onClick={() => onSelectChat(chat)}
            isSelected={selectedChatId === chat.id}
          />
        ))}
        {regularChats.map(chat => (
          <ChatItem
            key={chat.id}
            chat={chat}
            onClick={() => onSelectChat(chat)}
            isSelected={selectedChatId === chat.id}
          />
        ))}
      </div>
    </div>
  );
}

