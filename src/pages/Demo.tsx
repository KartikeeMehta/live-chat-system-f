import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './Demo.css';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const Demo: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Welcome to ChatApp! 👋', sender: 'bot', timestamp: new Date() },
        { id: 2, text: 'Try sending a message to see how it works!', sender: 'bot', timestamp: new Date() }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const botResponses = [
        "That's great! ChatApp makes team communication seamless.",
        "Real-time messaging keeps everyone in sync!",
        "You can also share files and create group chats.",
        "Our encryption ensures your conversations stay private.",
        "Ready to get started? Sign up for free!",
        "ChatApp works on all your devices - web, mobile, and desktop.",
        "Join thousands of teams already using ChatApp!"
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage: Message = {
            id: messages.length + 1,
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages([...messages, newMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            setIsTyping(false);
            const botMessage: Message = {
                id: messages.length + 2,
                text: botResponses[Math.floor(Math.random() * botResponses.length)],
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1500);
    };

    return (
        <div className="demo-page">
            <nav className="demo-nav">
                <Link to="/" className="demo-logo">💬 ChatApp</Link>
                <Link to="/register"><Button>Sign Up Free</Button></Link>
            </nav>

            <div className="demo-container">
                <div className="demo-header">
                    <h1>Try ChatApp Demo</h1>
                    <p>Experience real-time messaging without signing up</p>
                </div>

                <div className="demo-chat-container">
                    <div className="demo-chat-header">
                        <div className="demo-chat-info">
                            <div className="demo-avatar">🤖</div>
                            <div>
                                <div className="demo-chat-name">ChatApp Bot</div>
                                <div className="demo-chat-status">Always online</div>
                            </div>
                        </div>
                    </div>

                    <div className="demo-messages">
                        {messages.map(msg => (
                            <div key={msg.id} className={`demo-message ${msg.sender}`}>
                                {msg.sender === 'bot' && <div className="msg-avatar">🤖</div>}
                                <div className="msg-bubble">
                                    <div className="msg-text">{msg.text}</div>
                                    <div className="msg-time">
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                                {msg.sender === 'user' && <div className="msg-avatar">👤</div>}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="demo-message bot">
                                <div className="msg-avatar">🤖</div>
                                <div className="typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="demo-input-area">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className="demo-input"
                        />
                        <Button onClick={handleSend}>Send</Button>
                    </div>
                </div>

                <div className="demo-cta">
                    <h3>Ready to use ChatApp with your team?</h3>
                    <Link to="/register"><Button size="lg">Get Started Free</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Demo;
