import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { useAuth } from '../context/AuthContext';
import './AppLayout.css';

interface AppLayoutProps {
    children: React.ReactNode;
    sidebarContent?: React.ReactNode;
    headerActions?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, sidebarContent, headerActions }) => {
    // On desktop (>768px), sidebar is always open. On mobile, it's toggled.
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
    const { user } = useAuth();

    // Update sidebar state on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="app-layout">
            <Header 
                onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
                user={user ? { username: user.username } : undefined} 
                actions={headerActions}
            />
            
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                {sidebarContent}
            </Sidebar>

            <main className="app-main">
                {children}
            </main>
        </div>
    );
};
