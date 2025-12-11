import React from 'react';
import { Avatar } from '../ui/Avatar';
import './MessageBubble.css';

interface MessageBubbleProps {
    content: string;
    sender: { _id: string; username?: string; avatar?: string };
    isOwn: boolean;
    timestamp: string;
    type?: 'text' | 'image' | 'file' | 'system';
    status?: 'sent' | 'delivered' | 'read';
    onSave?: () => void;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
    content, sender, isOwn, timestamp, type = 'text', status 
}) => {
    
    if (type === 'system') {
        return <div className="system-message">{content}</div>;
    }

    return (
        <div className={`message-row ${isOwn ? 'own' : 'other'}`}>
            {!isOwn && <Avatar src={sender.avatar} fallback={sender.username?.[0] || '?'} size="sm" />}
            
            <div className="message-content-wrapper">
                <div className={`message-bubble ${isOwn ? 'bubble-primary' : 'bubble-secondary'}`}>
                    {!isOwn && <div className="message-sender-name">{sender.username}</div>}
                    
                    {type === 'image' ? (
                         <img src={`http://localhost:3000${content}`} alt="attachment" className="message-image" />
                    ) : type === 'file' ? (
                        <a href={`http://localhost:3000${content}`} target="_blank" rel="noopener noreferrer" className="message-file">
                            📎 Attachment
                        </a>
                    ) : (
                        <p className="message-text">{content}</p>
                    )}
                    
                    <div className="message-meta">
                        <span className="message-time">{new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                        {isOwn && status && <span className="message-status">{status === 'read' ? '✓✓' : '✓'}</span>}
                    </div>
                </div>
                {/* Actions like Save could go here as hover */}
            </div>
        </div>
    );
};
