import React, { useEffect, useState } from 'react';
import { chatService } from '../services/chatService';
import { AppLayout } from '../layouts/AppLayout';
import { Card } from '../components/ui/Card';

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState<any>(null);
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        chatService.getAdminStats().then(setStats);
        chatService.getAllUsers().then(setUsers);
    }, []);

    if (!stats) return (
        <AppLayout>
            <div style={{ textAlign: 'center', padding: '4rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
                <p>Loading Admin Dashboard...</p>
            </div>
        </AppLayout>
    );

    return (
        <AppLayout>
            <div style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Admin Dashboard</h1>
                {/* Stats Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <Card style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #2D8680 0%, #32B8C6 100%)', color: 'white' }}>
                        <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Total Users</div>
                        <div style={{ fontSize: '3rem', fontWeight: 700 }}>{stats.users}</div>
                    </Card>
                    <Card style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                        <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Conversations</div>
                        <div style={{ fontSize: '3rem', fontWeight: 700 }}>{stats.conversations}</div>
                    </Card>
                    <Card style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
                        <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Total Messages</div>
                        <div style={{ fontSize: '3rem', fontWeight: 700 }}>{stats.messages}</div>
                    </Card>
                </div>

                {/* Users Table */}
                <Card style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>All Users</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: 'var(--muted-foreground)' }}>ID</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: 'var(--muted-foreground)' }}>Username</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: 'var(--muted-foreground)' }}>Email</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, color: 'var(--muted-foreground)' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(u => (
                                    <tr key={u.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                       <td style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>{u.id.substring(0, 8)}...</td>
                                       <td style={{ padding: '1rem', fontWeight: 500 }}>{u.username}</td>
                                       <td style={{ padding: '1rem', color: 'var(--muted-foreground)' }}>{u.email}</td>
                                       <td style={{ padding: '1rem' }}>
                                           <span style={{
                                               padding: '0.25rem 0.75rem',
                                               borderRadius: '12px',
                                               fontSize: '0.75rem',
                                               fontWeight: 600,
                                               background: u.status === 'online' ? '#d1fae5' : '#f3f4f6',
                                               color: u.status === 'online' ? '#065f46' : '#6b7280'
                                           }}>
                                               {u.status || 'offline'}
                                           </span>
                                       </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </AppLayout>
    );
};

export default AdminDashboard;
