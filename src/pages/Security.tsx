import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import { Card } from '../components/ui/Card';

const Security: React.FC = () => {
    return (
        <PageLayout title="Security" subtitle="Your privacy and security are our top priorities">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>End-to-End Encryption</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                            All messages are encrypted using industry-standard AES-256 encryption. Only you and your recipients can read your messages.
                        </p>
                    </Card>

                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Secure Infrastructure</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                            Our servers are hosted in secure data centers with 24/7 monitoring, DDoS protection, and regular security audits.
                        </p>
                    </Card>

                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Compliance</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                            We comply with GDPR, CCPA, and other privacy regulations to ensure your data is handled responsibly.
                        </p>
                    </Card>
                </div>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Security Best Practices</h2>
                    <ul style={{ color: 'var(--muted-foreground)', lineHeight: '2', paddingLeft: '1.5rem' }}>
                        <li>Use a strong, unique password for your account</li>
                        <li>Enable two-factor authentication (coming soon)</li>
                        <li>Keep your software and browser up to date</li>
                        <li>Be cautious of phishing attempts</li>
                        <li>Report suspicious activity immediately</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Report a Security Issue</h2>
                    <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                        If you discover a security vulnerability, please report it to <a href="mailto:security@chatapp.com" style={{ color: 'var(--primary)' }}>security@chatapp.com</a>. 
                        We take all reports seriously and will respond within 48 hours.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default Security;
