import React from 'react';
import { Button } from '../ui/Button';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children }) => {
    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Menu</h3>
                    <Button variant="ghost" size="sm" onClick={onClose} className="sidebar-close-btn">✕</Button>
                </div>
                <div className="sidebar-content">
                    {children}
                </div>
            </aside>
        </>
    );
};
