import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const features = [
        { icon: '⚡', title: 'Real-time Messaging', desc: 'Instant delivery with typing indicators and read receipts' },
        { icon: '👥', title: 'Group Chats', desc: 'Create unlimited groups for teams and communities' },
        { icon: '📁', title: 'File Sharing', desc: 'Share images, documents, and files seamlessly' },
        { icon: '🔒', title: 'End-to-End Encryption', desc: 'Your conversations are private and secure' },
        { icon: '🌐', title: 'Cross-Platform', desc: 'Access from web, mobile, and desktop' },
        { icon: '🔔', title: 'Smart Notifications', desc: 'Stay updated without being overwhelmed' },
        { icon: '🎨', title: 'Customizable', desc: 'Personalize your chat experience' },
        { icon: '⚙️', title: 'Easy Integration', desc: 'Connect with your favorite tools' }
    ];

    const stats = [
        { value: '10K+', label: 'Active Users' },
        { value: '1M+', label: 'Messages Sent' },
        { value: '50+', label: 'Countries' },
        { value: '99.9%', label: 'Uptime' }
    ];

    const testimonials = [
        { name: 'Sarah Johnson', role: 'Product Manager', quote: 'ChatApp transformed how our team communicates. The real-time features are incredible!', avatar: '👩‍💼' },
        { name: 'Mike Chen', role: 'Developer', quote: 'Clean interface, powerful features. Exactly what we needed for our remote team.', avatar: '👨‍💻' },
        { name: 'Emma Davis', role: 'Designer', quote: 'Beautiful design and smooth performance. Our clients love it!', avatar: '👩‍🎨' }
    ];

    const faqs = [
        { q: 'Is ChatApp free to use?', a: 'Yes! ChatApp is completely free with unlimited messaging and group chats.' },
        { q: 'How secure is my data?', a: 'We use end-to-end encryption and industry-standard security practices to protect your data.' },
        { q: 'Can I use ChatApp on mobile?', a: 'Yes, ChatApp works seamlessly on web, mobile browsers, and can be installed as a PWA.' },
        { q: 'What file types can I share?', a: 'You can share images, documents, PDFs, and most common file types up to 10MB.' },
        { q: 'How do I create a group chat?', a: 'Simply click "New Group" in your dashboard and invite members by their user ID.' }
    ];

    return (
        <div className="landing-page">
            {/* Navigation */}
            <nav className="landing-nav">
                <div className="nav-container">
                    <div className="nav-logo">💬 ChatApp</div>
                    <div className="nav-links">
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#faq">FAQ</a>
                        <Link to="/login"><Button variant="ghost">Log In</Button></Link>
                        <Link to="/register"><Button>Sign Up</Button></Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Connect Seamlessly<br />With Your Team</h1>
                        <p className="hero-subtitle">
                            Experience real-time collaboration with crystal clear messaging, 
                            powerful tools, and a beautiful interface designed for modern teams.
                        </p>
                        <div className="hero-ctas">
                            <Link to="/register"><Button size="lg">Get Started Free</Button></Link>
                            <Link to="/demo"><Button size="lg" variant="outline">View Demo</Button></Link>
                        </div>
                        <div className="hero-trust">
                            <span>✓ No credit card required</span>
                            <span>✓ Free forever</span>
                            <span>✓ 2 min setup</span>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="chat-mockup">
                            <div className="mockup-header">
                                <div className="mockup-dots">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="mockup-content">
                                <div className="mock-message received">
                                    <div className="mock-avatar">👋</div>
                                    <div className="mock-bubble">Hello!</div>
                                </div>
                                <div className="mock-message sent">
                                    <div className="mock-bubble">Hi there, ready to launch?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="section-header">
                    <h2>Why Choose ChatApp?</h2>
                    <p>Everything you need for seamless team communication</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="how-section">
                <div className="section-header">
                    <h2>Get Started in 3 Simple Steps</h2>
                </div>
                <div className="steps-container">
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <h3>Sign Up</h3>
                        <p>Create your free account in seconds</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-item">
                        <div className="step-number">2</div>
                        <h3>Create Chats</h3>
                        <p>Start conversations or join groups</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-item">
                        <div className="step-number">3</div>
                        <h3>Start Messaging</h3>
                        <p>Collaborate in real-time</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section">
                <div className="section-header">
                    <h2>Loved by Teams Worldwide</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((test, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="testimonial-quote">"{test.quote}"</div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{test.avatar}</div>
                                <div>
                                    <div className="author-name">{test.name}</div>
                                    <div className="author-role">{test.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="faq-section">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item">
                            <button 
                                className={`faq-question ${openFaq === i ? 'active' : ''}`}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                {faq.q}
                                <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                            </button>
                            {openFaq === i && (
                                <div className="faq-answer">{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Ready to Transform Your Team Communication?</h2>
                <p>Join thousands of teams already using ChatApp</p>
                <Link to="/register"><Button size="lg">Get Started Free</Button></Link>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">💬 ChatApp</div>
                        <p>Modern messaging for modern teams</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <Link to="/features">Features</Link>
                            <Link to="/how-it-works">How It Works</Link>
                            <Link to="/faq">FAQ</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <Link to="/about">About</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/terms">Terms</Link>
                            <Link to="/security">Security</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 ChatApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
