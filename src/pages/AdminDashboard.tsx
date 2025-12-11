import React, { useEffect, useState } from 'react';
import { chatService } from '../services/chatService';

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState<any>(null);
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        chatService.getAdminStats().then(setStats);
        chatService.getAllUsers().then(setUsers);
    }, []);

    if (!stats) return <div>Loading Admin Dashboard...</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Admin Dashboard</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
                    <h3>Users</h3>
                    <p style={{ fontSize: '24px' }}>{stats.users}</p>
                </div>
                <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
                    <h3>Conversations</h3>
                    <p style={{ fontSize: '24px' }}>{stats.conversations}</p>
                </div>
                <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
                    <h3>Messages</h3>
                    <p style={{ fontSize: '24px' }}>{stats.messages}</p>
                </div>
            </div>

            <h3>All Users</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ textAlign: 'left', background: '#eee' }}>
                        <th style={{ padding: '10px' }}>ID</th>
                        <th style={{ padding: '10px' }}>Username</th>
                        <th style={{ padding: '10px' }}>Email</th>
                        <th style={{ padding: '10px' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id} style={{ borderBottom: '1px solid #ddd' }}>
                           <td style={{ padding: '10px' }}>{u.id}</td>
                           <td style={{ padding: '10px' }}>{u.username}</td>
                           <td style={{ padding: '10px' }}>{u.email}</td>
                           <td style={{ padding: '10px' }}>{u.status || 'offline'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
