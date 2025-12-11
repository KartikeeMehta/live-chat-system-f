import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './PageLayout.css';

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle }) => {
    return (
        <div className="page-layout">
            <nav className="page-nav">
                <Link to="/" className="page-logo">💬 ChatApp</Link>
                <div className="page-nav-links">
                    <Link to="/features">Features</Link>
                    <Link to="/how-it-works">How It Works</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/login"><Button variant="ghost">Log In</Button></Link>
                    <Link to="/register"><Button>Sign Up</Button></Link>
                </div>
            </nav>

            <div className="page-header">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>

            <div className="page-content">
                {children}
            </div>

            <footer className="page-footer">
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
