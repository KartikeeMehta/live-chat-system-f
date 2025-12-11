import React from 'react';
import { PageLayout } from '../layouts/PageLayout';

const Privacy: React.FC = () => {
    return (
        <PageLayout title="Privacy Policy" subtitle="Last updated: December 11, 2025">
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        We collect information you provide directly to us, including your name, email address, and messages you send through our platform.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect ChatApp and our users.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Information Sharing</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        We do not sell your personal information. We may share your information with service providers who help us operate our platform, and as required by law.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Data Security</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Contact Us</h2>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                        If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@chatapp.com" style={{ color: 'var(--primary)' }}>privacy@chatapp.com</a>
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default Privacy;
