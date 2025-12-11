import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const Features: React.FC = () => {
    const features = [
        { icon: '⚡', title: 'Real-time Messaging', desc: 'Instant message delivery with typing indicators, read receipts, and online status. Never miss a beat with your team.' },
        { icon: '👥', title: 'Group Chats', desc: 'Create unlimited groups for teams, projects, or communities. Add members, set permissions, and manage conversations easily.' },
        { icon: '📁', title: 'File Sharing', desc: 'Share images, documents, PDFs, and more. Up to 10MB per file with preview support for common formats.' },
        { icon: '🔒', title: 'End-to-End Encryption', desc: 'Your conversations are encrypted and secure. We use industry-standard encryption to protect your privacy.' },
        { icon: '🌐', title: 'Cross-Platform', desc: 'Access ChatApp from web, mobile browsers, or install as a PWA. Your messages sync across all devices.' },
        { icon: '🔔', title: 'Smart Notifications', desc: 'Get notified about important messages without being overwhelmed. Customize notification settings per conversation.' },
        { icon: '🎨', title: 'Customizable Interface', desc: 'Personalize your chat experience with themes, custom avatars, and display preferences.' },
        { icon: '⚙️', title: 'Easy Integration', desc: 'Connect with your favorite tools and services. API access for custom integrations.' }
    ];

    return (
        <PageLayout title="Features" subtitle="Everything you need for seamless team communication">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                {features.map((feature, i) => (
                    <Card key={i} style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{feature.desc}</p>
                    </Card>
                ))}
            </div>
            <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
                <h2 style={{ marginBottom: '1rem' }}>Ready to experience these features?</h2>
                <Link to="/demo"><Button size="lg" style={{ marginRight: '1rem' }}>Try Demo</Button></Link>
                <Link to="/register"><Button size="lg">Sign Up Free</Button></Link>
            </div>
        </PageLayout>
    );
};

export default Features;
