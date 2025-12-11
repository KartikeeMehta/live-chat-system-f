import React from 'react';
import { PageLayout } from '../layouts/PageLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Careers: React.FC = () => {
    const jobs = [
        { title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time' },
        { title: 'Backend Developer', location: 'Remote', type: 'Full-time' },
        { title: 'Product Designer', location: 'Remote', type: 'Full-time' }
    ];

    return (
        <PageLayout title="Careers" subtitle="Join us in building the future of communication">
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Work at ChatApp?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Remote-First</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>Work from anywhere in the world</p>
                    </Card>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Competitive Pay</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>Market-leading salaries and equity</p>
                    </Card>
                    <Card style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Growth</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>Learn and grow with the team</p>
                    </Card>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Open Positions</h2>
                {jobs.map((job, i) => (
                    <Card key={i} style={{ padding: '2rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                            <div style={{ color: 'var(--muted-foreground)' }}>{job.location} • {job.type}</div>
                        </div>
                        <Button>Apply</Button>
                    </Card>
                ))}
            </section>
        </PageLayout>
    );
};

export default Careers;
