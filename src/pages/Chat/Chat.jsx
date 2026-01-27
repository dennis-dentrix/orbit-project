import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { chats, messages as initialMessages, currentUser } from './data';
import ChatList from './ChatList';
import EmptyState from './EmptyState';
import ChatWindow from './ChatWindow';

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [chatMessages, setChatMessages] = useState(() => {
    const msgs = {};
    chats.forEach(chat => {
      msgs[chat.id] = initialMessages[chat.id] || [];
    });
    return msgs;
  });

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setIsMobileChatOpen(true);
  };

  const handleBack = () => {
    setIsMobileChatOpen(false);
    setSelectedChat(null);
  };

  const handleSendMessage = (text) => {
    if (!selectedChat) return;

    const newMessage = {
      id: `m${Date.now()}`,
      senderId: currentUser.id,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      type: 'text',
    };

    setChatMessages(prev => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), newMessage],
    }));
  };

  return (
    <div className="h-full min-h-0 bg-background overflow-hidden">
      <div className="flex h-full min-h-0">

        {/* Chat List */}
        <div
          className={`
            ${isMobileChatOpen ? 'hidden md:flex' : 'flex'}
            flex-col
            w-full md:w-85 lg:w-95
            border-r border-border
            min-h-0
          `}
        >
          <ChatList
            chats={chats}
            onSelectChat={handleSelectChat}
            selectedChatId={selectedChat?.id}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        {/* Chat Window */}
        <div
          className={`
            ${isMobileChatOpen ? 'flex' : 'hidden md:flex'}
            flex-1 flex-col min-h-0
          `}
        >
          {selectedChat ? (
            <ChatWindow
              chat={selectedChat}
              messages={chatMessages[selectedChat?.id] || []}
              onBack={handleBack}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <EmptyState />
          )}
        </div>

      </div>
    </div>
  );
}

function ChatApp() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
    </Routes>
  );
}

export default ChatApp;
