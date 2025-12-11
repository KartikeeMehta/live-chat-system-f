import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import { Card } from '../components/ui/Card';

const About: React.FC = () => {
    return (
        <PageLayout title="About ChatApp" subtitle="Building the future of team communication">
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
                    ChatApp was founded with a simple mission: make team communication seamless, secure, and enjoyable. 
                    We believe that great communication is the foundation of successful teams, and we're committed to 
                    building tools that bring people together.
                </p>
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Our Values</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Innovation</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>
                            Constantly pushing boundaries to deliver cutting-edge features
                        </p>
                    </Card>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Security</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>
                            Your privacy and data security are our top priorities
                        </p>
                    </Card>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❤️</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>User-First</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>
                            Every decision we make is guided by user needs
                        </p>
                    </Card>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
                    Have questions or feedback? We'd love to hear from you!<br />
                    Email: <a href="mailto:hello@chatapp.com" style={{ color: 'var(--primary)' }}>hello@chatapp.com</a>
                </p>
            </section>
        </PageLayout>
    );
};

export default About;
