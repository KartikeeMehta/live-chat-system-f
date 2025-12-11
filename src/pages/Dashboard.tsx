import { useState, useEffect } from 'react';
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

    // Notification State
    const [notifications, setNotifications] = useState<any[]>([]);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        if (showNotifications) {
            chatService.getNotifications().then(setNotifications);
        }
    }, [showNotifications]);

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
                         <Button size="sm" variant="ghost" className="w-full" style={{marginTop:'5px'}} onClick={() => {
                             const ids = notifications.filter(n => !n.isRead).map(n => n._id);
                             if(ids.length) chatService.markNotificationsRead(ids).then(() => chatService.getNotifications().then(setNotifications));
                         }}>Mark Read</Button>
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

    if (!user) return null;

    return (
        <AppLayout headerActions={HeaderActions} sidebarContent={SidebarContent}>
             <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
                 {/* Desktop Sidebar (Visible on large screens) */}
                 <div className="desktop-sidebar" style={{ 
                     width: '300px', borderRight: '1px solid var(--border)', 
                     background: 'var(--muted)', display: 'none', flexDirection: 'column', padding: '1rem' 
                 }}>
                     {SidebarContent}
                 </div>

                 {/* Main Chat Area */}
                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
                     {activeConversation ? (
                         <ChatWindow conversation={activeConversation} currentUserId={user.id} />
                     ) : (
                         <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'var(--muted-foreground)' }}>
                             <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                             <h3>Select a conversation to start chatting</h3>
                         </div>
                     )}
                 </div>
             </div>
             <style>{`
                @media (min-width: 1024px) {
                    .desktop-sidebar { display: flex !important; }
                }
             `}</style>
        </AppLayout>
    );
};

export default Dashboard;
