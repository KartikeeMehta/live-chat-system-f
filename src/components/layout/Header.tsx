import React from 'react';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import './Header.css';

interface HeaderProps {
    onMenuClick: () => void;
    user?: { username: string; avatar?: string };
    actions?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, user, actions }) => {
    return (
        <header className="header">
            <div className="header-left">
                <Button variant="ghost" icon="☰" onClick={onMenuClick} className="lg:hidden" />
                <h1 className="header-logo">ChatApp</h1>
            </div>
            
            <div className="header-right">
                {actions}
                {user && (
                    <div className="header-profile">
                        <span className="header-username">{user.username}</span>
                        <Avatar fallback={user.username[0]} src={user.avatar} size="sm" />
                    </div>
                )}
            </div>
        </header>
    );
};
