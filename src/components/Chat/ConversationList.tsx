import React, { useEffect, useState } from 'react';
import { chatService } from '../../services/chatService';
import { useSocket } from '../../context/SocketContext';
import type { IConversation } from '../../services/chatService';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import './ConversationList.css';

interface Props {
  onSelectConversation: (convo: IConversation) => void;
  activeConversationId?: string;
  className?: string;
}

const ConversationList: React.FC<Props> = ({ onSelectConversation, activeConversationId, className = '' }) => {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const { socket } = useSocket();

  useEffect(() => {
    loadConversations();
    
    if (socket) {
        socket.on('presence:update', ({ userId, status }) => {
            // In a real app we'd update specific conversation participant status here
             console.log('Presence update:', userId, status);
        });
        // Listen for new messages to update last message preview and sort
        socket.on('message:new', (msg) => {
            setConversations(prev => {
                const others = prev.filter(c => c._id !== msg.conversationId);
                const current = prev.find(c => c._id === msg.conversationId);
                if (current) {
                    const updated = { 
                        ...current, 
                        lastMessage: msg, 
                        updatedAt: new Date().toISOString() 
                    };
                    return [updated, ...others];
                }
                return prev;
            });
        });
    }
    
    return () => {
        if (socket) socket.off('message:new');
    };
  }, [socket]);

  const loadConversations = async () => {
    try {
      const data = await chatService.getConversations();
      setConversations(data.sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
    } catch (err) {
      console.error('Failed to load conversations', err);
    }
  };

  const createGroup = async () => {
    const name = prompt("Enter Group Name:");
    if (!name) return;
    const ids = prompt("Enter Participant IDs (comma separated):");
    if (!ids) return;
    
    const participantIds = ids.split(',').map(s => s.trim());
    try {
        const newGroup = await chatService.createGroup(name, participantIds);
        setConversations([newGroup, ...conversations]);
        onSelectConversation(newGroup);
    } catch (err) {
        alert('Failed to create group');
    }
  };

  const createDM = async () => {
      const id = prompt('Enter User ID to chat with:');
      if (id) {
          try {
            const convo = await chatService.createConversation(id);
            setConversations([convo, ...conversations]);
            onSelectConversation(convo);
          } catch(err) {
              alert('Failed to create DM');
          }
      }
  };

// Pin functionality disabled for now

  return (
    <div className={`conversation-list ${className}`}>
      <div style={{ display: 'flex', gap: '0.5rem', padding: '0 1rem 1rem 1rem' }}>
        <Button size="sm" variant="outline" onClick={createDM} className="flex-1">+ DM</Button>
        <Button size="sm" variant="outline" onClick={createGroup} className="flex-1">+ Group</Button>
      </div>
      
      {conversations.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>
              No conversations yet. Start a chat!
          </div>
      )}

      {conversations.map((c) => (
        <div
          key={c._id}
          className={`conversation-item ${activeConversationId === c._id ? 'active' : ''}`}
          onClick={() => onSelectConversation(c)}
        >
          <Avatar 
            fallback={c.name ? c.name[0] : (c.type === 'group' ? 'G' : 'U')} 
            size="md" 
            // In a real app, determine status from participants for DM
          />
          
          <div className="conversation-info">
            <div className="conversation-header">
                <span className="conversation-name">
                    {c.type === 'group' ? c.name : 'Unknown User'} {/* Should resolve name properly if DM */}
                </span>
                {c.lastMessage && (
                    <span className="conversation-time">
                        {new Date(c.lastMessage.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                )}
            </div>
            <div className="conversation-last-msg">
                {c.lastMessage ? (
                    <>
                        {c.lastMessage.senderId === 'me' && 'You: '} 
                        {c.lastMessage.content}
                    </>
                ) : (
                    <span style={{fontStyle:'italic'}}>No messages</span>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
