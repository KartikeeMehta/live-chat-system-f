import React from 'react';
import { PageLayout } from '../layouts/PageLayout';

const Terms: React.FC = () => {
    return (
        <PageLayout title="Terms of Service" subtitle="Last updated: December 11, 2025">
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        By accessing and using ChatApp, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Use License</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        Permission is granted to temporarily use ChatApp for personal or commercial communication purposes. This is the grant of a license, not a transfer of title.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. User Conduct</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        You agree not to use ChatApp for any unlawful purpose or in any way that could damage, disable, or impair the service.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Termination</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Contact</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        Questions about the Terms of Service should be sent to <a href="mailto:legal@chatapp.com" style={{ color: 'var(--primary)' }}>legal@chatapp.com</a>
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default Terms;
