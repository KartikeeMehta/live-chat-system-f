import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userService, type IUserProfile } from '../services/userService';
import { AppLayout } from '../layouts/AppLayout';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const ProfileSettings: React.FC = () => {
    const [profile, setProfile] = useState<IUserProfile | null>(null);
    const [displayName, setDisplayName] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [blockId, setBlockId] = useState('');

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const data = await userService.getProfile();
            setProfile(data);
            setDisplayName(data.displayName || '');
            setStatusMessage(data.statusMessage || '');
        } catch (err) {
            console.error(err);
        }
    };

    const handleSave = async () => {
        await userService.updateProfile({ displayName, statusMessage });
        alert('Profile updated');
        loadProfile();
    };

    const handleBlock = async () => {
        if (!blockId) return;
        await userService.blockUser(blockId);
        alert('User blocked');
        setBlockId('');
        loadProfile();
    };

    const handleUnblock = async (id: string) => {
        await userService.unblockUser(id);
        loadProfile();
    };

    if (!profile) return (
        <AppLayout>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', flexDirection: 'column', gap: '1rem' }}>
                <div className="spinner" style={{
                    width: '48px',
                    height: '48px',
                    border: '4px solid var(--muted)',
                    borderTop: '4px solid var(--primary)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <p style={{ color: 'var(--muted-foreground)' }}>Loading profile...</p>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        </AppLayout>
    );

    return (
        <AppLayout>
            <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost">← Back</Button>
                    </Link>
                    <h2 style={{ margin: 0 }}>Profile & Settings</h2>
                </div>
                
                <Card style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3>Your User ID</h3>
                    <div style={{ 
                        padding: '0.75rem', 
                        background: 'var(--muted)', 
                        borderRadius: 'var(--radius-md)',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        marginTop: '0.5rem',
                        wordBreak: 'break-all'
                    }}>
                        {profile._id || profile.id}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>
                        Share this ID with others to start a direct conversation
                    </p>
                </Card>

                <Card style={{ marginBottom: '1.5rem' }}>
                    <h3>Public Profile</h3>
                    <Input 
                        label="Display Name" 
                        value={displayName} 
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Your display name"
                    />
                    <Input 
                        label="Status Message" 
                        value={statusMessage} 
                        onChange={(e) => setStatusMessage(e.target.value)}
                        placeholder="What's on your mind?"
                    />
                    <Button onClick={handleSave} style={{ marginTop: '1rem' }}>Save Profile</Button>
                </Card>

                <Card>
                    <h3>Blocked Users</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Input 
                            placeholder="User ID to block" 
                            value={blockId} 
                            onChange={e => setBlockId(e.target.value)}
                        />
                        <Button onClick={handleBlock}>Block</Button>
                    </div>
                    
                    {profile.blockedUsers && profile.blockedUsers.length > 0 ? (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {profile.blockedUsers.map(id => (
                                <li key={id} style={{ 
                                    padding: '0.75rem', 
                                    borderBottom: '1px solid var(--border)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', wordBreak: 'break-all' }}>{id}</span>
                                    <Button size="sm" variant="outline" onClick={() => handleUnblock(id)}>Unblock</Button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>No blocked users</p>
                    )}
                </Card>
            </div>
        </AppLayout>
    );
};

export default ProfileSettings;
