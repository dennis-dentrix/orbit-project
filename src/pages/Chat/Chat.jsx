import { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { chats, messages as initialMessages, currentUser } from './data';
import ChatList from './ChatList';
import EmptyState from './EmptyState';
import ChatWindow from './ChatWindow';
import { clearPendingChat } from '../../store/chatSlice';

function ChatPage() {
  const dispatch = useDispatch();
  const pendingProfile = useSelector((state) => state.chat.pendingProfile);
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

  const handleSendMessage = (text, senderId = currentUser.id) => {
    if (!selectedChat) return;

    const newMessage = {
      id: `m${Date.now()}`,
      senderId,
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

  const pendingChat = useMemo(() => {
    if (!pendingProfile) return null;
    const contactId =
      pendingProfile.id ||
      pendingProfile.name?.toLowerCase().replace(/\s+/g, '-') ||
      `p${Date.now()}`;
    const avatar =
      pendingProfile.image ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(pendingProfile.name || 'User')}&background=a25b3c&color=fff`;
    return {
      id: `p-${contactId}`,
      contactId: `p-${contactId}`,
      lastMessage: 'Start a conversation',
      lastMessageTime: 'Just now',
      unreadCount: 0,
      isPinned: false,
      isMuted: false,
      contact: {
        id: `p-${contactId}`,
        name: pendingProfile.name || 'New Contact',
        avatar,
        status: 'online',
        lastSeen: 'online',
      },
    };
  }, [pendingProfile]);

  const mergedChats = useMemo(() => {
    if (!pendingChat) return chats;
    return [pendingChat, ...chats.filter(chat => chat.contactId !== pendingChat.contactId)];
  }, [pendingChat]);

  useEffect(() => {
    if (!pendingChat) return;
    setSelectedChat(pendingChat);
    setIsMobileChatOpen(true);
    dispatch(clearPendingChat());
  }, [dispatch, pendingChat]);

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
            chats={mergedChats}
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
