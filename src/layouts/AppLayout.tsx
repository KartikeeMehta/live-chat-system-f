import React, { useState } from 'react';
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
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user } = useAuth();

    return (
        <div className="app-layout">
            <Header 
                onMenuClick={() => setSidebarOpen(true)} 
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
