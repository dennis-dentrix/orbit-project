import { ArrowLeft, Camera, Mic, Paperclip, Phone, Plus, Search, Send, Smile, Video, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import MessageBubble from './MessageBubble';
import { currentUser } from './data';


export default function ChatWindow({ chat, messages, onBack, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
      setShowAttachments(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Chat Header */}
      <div className="flex items-center gap-3 px-3 py-2.5 bg-white border-b border-border shrink-0">
        <button onClick={onBack} className="md:hidden text-textSecondary hover:bg-offWhite p-2 rounded-full transition -ml-2">
          <ArrowLeft size={22} />
        </button>
        <img src={chat.contact.avatar} alt={chat.contact.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1 min-w-0">
          <h2 className="text-text font-normal truncate text-base">{chat.contact.name}</h2>
          <p className="text-xs text-textSecondary truncate">{chat.contact.status === 'online' ? 'online' : chat.contact.lastSeen}</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition"><Phone size={20} /></button>
          <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition"><Video size={20} /></button>
          <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition"><Search size={20} /></button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto md:p-4 space-y-0.5 custom-scrollbar bg-background">
        <div className="text-center text-xs text-textSecondary my-4">
          <span className="bg-offWhite px-3 py-1 rounded-lg shadow-sm text-textSecondary">Today</span>
        </div>
        {messages.map((message) => {
          const isOwn = message.senderId === currentUser.id;
          return <MessageBubble key={message.id} message={message} isOwn={isOwn} />;
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-1.5 px-2 sm:px-3 py-2 bg-white border-t border-border shrink-0">
        {/* Mobile: Plus button with attachment options */}
        <div className="relative md:hidden">
          <button
            onClick={() => setShowAttachments(!showAttachments)}
            className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition"
          >
            {showAttachments ? <X size={22} /> : <Plus size={22} />}
          </button>

          {/* Attachment Options Dropdown */}
          {showAttachments && (
            <div className="absolute bottom-full left-0 mb-2 flex gap-1 bg-white rounded-full shadow-lg p-1 border border-border">
              <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
                <Smile size={20} />
              </button>
              <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
                <Paperclip size={20} />
              </button>
              <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
                <Camera size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Desktop: Show all buttons */}
        <button className="hidden md:block text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
          <Smile size={22} />
        </button>
        <button className="hidden md:block text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
          <Paperclip size={22} />
        </button>
        <button className="hidden md:block text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
          <Camera size={22} />
        </button>

        {/* Input Field */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-offWhite rounded-lg px-4 py-2.5 outline-none text-text text-sm placeholder-textSecondary"
          />
        </div>

        {/* Send or Mic button */}
        {newMessage.trim() ? (
          <button onClick={handleSendMessage} className="text-white p-2 rounded-full transition bg-primary hover:bg-hover">
            <Send size={20} />
          </button>
        ) : (
          <button className="text-textSecondary hover:bg-offWhite p-2 rounded-full transition">
            <Mic size={22} />
          </button>
        )}
      </div>
    </div>
  );
}

