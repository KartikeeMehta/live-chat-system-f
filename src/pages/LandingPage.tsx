import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <nav className="landing-nav container">
                <div className="landing-logo">ChatApp</div>
                <div className="landing-nav-links">
                    <Link to="/login"><Button variant="ghost">Log In</Button></Link>
                    <Link to="/register"><Button>Sign Up</Button></Link>
                </div>
            </nav>

            <header className="landing-hero container">
                <div className="hero-content">
                    <h1>Connect seamlessly with your team.</h1>
                    <p>Experience real-time collaboration with crystal clear audio, instant messaging, and powerful tools designed for modern teams.</p>
                    <div className="hero-actions">
                        <Link to="/register"><Button size="lg">Get Started</Button></Link>
                        <Button variant="outline" size="lg">View Demo</Button>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Placeholder for Hero Image */}
                    <div className="hero-image-placeholder">
                        <div className="mockup-window">
                             <div className="mockup-sidebar"></div>
                             <div className="mockup-chat">
                                 <div className="mockup-msg msg-in">Hello!</div>
                                 <div className="mockup-msg msg-out">Hi there, ready to launch?</div>
                             </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="landing-features container">
                <h2 className="text-center">Why choose ChatApp?</h2>
                <div className="features-grid">
                    <Card className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Real-time Messaging</h3>
                        <p>Instant delivery with typing indicators and read receipts.</p>
                    </Card>
                    <Card className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure & Private</h3>
                        <p>End-to-end encryption to keep your conversations safe.</p>
                    </Card>
                    <Card className="feature-card">
                        <div className="feature-icon">📁</div>
                        <h3>File Sharing</h3>
                        <p>Share documents, images, and media effortlessly.</p>
                    </Card>
                </div>
            </section>

            <footer className="landing-footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} ChatApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
