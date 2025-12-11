import React, { useState } from 'react';
import { PageLayout } from '../layouts/PageLayout';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const faqs = [
        { q: 'Is ChatApp free to use?', a: 'Yes! ChatApp is completely free with unlimited messaging, group chats, and file sharing. We believe great communication should be accessible to everyone.' },
        { q: 'How secure is my data?', a: 'We use end-to-end encryption for all messages and industry-standard security practices. Your data is stored securely and we never sell your information to third parties.' },
        { q: 'Can I use ChatApp on mobile?', a: 'Yes! ChatApp works seamlessly on mobile browsers and can be installed as a Progressive Web App (PWA) for an app-like experience on iOS and Android.' },
        { q: 'What file types can I share?', a: 'You can share images (JPG, PNG, GIF), documents (PDF, DOC, DOCX), and most common file types up to 10MB per file.' },
        { q: 'How do I create a group chat?', a: 'Click the "New Group" button in your dashboard, give your group a name, and invite members by entering their user IDs. You can add or remove members anytime.' },
        { q: 'Can I delete messages?', a: 'Yes, you can delete your own messages. Deleted messages are removed for all participants in the conversation.' },
        { q: 'How do I find my user ID?', a: 'Your user ID is displayed in the top-right corner of your dashboard and in your profile settings. Share it with others to start direct conversations.' },
        { q: 'Is there a limit on group size?', a: 'Currently, groups can have up to 100 members. We\'re working on increasing this limit for enterprise users.' },
        { q: 'Do you have a mobile app?', a: 'We currently offer a web-based solution that works great on mobile. Native iOS and Android apps are in development!' },
        { q: 'How do I report a problem?', a: 'Contact us at hello@chatapp.com with details about the issue. We typically respond within 24 hours.' }
    ];

    return (
        <PageLayout title="Frequently Asked Questions" subtitle="Find answers to common questions">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((faq, i) => (
                    <div key={i} style={{ borderBottom: '1px solid var(--border)', marginBottom: '1rem' }}>
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            style={{
                                width: '100%',
                                padding: '1.5rem 0',
                                background: 'none',
                                border: 'none',
                                textAlign: 'left',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                color: 'var(--foreground)'
                            }}
                        >
                            {faq.q}
                            <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>
                                {openIndex === i ? '−' : '+'}
                            </span>
                        </button>
                        {openIndex === i && (
                            <div style={{ paddingBottom: '1.5rem', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};

export default FAQ;
