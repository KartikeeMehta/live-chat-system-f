import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import { Card } from '../components/ui/Card';

const HowItWorks: React.FC = () => {
    return (
        <PageLayout title="How It Works" subtitle="Get started in minutes">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Card style={{ padding: '3rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                        <div style={{ fontSize: '3rem', background: 'var(--primary)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Create Your Account</h3>
                            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                                Sign up with your email in seconds. No credit card required. Verify your email and you're ready to go.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card style={{ padding: '3rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                        <div style={{ fontSize: '3rem', background: 'var(--primary)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Start Conversations</h3>
                            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                                Create a new group or start a direct message. Share your user ID with teammates to connect. Invite members and set up your workspace.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card style={{ padding: '3rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                        <div style={{ fontSize: '3rem', background: 'var(--primary)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Collaborate in Real-Time</h3>
                            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                                Send messages, share files, and see when teammates are typing. Get instant notifications and stay in sync with your team.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </PageLayout>
    );
};

export default HowItWorks;
