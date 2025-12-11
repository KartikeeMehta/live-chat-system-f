import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import { Card } from '../components/ui/Card';

const Blog: React.FC = () => {
    const posts = [
        { title: 'Introducing ChatApp: The Future of Team Communication', date: 'Dec 10, 2025', excerpt: 'We\'re excited to announce the launch of ChatApp, a modern messaging platform designed for teams...' },
        { title: '5 Ways to Boost Team Productivity with Real-Time Chat', date: 'Dec 8, 2025', excerpt: 'Discover how real-time communication can transform your team\'s workflow and collaboration...' },
        { title: 'Security First: How We Protect Your Data', date: 'Dec 5, 2025', excerpt: 'Learn about the security measures we\'ve implemented to keep your conversations private and secure...' }
    ];

    return (
        <PageLayout title="Blog" subtitle="News, updates, and insights from the ChatApp team">
            <div style={{ display: 'grid', gap: '2rem' }}>
                {posts.map((post, i) => (
                    <Card key={i} style={{ padding: '2rem', cursor: 'pointer', transition: 'transform 0.2s' }}>
                        <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>{post.date}</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>{post.excerpt}</p>
                        <div style={{ marginTop: '1rem', color: 'var(--primary)', fontWeight: 600 }}>Read more →</div>
                    </Card>
                ))}
            </div>
        </PageLayout>
    );
};

export default Blog;
