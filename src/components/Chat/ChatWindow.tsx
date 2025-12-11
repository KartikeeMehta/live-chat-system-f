import React, { useEffect, useState, useRef } from 'react';
import { chatService } from '../../services/chatService';
import type { IMessage, IConversation } from '../../services/chatService';
import { useSocket } from '../../context/SocketContext';
import { MessageBubble } from './MessageBubble';
import { Button } from '../ui/Button';
import './ChatWindow.css';

interface Props {
  conversation: IConversation;
  currentUserId: string;
}

const ChatWindow: React.FC<Props> = ({ conversation, currentUserId }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [input, setInput] = useState('');
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const { socket } = useSocket();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadMessages();
    if (socket && conversation._id) {
        socket.emit('join:room', conversation._id);
    }
  }, [conversation._id, socket]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message: IMessage) => {
      if (message.conversationId === conversation._id) {
        setMessages((prev) => [...prev, message]);
        scrollToBottom();
        chatService.markAsRead(conversation._id);
      }
    };
    
    const handleTypingStart = ({ userId, roomId }: { userId: string, roomId: string }) => {
        if (roomId === conversation._id && userId !== currentUserId) {
            setTypingUsers(prev => [...new Set([...prev, userId])]);
        }
    };

    const handleTypingStop = ({ userId, roomId }: { userId: string, roomId: string }) => {
        if (roomId === conversation._id) {
            setTypingUsers(prev => prev.filter(id => id !== userId));
        }
    };

    socket.on('message:new', handleNewMessage);
    socket.on('typing:start', handleTypingStart);
    socket.on('typing:stop', handleTypingStop);

    return () => {
      socket.off('message:new', handleNewMessage);
      socket.off('typing:start', handleTypingStart);
      socket.off('typing:stop', handleTypingStop);
    };
  }, [socket, conversation._id, currentUserId]);

  const loadMessages = async () => {
    try {
      const data = await chatService.getMessages(conversation._id);
      setMessages(data);
      scrollToBottom();
      chatService.markAsRead(conversation._id);
    } catch (err) {
      console.error('Failed to load messages', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      
      if (socket) {
          socket.emit('typing:start', conversation._id);
          if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
          typingTimeoutRef.current = setTimeout(() => {
              socket.emit('typing:stop', conversation._id);
          }, 2000);
      }
  };

  const scrollToBottom = () => {
     setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const newMessage = await chatService.sendMessage(conversation._id, input);
      setMessages((prev) => [...prev, newMessage]);
      setInput('');
      scrollToBottom();
    } catch (err) {
      console.error('Failed to send message', err);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          try {
              const attachment = await chatService.uploadFile(e.target.files[0], conversation._id);
              await chatService.sendMessage(conversation._id, "Shared a file: " + attachment.originalName, [attachment._id]);
              // Message list will update via socket or we can refetch/append manually if needed
              // For now relying on socket 'message:new' which we listen to
          } catch (err) {
              alert("Upload failed");
          }
      }
  };

  return (
    <div className="chat-window">
        {/* Chat Header */}
        <div className="chat-header">
            <div className="chat-header-info">
                <h3>{conversation.type === 'group' ? conversation.name : 'Direct Conversation'}</h3>
                {typingUsers.length > 0 ? (
                    <span className="typing-indicator">{typingUsers.length} person(s) typing...</span>
                ) : (
                    <span className="chat-subtitle">{conversation.participants?.length || 0} participants</span>
                )}
            </div>
            <div className="chat-header-actions">
                <Button variant="ghost" size="sm">Search</Button>
                <Button variant="ghost" size="sm">Info</Button>
            </div>
        </div>

        {/* Messages Pool */}
        <div className="chat-messages">
            {messages.map((m) => (
                <MessageBubble 
                    key={m._id}
                    content={m.content}
                    sender={{ _id: m.senderId, username: 'User' }} // Need to resolve user properly
                    isOwn={m.senderId === currentUserId}
                    timestamp={m.createdAt}
                    status="read" // TODO: Implement status
                    type="text" // TODO: Implement type detection based on attachments
                />
            ))}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={sendMessage} className="chat-input-area">
            <input 
                type="file" 
                ref={fileInputRef}
                style={{ display: 'none' }} 
                onChange={handleFileUpload}
            />
            <Button 
                type="button" 
                variant="ghost" 
                icon="📎" 
                onClick={() => fileInputRef.current?.click()} 
                title="Attach file"
            />
            
            <div className="input-field-wrapper">
                <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className="chat-input-field" 
                />
            </div>
            
            <Button type="submit" variant="primary" disabled={!input.trim()}>Send</Button>
        </form>
    </div>
  );
};

export default ChatWindow;
