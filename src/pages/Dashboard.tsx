import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import type { IConversation } from '../services/chatService';
import { chatService } from '../services/chatService';
import { AppLayout } from '../layouts/AppLayout';
import ConversationList from '../components/Chat/ConversationList';
import ChatWindow from '../components/Chat/ChatWindow';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    // const { isConnected } = useSocket(); // Unused
    const [activeConversation, setActiveConversation] = useState<IConversation | undefined>();
    const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);

    // Notification State
    const [notifications, setNotifications] = useState<any[]>([]);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        if (showNotifications) {
            chatService.getNotifications().then(setNotifications);
        }
    }, [showNotifications]);

    // Check notification permission on mount
    useEffect(() => {
        console.log('🔔 Notification permission:', Notification.permission);
        if ('Notification' in window && Notification.permission === 'default') {
            setShowNotificationPrompt(true);
        }
    }, []);

    const requestNotificationPermission = async () => {
        if ('Notification' in window) {
            console.log('📱 Requesting notification permission...');
            const permission = await Notification.requestPermission();
            console.log('📱 Permission result:', permission);
            if (permission === 'granted') {
                setShowNotificationPrompt(false);
                // Test notification
                new Notification('ChatApp Notifications Enabled!', {
                    body: 'You will now receive notifications for new messages',
                    icon: '/favicon.png'
                });
            } else if (permission === 'denied') {
                alert('Notifications blocked. Please enable them in your browser settings.');
            }
        }
    };

    // Header Actions
    const HeaderActions = (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', fontFamily: 'monospace' }}>
                ID: {user?.id}
            </div>
            
            <div style={{ position: 'relative' }}>
                <Button variant="ghost" onClick={() => setShowNotifications(!showNotifications)}>
                    🔔
                </Button>
                {/* Notification Dropdown (Quick Inline style for now, can be component) */}
                {showNotifications && (
                    <div style={{
                        position: 'absolute', right: 0, top: '45px',
                        background: 'var(--popover)', color: 'var(--popover-foreground)',
                        border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                        width: '300px', padding: '10px', boxShadow: 'var(--shadow-lg)', zIndex: 60
                    }}>
                        <h4>Notifications</h4>
                        {notifications.length === 0 ? <p style={{fontSize: '0.8rem', color: 'var(--muted-foreground)'}}>No new notifications</p> : (
                             <ul style={{ listStyle: 'none', maxHeight: '200px', overflowY: 'auto' }}>
                                {notifications.map(n => (
                                    <li key={n._id} style={{ padding: '8px', borderBottom: '1px solid var(--border)', fontSize: '0.9rem', opacity: n.isRead ? 0.6 : 1 }}>
                                        {n.content}
                                    </li>
                                ))}
                             </ul>
                        )}
                    </div>
                )}
            </div>
            
            <Link to="/profile"><Button variant="ghost">Profile</Button></Link>
            <Button variant="outline" onClick={logout}>Logout</Button>
        </div>
    );

    // Sidebar Content
    const SidebarContent = (
         <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                 <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Conversations</h3>
                 <Button className="w-full" style={{ width: '100%', marginTop: '0.5rem' }}>+ New Group</Button>
             </div>
             <ConversationList 
                 onSelectConversation={setActiveConversation} 
                 activeConversationId={activeConversation?._id}
             />
         </div>
    );

    return (
        <AppLayout sidebarContent={SidebarContent} headerActions={HeaderActions}>
            {showNotificationPrompt && (
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary), #32B8C6)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '8px',
                    margin: '1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                    <div>
                        <strong>Enable Notifications</strong>
                        <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: '0.25rem 0 0 0' }}>
                            Get notified when you receive new messages
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button onClick={requestNotificationPermission} style={{ background: 'white', color: 'var(--primary)' }}>
                            Enable
                        </Button>
                        <Button variant="ghost" onClick={() => setShowNotificationPrompt(false)} style={{ color: 'white' }}>
                            Later
                        </Button>
                    </div>
                </div>
            )}
            
            {activeConversation ? (
                <ChatWindow conversation={activeConversation} currentUserId={user?.id || ''} />
            ) : (
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100%',
                    color: 'var(--muted-foreground)',
                    gap: '1rem'
                }}>
                    <div style={{ fontSize: '4rem' }}>💬</div>
                    <h3>Select a conversation to start chatting</h3>
                    <p style={{ fontSize: '0.9rem' }}>Choose a conversation from the sidebar or create a new one</p>
                </div>
            )}
        </AppLayout>
    );
};

export default Dashboard;
