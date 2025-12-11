import React from 'react';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import './AuthLayout.css';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
    return (
        <div className="auth-layout">
            <div className="auth-container">
                <div className="auth-header">
                    <Link to="/" className="auth-logo">ChatApp</Link>
                </div>
                <Card className="auth-card">
                    <div className="auth-title-section">
                        <h2>{title}</h2>
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                    {children}
                </Card>
            </div>
        </div>
    );
};
